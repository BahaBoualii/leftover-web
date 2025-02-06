import { Customer } from "./customer.model";
import { Store } from "./store.model";

export enum Role {
    ADMIN = 'admin',
    STORE_ADMIN = 'store_admin',
    USER = 'user',
}
  
  
export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    status: UserStatus;
    customer?: Customer;
    store?: Store;
    role: Role;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  }