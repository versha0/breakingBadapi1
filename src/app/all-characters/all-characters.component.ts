import { Component, OnInit } from '@angular/core';
import {TransferDataService} from '../transfer-data.service';
import {AllCharacters} from '../allCharacter';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {
  allcharac: any;

  constructor(private dataTransfer: TransferDataService,
              private router: Router) { }

  ngOnInit() {
  this.dataTransfer.getAllCharacters().subscribe(data => {
      this.allcharac = data;
      console.log(this.allcharac);
    });
  console.log(this.allcharac);


  }

  showSpecificCharac(id: number) {
    this.dataTransfer.storeid(id);
    this.router.navigateByUrl('specificCharacter');
  }


}
