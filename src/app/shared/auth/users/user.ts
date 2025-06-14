import { Product } from "../../shopping-cart/product";

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  created: Date;
  loggedIn: boolean;
  lastLogin: Date;
  currentSession: string;
  cart: Product[];
}
