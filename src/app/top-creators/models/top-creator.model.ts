import { Product } from './product.model';
import { User } from './user.model';

export type TopCreator = {
  user: User;
  productCount: number;
  mostRecentProduct: Product | null;
};
