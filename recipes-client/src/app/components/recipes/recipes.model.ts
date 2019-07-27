export class Recipe {
  public name: string;
  public ingredients: [];
  public prepare: string;
  constructor(name: string, ingredients: [], prepare: string) {
    (this.name = name),
      (this.ingredients = ingredients),
      (this.prepare = prepare);
  }
}
