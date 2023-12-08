import { Component } from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {RestaurantDto} from "../../models/dto/restaurant.dto";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";
import {LineYellowOrRedDirective} from "../../directives/line-yellow-or-red.directive";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, LineYellowOrRedDirective, NgOptimizedImage],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  public restaurant?: RestaurantDto;
  public evaluateur: string = "";
  public commentaire: string = "";
  public note: number = 0;

  constructor(private readonly restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.getRestaurantById(1);
  }

  public getRestaurantById(restaurantId: number): void {
    this.restaurantService.loadRestaurantById(restaurantId).subscribe(value => {
      this.restaurant = value;
      this.getCover(this.restaurant)
    })
  }

  public getCover(restaurant: RestaurantDto): void {
    this.restaurantService.getImageUrl(restaurant.id).subscribe(urlDto => {
      restaurant.imageUrl = urlDto.url;
    })
  }

  save(form: NgForm): void {
    if(form.valid) {
      this.restaurantService.addEvaluation(1,this.evaluateur,this.commentaire,this.note).subscribe()
    }
  }

}
