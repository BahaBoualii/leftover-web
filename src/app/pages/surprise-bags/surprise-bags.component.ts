import { Component } from '@angular/core';

@Component({
  selector: 'app-surprise-bags',
  templateUrl: './surprise-bags.component.html',
  styleUrls: ['./surprise-bags.component.css']
})
export class SurpriseBagsComponent {
  searchQuery = '';
  selectedCategory = '';
  selectedSort = '';
  selectedBag: any = null;
  cart: any[] = []; // Store reserved bags

  categories = ['Bakery', 'Grocery', 'Restaurant', 'Cafe'];
  surpriseBags = [
    {
      name: 'Bakery Delight',
      description: 'A mix of freshly baked pastries and bread.',
      price: 15,
      availability: 5,
      store: 'Fresh Bakery',
      expires: 'Today, 7:00 PM',
      image: 'assets/bag.png',
      category: 'Bakery'
    },
    {
      name: 'Grocery Surprise',
      description: 'Fresh veggies and fruits at a great price.',
      price: 10,
      availability: 3,
      store: 'Green Grocers',
      expires: 'Tomorrow, 6:00 PM',
      image: 'assets/bag.png',
      category: 'Restaurant'
    }
  ];

  // Filtered and sorted bags
  filteredBags() {
    return this.surpriseBags.filter((bag) => {
      const matchesSearch = bag.name
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
      const matchesCategory =
        !this.selectedCategory || bag.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  sortedBags() {
    const bags = this.filteredBags();
    switch (this.selectedSort) {
      case 'priceLowToHigh':
        return bags.sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return bags.sort((a, b) => b.price - a.price);
      case 'nameAsc':
        return bags.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return bags.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return bags;
    }
  }

  showBagDetails(bag: any): void {
    this.selectedBag = bag;
  }

  closeBagDetails(): void {
    this.selectedBag = null;
  }

  reserveBag(bag: any): void {
    this.cart.push(bag);
    alert(`${bag.name} has been added to your cart.`);
    this.selectedBag = null;
  }
}
