import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { MenuController } from '@ionic/angular';
//import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Problems:{
    name: string,
    url: string,
    memo:string,
    last_AC:number,
    checked:boolean,
    message:string
  }[] = [];
  goToNextPage(){
    this.router.navigateByUrl('input-problem');
  }
  goToProblemList(){
    this.router.navigateByUrl('problem-list');
  }
  //問題を解いたときに文字を変える関数
  ProblemMessage(t){
    if (t.checked){
      t.message = "clear"
    }else{
      t.message = "solve"
    }
  }
  constructor(private router:Router,) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    //localStrageを消す場合はここのコメントアウトを消す
    //localStorage.clear()
    if ('Problems' in localStorage) {
      this.Problems = JSON.parse(localStorage.Problems)
    }
  }
  //問題を解いたら色が変わる関数
  ProblemColor(problem) {
    if (problem.checked) {
      return 'success'
    }else{
      return 
    }
  }
}
