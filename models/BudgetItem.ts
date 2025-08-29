import {IBudgetItem} from './IBudgetItem';

export class BudgetItem implements IBudgetItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number = 1,
    public category: string,
  ) {}
}
