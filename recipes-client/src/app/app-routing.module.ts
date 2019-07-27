import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { StaticsComponent } from "./components/statics/statics.component";

const appRoutes: Routes = [
  { path: "recipes", component: RecipesComponent },
  // { path: "recipe/:id", component: RecipesComponent },
  { path: "statics", component: StaticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
