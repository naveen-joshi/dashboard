import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  barData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http
    //   .get<any[]>('http://localhost:3000/barChartData')
    //   .subscribe((data) => {
    //     this.barData = data;
    //   });
  }

  barChartData = [
    { label: 'Category 1', value: 30 },
    { label: 'Category 2', value: 50 },
    { label: 'Category 3', value: 20 },
    { label: 'Category 4', value: 45 },
    // Add more data points as needed
  ];
}
