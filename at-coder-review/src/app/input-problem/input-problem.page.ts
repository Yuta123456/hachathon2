import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-plobrem',
  templateUrl: './input-problem.page.html',
  styleUrls: ['./input-problem.page.scss'],
})
export class InputProblemPage implements OnInit {
  Problems:{
    name: string,
    url: string,
    memo:string,
    priority:number,
    checked:boolean
  }[] = []
  constructor() { }
  goToBackPage(){
    history.back();
  }
  ngOnInit() {
  }
  ionViewWillEnter(){
    if ('Problems' in localStorage) {
      this.Problems = JSON.parse(localStorage.Problems)
    }
  }
  resist_name:string;
  resist_url:string;
  resist_memo:string;
  resist_priority:number;
  resist_checked:boolean;
  resister_Problem() {
    var resist = {
      name: this.resist_name,
      url: this.resist_url,
      memo: this.resist_memo,
      priority: this.resist_priority,
      checked:false
    }
    this.Problems.push(resist);
    this.Problems.sort((a,b) => b.priority - a.priority)
    localStorage.Problems = JSON.stringify(this.Problems)
    resist = {name:'',url:'',memo:'',priority:null,checked:false};
    this.goToBackPage();
  }
}
