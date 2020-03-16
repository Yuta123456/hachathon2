import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  dec:number = 3;
  last_update:string
  now_update:string;
  problems:{
    name: string,
    url: string,
    memo:string,
    priority:number,
    checked:boolean
  }[] = [
  ];
  today:{
    name:string,
    url:string,
    memo:string,  
    priority:number,
    checked:boolean
  }[] = []
  //localStorage.plobrems = JSON.stringify(this.plobrems)
  goToNextPage(){
    this.router.navigateByUrl('/input-plobrem');
  }
  func(t){
    localStorage.today = JSON.stringify(this.today)
  }
  constructor(private router:Router,) { }
  ngOnInit() {
  }
  function(a, b) {
    if (a.priority > b.priority) {
      return 1;
    } else {
      return -1;
    }
  }
  today_init(){
    //前日の問題の処理をする
    if ('today' in localStorage){
      //前日の処理ができる
      this.today = JSON.parse(localStorage.today)
      var fin = this.today.length
      for(let i = 0;i < fin;i++){
        var k = this.today[0].priority;
        this.today[0].priority = k - this.dec;
        this.problems.push(this.today[0])
        this.today.shift()
      }
    }
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
    for(let i = 0;i < this.problems.length;i++){
      console.log(this.problems[i])
    }
    this.problems.sort((a,b)=>b.priority - a.priority)
    console.log("today_init run!")
    for (let i = 0;i < 5 && i < this.problems.length && this.today.length < 5;i++){
      this.today.push(this.problems.shift())
    }
    localStorage.problems = JSON.stringify(this.problems)
    localStorage.today = JSON.stringify(this.today)
    const date = new Date()
    this.last_update = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString()
    localStorage.last_update = JSON.stringify(this.last_update)
  }
  ionViewWillEnter(){
    if ('plobrems' in localStorage) {
      this.problems = JSON.parse(localStorage.plobrems)
    }
    if ('today' in localStorage) {
      //今の日付と、最終更新日を比較したい
      const date = new Date()
      /*
      this.last_update = "22222222"
      localStorage.last_update = JSON.stringify(this.last_update)
      */
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
    localStorage.today = JSON.stringify(this.today)
  }
  plobremColor(plobrem) {
    if (plobrem.checked) {
      return 'success'
    }else{
      return ''
    }
  }
}
