import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    return this.http.put('https://ng-course-recipe-book-9ff8a-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-course-recipe-book-9ff8a-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipes => {
      return recipes.map(recipe => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
      });
    }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      }));
  }
}