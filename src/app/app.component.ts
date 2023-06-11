import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const BASE_URL = 'http://localhost:4201';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  items = this.http.get<any[]>(`${BASE_URL}/api/items`);

    constructor(private http: HttpClient) {}

    post() {
      this.http.post<any>(`${BASE_URL}/api/items`, { startId: 3, endId: 5 })
      .subscribe(items => {
        console.log(items);
        this.items = of(items);
      });

    }
}
