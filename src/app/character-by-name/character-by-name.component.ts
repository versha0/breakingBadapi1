import { Component, OnInit } from '@angular/core';
import {TransferDataService} from '../transfer-data.service';

@Component({
  selector: 'app-character-by-name',
  templateUrl: './character-by-name.component.html',
  styleUrls: ['./character-by-name.component.css']
})
export class CharacterByNameComponent implements OnInit {
  character: any;
  name: any;
  constructor(private transferData: TransferDataService) { }

  ngOnInit() {
  this.name = this.transferData.getName();
  console.log(this.name);
  this.transferData.getCharacterByName().subscribe(data=>{
    this.character= data;
    console.log(this.character);
  });
  }

}
