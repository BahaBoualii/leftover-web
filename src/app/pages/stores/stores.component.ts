import { Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  searchQuery = '';
  selectedCategory = '';
  selectedLocation = '';
  selectedSort = '';
  selectedStore: any = null;

  categories = ['Bakery', 'Grocery', 'Restaurant', 'Cafe'];
  locations = ['Tunis', 'Sousse', 'Sfax', 'Hammamet'];

  stores = [
    {
      name: 'Fresh Bakery',
      description: 'Freshly baked bread and pastries daily.',
      location: 'Tunis',
      category: 'Bakery',
      contact: '+216 123 456 789',
      workingHours: '7:00 AM - 8:00 PM',
      logo: 'assets/store.png',
      surpriseBags: [
        { name: 'Morning Delight', price: 12 },
        { name: 'Evening Special', price: 15 }
      ]
    },
    {
      name: 'Green Grocers',
      description: 'Organic fruits and vegetables at great prices.',
      location: 'Sousse',
      category: 'Grocery',
      contact: '+216 987 654 321',
      workingHours: '8:00 AM - 9:00 PM',
      logo: 'assets/store.png',
      surpriseBags: [
        { name: 'Veggie Bag', price: 10 },
        { name: 'Fruit Basket', price: 8 }
      ]
    }
  ];

  filteredStores() {
    return this.stores.filter((store) => {
      const matchesSearch = store.name
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
      const matchesCategory =
        !this.selectedCategory || store.category === this.selectedCategory;
      const matchesLocation =
        !this.selectedLocation || store.location === this.selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }

  sortedStores() {
    const stores = this.filteredStores();

    switch (this.selectedSort) {
      case 'nameAsc':
        return stores.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return stores.sort((a, b) => b.name.localeCompare(a.name));
      case 'category':
        return stores.sort((a, b) => a.category.localeCompare(b.category));
      case 'location':
        return stores.sort((a, b) => a.location.localeCompare(b.location));
      default:
        return stores;
    }
  }

  showStoreDetails(store: any): void {
    this.selectedStore = store;
  }

  closeStoreDetails(): void {
    this.selectedStore = null;
  }
}
