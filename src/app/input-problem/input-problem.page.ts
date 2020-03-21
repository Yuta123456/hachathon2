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
    last_AC:number,
    checked:boolean,
    message:string
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
  resist_last_AC:number;
  resist_checked:boolean;
  resister_Problem() {
    var resist = {
      name: this.resist_name,
      url: this.resist_url,
      memo: this.resist_memo,
      last_AC:this.resist_last_AC,
      checked:false,
      message:'solve'
    }
    this.Problems.push(resist);
    this.Problems.sort((a,b) => a.last_AC - b.last_AC)
    localStorage.Problems = JSON.stringify(this.Problems)
    resist = {name:'',url:'',memo:'',last_AC:null,checked:false,message:''};
    this.goToBackPage();
  }
}
export class MyComponent {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

}