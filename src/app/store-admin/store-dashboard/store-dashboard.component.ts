import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styleUrls: ['./store-dashboard.component.css']
})
export class StoreDashboardComponent implements OnInit {
  totalBags = 20;
  availableBags = 15;
  totalRevenue = 1200;
  totalCustomers = 350;

  constructor() {}

  ngOnInit(): void {}
}
