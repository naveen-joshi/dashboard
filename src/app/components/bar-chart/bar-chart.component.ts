import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @Input() public data = {
    label: '',
    value: '',
    percentage: '',
    colorVariable: '',
    displayOrder: '',
  };
  @Input() public spacingWidth = 5;

  public show = false;

  public animateIn() {
    this.show = true;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['data']?.currentValue) {
      this.animateIn();
    }
  }
}
