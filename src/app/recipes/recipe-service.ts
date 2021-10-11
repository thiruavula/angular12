import { Recipe } from "./recipe-model";

export class RecipeService {
    private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simple test','.\\assets\\road-1072821__340.jpg'),
        new Recipe('Another Test Recipe','This is another test','.\\assets\\road-1072821__340.jpg')
    
      ]; 

      getRecipes(){
          return this.recipes.slice();
      }
}