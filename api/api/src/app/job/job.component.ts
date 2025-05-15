import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-job',
  standalone: false,
  templateUrl: './job.component.html',
  styleUrl: './job.component.sass'
})
export class JobComponent {

  jobs: Job[] = []
  apiBaseUrl: string = "https://api.siposm.hu/"

  constructor(private http:HttpClient){
    this.loadApi()
  }
  loadApi():void{
    this.http.get<Job[]>(this.apiBaseUrl + "/job").subscribe(
      x => { this.jobs = x
      console.log(this.jobs)
    })
  }

}
