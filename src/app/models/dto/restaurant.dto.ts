import {EvaluationDto} from "./evaluation.dto";

export interface RestaurantDto {
  id: number;
  nom: string;
  adresse: string;
  evaluations?: EvaluationDto[];
  imageUrl?: string;

}
