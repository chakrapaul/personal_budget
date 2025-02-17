import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = [];

  constructor(private http: HttpClient) {}

  // Method to get the data
  getData(): Observable<any> {
    if (this.data.length === 0) {
      return this.http.get('http://localhost:3000/budget');  // Fetch data from the backend
    } else {
      return new Observable(observer => {
        observer.next(this.data);  // Return the cached data if it's already fetched
      });
    }
  }

  // Method to set the data (if you need to update it manually)
  setData(data: any): void {
    this.data = data;
  }
}
