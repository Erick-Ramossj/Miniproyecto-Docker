import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  datos: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getDatos().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    });
  }
}