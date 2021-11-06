import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private base_url: string = 'http://localhost:3000/recipes'

  constructor(private _httpClient: HttpClient) { }

  getRecipes() {
    return this._httpClient.get(this.base_url)
  }

  createRecipe(recipe: Recipe) {
    return this._httpClient.post(this.base_url, recipe)
  }
}
