import { SurpriseBag } from "./bag.model";
import { Customer } from "./customer.model";

export enum OrderStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
}

export interface Order {
    orderId: string;
    orderDate: Date;
    status: OrderStatus;
    bag: SurpriseBag;
    customer: Customer;
    pickupCode: string;
  }