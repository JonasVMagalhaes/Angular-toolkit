import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'potato';

  constructor(private readonly http: HttpClient) {}

  onButtonClick() {
    this.http.get("https://k106y.wiremockapi.cloud/cargo").subscribe(res => 
      console.log(res)
    );
  }
}
