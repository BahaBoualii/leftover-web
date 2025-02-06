import { Component, OnInit } from '@angular/core';
import { Store, StoreCategory } from 'src/app/models/store.model';
import { StoresService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html'
})
export class StoresComponent implements OnInit {
  stores: Store[] = [];
  searchQuery = '';
  selectedCategory = '';
  selectedLocation = '';
  selectedSort = '';
  selectedStore: Store | null = null; 
  storeCategory = ''; 

  categories = Object.values(StoreCategory);
  locations: string[] = [];

  
  constructor(private storesService: StoresService) {}

  ngOnInit() {
    this.loadStores();
  }

  private loadStores() {
    this.storesService.getAllStores().subscribe({
      next: (data) => {
        this.stores = data;
        this.populateLocations();
      },
      error: (error) => {
        console.error('Error fetching stores:', error);
      }
    });
  }

  sortedStores(): Store[] {
    let filteredStores = this.stores;
    
    // Apply search
    if (this.searchQuery) {
      filteredStores = filteredStores.filter(store => 
        store.storeName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (this.selectedCategory) {
      filteredStores = filteredStores.filter(store => 
        store.category === this.selectedCategory
      );
    }

    // Apply location filter
    if (this.selectedLocation) {
      filteredStores = filteredStores.filter(store => 
        store.location.city === this.selectedLocation
      );
    }

    // Apply sorting
    switch (this.selectedSort) {
      case 'nameAsc':
        return filteredStores.sort((a, b) => a.storeName.localeCompare(b.storeName));
      case 'nameDesc':
        return filteredStores.sort((a, b) => b.storeName.localeCompare(a.storeName));
      case 'category':
        return filteredStores.sort((a, b) => a.category.localeCompare(b.category));
      case 'location':
        return filteredStores.sort((a, b) => a.location.city.localeCompare(b.location.city));
      default:
        return filteredStores;
    }
  }

  showStoreDetails(store: Store) {
    this.selectedStore = store;
  }

  closeStoreDetails() {
    this.selectedStore = null;
  }

  private populateLocations() {
    this.locations = [...new Set(this.stores.map(store => store.location.city))];
  }
}
