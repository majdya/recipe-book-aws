export class Ingredient {
  public ingName: string;
  public vegan: boolean;

  constructor(ingName: string, vegan: boolean) {
    (this.ingName = ingName), (this.vegan = vegan);
  }
}
