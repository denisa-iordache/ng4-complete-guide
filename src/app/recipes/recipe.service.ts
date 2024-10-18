import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    recipedChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Schnitzel', 'A super tasty chicken schnitzel!', 'https://www.prestij.ro/uploads/produse/660x660/253--snitel-de-pui-in-fulgi-de-porumb-cu-cartofi-prajiti-150-200g.jpg',
        [new Ingredient('Chicken Meat', 1),
        new Ingredient('Salad', 1),
        new Ingredient('Fries', 1)]),
        new Recipe('Lava Cake', 'Did somebody say dessert? Try the best lava cake!', 'https://cookiesfordays.com/wp-content/uploads/2024/01/molten-lava-cakes-10.jpg',
        [new Ingredient('Cocoa', 1),
        new Ingredient('Vanilla Ice Cream', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Eggs', 3)])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipedChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipedChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipedChanged.next(this.recipes.slice())
    }
}