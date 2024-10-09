import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A test recipe', 'This is simply a test', 'https://www.allrecipes.com/thmb/XlI_LU3G49F7KI4AC5o6RecuPVM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://www.allrecipes.com/thmb/XlI_LU3G49F7KI4AC5o6RecuPVM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg')
  ];

  constructor(){

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
