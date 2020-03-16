import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  problems:{
    name: string,
    url: string,
    memo:string,
    priority:number
  }[] = [
  ];
  today:{
    name:string,
    url:string,
    memo:string,
    priority:number
  }[] = []
  //localStorage.plobrems = JSON.stringify(this.plobrems)
  goToNextPage(){
    this.router.navigateByUrl('/input-plobrem');
  }
  constructor(private router:Router,) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    if ('plobrems' in localStorage) {
      this.problems = JSON.parse(localStorage.plobrems)
    }
    if ('today' in localStorage) {
      this.today = JSON.parse(localStorage.today);
    }else{
      for (let i = 0;i < 5 && i < this.problems.length && this.today.length < 5;i++){
        this.today.push(this.problems[i])
      }
    }
    this.today.sort((a,b) => b.priority - a.priority)
  }
}
