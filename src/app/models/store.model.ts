import { SurpriseBag } from "./bag.model";
import { Review } from "./review.model";
import { User } from "./user.moderl";

export enum StoreCategory {
    RESTAURANT = 'RESTAURANT',
    BAKERY = 'BAKERY',
    SUPERMARKET = 'SUPERMARKET',
    CAFE = 'CAFE',
    HOTEL = 'HOTEL',
    OTHER = 'OTHER'
  }
  
 

  export interface PickupWindow {
    pickupWindowId: number;
    startTime: Date;
    endTime: Date;
    availableSlots: number;
    store: Store;
  }
  
  // location.model.ts
  export interface Location {
    locationId: string;
    address: string;
    city: string;
    latitude: number;
    longitude: number;
    postalCode: string;
    country: string;
  }
  

  
  // store.model.ts
  export interface Store {
    storeId: string;
    owner: User;  
    storeName: string;
    description: string;
    category: StoreCategory;
    pickupWindows: PickupWindow[];  
    isVerified: boolean;
    averageRating: number;
    activeBags: SurpriseBag[];
    reviews: Review[];  
    location: Location;
    photoUrl?: string;
    averageBagValue: number;
  }