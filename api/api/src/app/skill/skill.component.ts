import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.sass'
})
export class SkillComponent {

  skills: Skill[] = []
  apiBaseUrl:string = "https://api.siposm.hu/"

  constructor(private http:HttpClient){
    this.loadApi()
  }

loadApi():void{
  this.http.get<Skill[]>(this.apiBaseUrl + "/skill").subscribe(
    x => {this.skills = x

      console.log(this.skills)
    }
  )
}

}
