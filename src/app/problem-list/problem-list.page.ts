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
    last_AC:number,
    checked:boolean,
    message:string
  }[] = []
  ionViewWillEnter(){
    if ('Problems' in localStorage){
      this.Problems = JSON.parse(localStorage.Problems)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
