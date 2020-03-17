import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.page.html',
  styleUrls: ['./problem-list.page.scss'],
})
export class ProblemListPage implements OnInit {
  Problems:{
    name: string,
    url: string,
    memo:string,
    priority:number,
    checked:boolean
  }[] = []
  today:{
    name:string,
    url:string,
    memo:string,  
    priority:number,
    checked:boolean
  }[] = []
  ionViewWillEnter(){
    if ('Problems' in localStorage){
      this.Problems = JSON.parse(localStorage.Problems)
    }
    if ('today' in localStorage){
      this.today = JSON.parse(localStorage.today)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
