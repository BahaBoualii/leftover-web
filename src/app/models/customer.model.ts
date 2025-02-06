import { Order } from "./order.model";
import { Review } from "./review.model";
import { User } from "./user.moderl";

export interface Customer {
    id: string;
    user: User;
    reviews: Review[];
    orders: Order[];
}