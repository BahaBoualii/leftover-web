import { Store } from "./store.model";

export enum MealType {
    BREAKFAST = 'BREAKFAST',
    LUNCH = 'LUNCH',
    DINNER = 'DINNER',
    BAKERY = 'BAKERY',
    GROCERIES = 'GROCERIES',
    MIXED = 'MIXED',
  }

export enum BagStatus {
    AVAILABLE = 'AVAILABLE',
    RESERVED = 'RESERVED',
    SOLD_OUT= 'SOLD_OUT',
    COLLECTED = 'COLLECTED',
    CANCELLED = 'CANCELLED',
}
  
export interface SurpriseBag {
    bagId: string;
    name: string;
    description: string;
    originalValue: number;
    discountedPrice: number;
    quantity: number;
    mealType: MealType;
    allergenInfo: string[];
    pickupStart: Date;
    pickupEnd: Date;
    status: BagStatus;
    store?: Store; 
  }