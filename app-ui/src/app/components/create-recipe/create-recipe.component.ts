import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  public newRecipe: Recipe = new Recipe()

  constructor(private _recipeService: RecipesService, private _router: Router) { }

  ngOnInit(): void {
  }

  createRecipe() {
    console.log("printing recipe: ", this.newRecipe)
    this._recipeService.createRecipe(this.newRecipe).subscribe(recipe => {
      if (recipe) {
        this._router.navigateByUrl('/recipes')
      }
    })
  }

}
