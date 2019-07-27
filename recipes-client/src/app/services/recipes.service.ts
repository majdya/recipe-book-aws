import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../components/recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private uri = 'http://18.185.131.167:4000/api/recipes';
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe[]>(this.uri);
  }
}
