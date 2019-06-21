import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string;
  surname:string;
  age:number;

  constructor(private router:Router) { }
  submit(){
    // console.log(this.name);
    // console.log(this.surname);
    // console.log(this.age);
    this.router.navigateByUrl("about");
  }
  ngOnInit() {
  }

}
