import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  public recipes: any = [{
    title: "title 1",
    description: "desc 1"
  },
  {
    title: "title 2",
    description: "desc 2"
  },
  {
    title: "title 3",
    description: "desc 3"
  }]

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes
    })
  }

}
