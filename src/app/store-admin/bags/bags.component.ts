import { Component } from '@angular/core';

interface SurpriseBag {
  id: number;
  name: string;
  price: number;
  available: boolean;
}

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent {
  searchTerm: string = '';
  sortBy: string = 'name';

  surpriseBags: SurpriseBag[] = [
    { id: 1, name: 'Organic Veggies', price: 10, available: true },
    { id: 2, name: 'Bakery Mix', price: 7, available: false },
    { id: 3, name: 'Gourmet Delights', price: 15, available: true },
  ];

  filteredBags(): SurpriseBag[] {
    let bags = [...this.surpriseBags];

    // Filter by search term
    if (this.searchTerm) {
      bags = bags.filter(bag =>
        bag.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Sort by selected criteria
    switch (this.sortBy) {
      case 'price':
        bags.sort((a, b) => a.price - b.price);
        break;
      case 'availability':
        bags.sort((a, b) => Number(b.available) - Number(a.available));
        break;
      default:
        bags.sort((a, b) => a.name.localeCompare(b.name));
    }

    return bags;
  }

  addBag(): void {
    const newBag: SurpriseBag = {
      id: this.surpriseBags.length + 1,
      name: 'New Surprise Bag',
      price: 10,
      available: true
    };
    this.surpriseBags.push(newBag);
  }

  editBag(id: number): void {
    alert('Edit bag: ' + id);
  }

  deleteBag(id: number): void {
    this.surpriseBags = this.surpriseBags.filter(bag => bag.id !== id);
  }

  toggleAvailability(id: number): void {
    this.surpriseBags = this.surpriseBags.map(bag =>
      bag.id === id ? { ...bag, available: !bag.available } : bag
    );
  }
}
