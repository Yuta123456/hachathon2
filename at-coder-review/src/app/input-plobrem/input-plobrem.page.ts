import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page'
@Component({
  selector: 'app-input-plobrem',
  templateUrl: './input-plobrem.page.html',
  styleUrls: ['./input-plobrem.page.scss'],
})
export class InputPlobremPage implements OnInit {
  constructor() { }
  goToBackPage(){
    history.back();
  }
  ngOnInit() {
  }

  plobrems:{
    name: string,
    url: string,
    memo:string
  }[] = [
  ]
  resist:{
    name: string,
    url: string,
    memo:string
  }
  resist_name:string;
  resist_url:string;
  resist_memo:string;
}
