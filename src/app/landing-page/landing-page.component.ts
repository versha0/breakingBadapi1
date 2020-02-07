import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TransferDataService} from "../transfer-data.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
   name = '';
  constructor(public router: Router, private transSer: TransferDataService) { }

  ngOnInit() {
  }

  goToAllCast() {
    this.router.navigateByUrl('/allCharacters');
  }

  showNameCharacter() {
    console.log(this.name);
    this.transSer.storeName(this.name);
    this.router.navigateByUrl('characterByName');
  }
}
