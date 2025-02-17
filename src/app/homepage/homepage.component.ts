import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, ArcElement, Tooltip, Legend, Title, PieController } from 'chart.js';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public dataSource = {
    datasets: [
      {
        data: [] as number[], // Define 'data' as a number array
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
        ]
      }
    ],
    labels: [] as string[] // Define 'labels' as a string array
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
      .subscribe(
        (res: any) => {
          console.log('Full Response:', res); // Log the full response to understand the structure
          if (res && res.myBudget) { // Ensure the expected data structure
            for (let i = 0; i < res.myBudget.length; i++) {
              this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
              this.dataSource.labels[i] = res.myBudget[i].title;
            }
            this.createChart();
          } else {
            console.error('Expected data structure not found:', res);
          }
        },
        (error) => {
          console.error('Error fetching budget data:', error);
        }
      );
  }

  createChart(): void {
    // Register the necessary components of Chart.js
    Chart.register(ArcElement, Tooltip, Legend, Title, PieController);

    // Make sure the canvas element exists before trying to create a chart
    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'pie', // Now that the necessary components are registered, this should work
          data: this.dataSource
        });
      } else {
        console.error('Canvas context not found');
      }
    } else {
      console.error('Canvas element not found');
    }
  }
}
