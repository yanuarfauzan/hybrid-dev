import {Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}
  info: any = {};

saveData() {
  console.log(this.info);
}

scorePage() {
  this.route.navigate(['/score']);
}
}
