import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';

  barChartData = [
    { label: 'Category 1', value: 30 },
    { label: 'Category 2', value: 50 },
    { label: 'Category 3', value: 20 },
    { label: 'Category 4', value: 45 },
    // Add more data points as needed
  ];
}
