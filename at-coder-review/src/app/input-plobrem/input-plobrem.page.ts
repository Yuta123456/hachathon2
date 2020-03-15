import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-plobrem',
  templateUrl: './input-plobrem.page.html',
  styleUrls: ['./input-plobrem.page.scss'],
})
export class InputPlobremPage implements OnInit {
  plobrems:{
    name: string,
    url: string,
    memo:string
  }[] = []
  constructor() { }
  goToBackPage(){
    history.back();
  }
  ngOnInit() {
  }
  ionViewWillEnter(){
    if ('plobrems' in localStorage) {
      this.plobrems = JSON.parse(localStorage.plobrems)
    } 
  }
  resist_name:string;
  resist_url:string;
  resist_memo:string;
  resister_plobrem() {
    var resist = {
      name: this.resist_name,
      url: this.resist_url,
      memo: this.resist_memo
    }
    this.plobrems.push(resist);
    localStorage.plobrems = JSON.stringify(this.plobrems)
    resist = {name:'',url:'',memo:''};
    //なぜか戻らない。
    this.goToBackPage();
  }
}
