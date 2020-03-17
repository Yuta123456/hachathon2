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
  TodayNumber:number = 5;
  dec:number = 1;
  last_update:string
  now_update:string;
  Problems:{
    name: string,
    url: string,
    memo:string,
    priority:number,
    checked:boolean,
    message:string
  }[] = [];
  today:{
    name:string,
    url:string,
    memo:string,  
    priority:number,
    checked:boolean,
    message:string
  }[] = []
  goToNextPage(){
    this.router.navigateByUrl('input-problem');
  }
  goToProblemList(){
    this.router.navigateByUrl('problem-list');
  }
  //一つにまとめれるかも？todo
  //問題を解いたときに文字を変える関数
  ProblemMessage(t){
    if (t.checked){
      t.message = "clear"
    }else{
      t.message = "solve"
    }
    localStorage.today = JSON.stringify(this.today)
  }
  constructor(private router:Router,) { }
  ngOnInit() {
  }
  today_init(){
    //前日の問題の処理をする
    console.log("today init run")
    if ('today' in localStorage){
      //前日の処理ができる
      this.today = JSON.parse(localStorage.today)
      var fin = this.today.length
      for(let i = 0;i < fin;i++){
        if (this.today[0].checked){
          var k = this.today[0].priority;
          this.today[0].priority -= this.dec;
          this.today[0].checked = false;
        }
        if (this.today[0].priority > 0){
          this.Problems.push(this.today.shift())
        }else{
          //優先度が0以下だった場合は、plobremsに入れない
          this.today.shift()
        }
      }
    }
    this.today = []
    this.Problems.sort((a,b)=>b.priority - a.priority)
    //優先度が高い順からtodayに入れていく
    for (let i = 0;i < this.TodayNumber && i < this.Problems.length;i++){
      this.today.push(this.Problems.shift())
    }
    //データの保存を行う
    localStorage.Problems = JSON.stringify(this.Problems)
    localStorage.today = JSON.stringify(this.today)
    //今の日付をdateに代入
    const date = new Date()
    this.last_update = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString()
    localStorage.last_update = JSON.stringify(this.last_update)
  }
  ionViewWillEnter(){
    //localStorage.clear()
    if ('Problems' in localStorage) {
      this.Problems = JSON.parse(localStorage.Problems)
    }
    if ('today' in localStorage) {
      //今の日付と、最終更新日を比較したい
      const date = new Date()
      
      this.last_update = "22222222"
      localStorage.last_update = JSON.stringify(this.last_update)
      
      this.now_update = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString()
      if ("last_update" in localStorage) {
        this.last_update = JSON.parse(localStorage.last_update)
      }else{
        this.last_update = "22222222"
      }
      if ( this.now_update != this.last_update ){
        this.today_init()
      }else{
        this.today = JSON.parse(localStorage.today);
      }
    }else{
      this.today_init()
    }
    this.today.sort((a,b) => b.priority - a.priority)
  }
  ProblemColor(problem) {
    if (problem.checked) {
      return 'success'
    }else{
      return 'warning'
    }
  }
}
