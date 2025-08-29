import {IBudgetItem} from './IBudgetItem';

export class BudgetItem implements IBudgetItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number = 1,
    public category: string,
  ) {}

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getCategory(): string {
    return this.category;
  }
}
