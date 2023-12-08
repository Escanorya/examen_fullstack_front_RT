import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestaurantDto} from "../models/dto/restaurant.dto";
import {UrlDto} from "../models/dto/url.dto";
import {EvaluationDto} from "../models/dto/evaluation.dto";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) {
  }

  public loadData(): Observable<RestaurantDto[]> {
    return this.httpClient.get<RestaurantDto[]>('http://localhost:8080/restaurants')
  }

  public loadRestaurantById(restaurantId: number): Observable<RestaurantDto> {
    return this.httpClient.get<RestaurantDto>(`http://localhost:8080/restaurants/${restaurantId}`)
  }

  public getImageUrl(restaurantId: number): Observable<UrlDto> {
    return this.httpClient.get<UrlDto>(`http://localhost:8080/restaurants/${restaurantId}/image`);
  }

  public addRestaurant(nom: string, adresse: string): Observable<RestaurantDto> {
    return this.httpClient.post<RestaurantDto>(`http://localhost:8080/restaurants`,
      {
        "nom": nom,
        "adresse": adresse
      });
  }

  public addEvaluation(restaurantId: number, evaluateur: string, commentaire: string, note: number): Observable<EvaluationDto> {
    return this.httpClient.post<EvaluationDto>(`http://localhost:8080/restaurants/${restaurantId}/evaluation`,
      {
        "evaluateur": evaluateur,
        "commentaire": commentaire,
        "note": note
      })
  }

}
