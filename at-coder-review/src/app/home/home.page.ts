import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { InputPlobremPage } from '../input-plobrem/input-plobrem.page'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  plobrems:{
    name: string,
    url: string,
    memo:string
  }[] = [
    {name: "String Formation",
     url:"https://atcoder.jp/contests/abc158/tasks/abc158_d",
     memo:"結構難しかった"},

     {name: "Dice in Line",
     url:"https://atcoder.jp/contests/abc154/tasks/abc154_d",
     memo:"結構難しかった"},

     {name: "Semi Common Multiple",
     url:"https://atcoder.jp/contests/abc150/tasks/abc150_d",
     memo:"結構難しかった"},

     {name: "Xor Sum 4",
     url:"https://atcoder.jp/contests/abc147/tasks/abc147_d",
     memo:"結構難しかった"}

  ];
  goToNextPage(){
    this.router.navigateByUrl('/input-plobrem');
  }
  constructor(private router:Router,) { }
  ngOnInit() {
  }
}
