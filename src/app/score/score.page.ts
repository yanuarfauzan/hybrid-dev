import { Component, OnInit } from '@angular/core';
import { uptime } from 'process';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  no : number = 0;
  constructor() { }

  ngOnInit() {
  }
    up(){
      this.no +=1
    }
    down(){
      if(this.no > 0)
        this.no -=1
    }
    
}
