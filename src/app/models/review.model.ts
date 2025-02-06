import { Customer } from "./customer.model";
import { Store } from "./store.model";

export interface Review {
    reviewId: number;
    rating: number;
    comment: string;
    datePosted: Date;
    store: Store;
    customer: Customer;
  }