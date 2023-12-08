import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RestaurantDto} from "../../models/dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {LineYellowOrRedDirective} from "../../directives/line-yellow-or-red.directive";
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LineYellowOrRedDirective, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public restaurants: RestaurantDto[] = [];
  public nom: string = "";
  public adresse: string = "";

  constructor(private readonly restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.refreshRestaurants();
  }

  public refreshRestaurants(): void {
    this.restaurantService.loadData().subscribe(value => {
      this.restaurants = value;
    })
  }

  save(form: NgForm): void {
    if(form.valid) {
      console.log("Nom : " + this.nom + "\nAdresse : " + this.adresse)
      this.restaurantService.addRestaurant(this.nom,this.adresse).subscribe()
    }
  }

  public calculMoyenne(restaurant: RestaurantDto): string {
    var diviseur: number = 0;
    var somme: number = 0;
    if(restaurant.evaluations !== undefined && restaurant.evaluations !== null) {
      for(let evaluation of restaurant.evaluations) {
        diviseur++;
        somme += evaluation.note;
      }
      var moyenne: number = somme / diviseur
      return moyenne.toString()
    } else {
      return "/";
    }
  }

}
