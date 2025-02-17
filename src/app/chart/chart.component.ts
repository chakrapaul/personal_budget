import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';  // Import the DataService
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @ViewChild('chartContainer', { static: true }) private chartContainer!: ElementRef;

  constructor(private dataService: DataService) {}  // Inject the DataService

  ngOnInit() {
    // Subscribe to the data from the service and create the chart when data is received
    this.dataService.getData().subscribe((res: any) => {
      this.createChart(res);  // Pass the data to the chart creation method
    });
  }

  createChart(data: any): void {
    // Safely get the native element from chartContainer
    const element = this.chartContainer.nativeElement;
    const width = element.clientWidth;
    const height = element.clientHeight;

    // Create the SVG chart element
    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Assuming data.myBudget is an array of numbers
    svg.selectAll('rect')
      .data(data.myBudget)  // Using data.myBudget (ensure this is an array of numbers)
      .enter()
      .append('rect')
      .attr('x', (_d: any, i: number) => i * (width / data.myBudget.length))  // Position each bar
      .attr('y', (_d: any) => height - _d)  // Corrected function for positioning bars
      .attr('width', width / data.myBudget.length - 1)  // Set the width of each bar
      .attr('height', (d: any) => d)  // Corrected arrow function for height based on the budget value
      .attr('fill', 'steelblue');  // Set bar color
  }
}
