import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../developer';


@Component({
  selector: 'app-develpoers',
  standalone: false,
  templateUrl: './develpoers.component.html',
  styleUrl: './develpoers.component.sass'
})

export class DevelpoersComponent {

  developers: Developer[] = []
  apiBaseUrl: string = "https://api.siposm.hu/"

  constructor(private http: HttpClient,private router: Router){
    this.loadApi()
  }

  loadApi(): void{
    this.http.get<Developer[]>(this.apiBaseUrl + "getDevelopers").subscribe(
      x => {this.developers = x 
        console.log(this.developers);
      }) 
  }

  filter(): void{
    this.developers
  }



}
