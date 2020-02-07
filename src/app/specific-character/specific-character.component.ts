import { Component, OnInit } from '@angular/core';
import {TransferDataService} from '../transfer-data.service';

@Component({
  selector: 'app-specific-character',
  templateUrl: './specific-character.component.html',
  styleUrls: ['./specific-character.component.css']
})
export class SpecificCharacterComponent implements OnInit {
  id: number;
  character: any;
  constructor(private transferdata: TransferDataService) { }

  ngOnInit() {
    this.id = this.transferdata.getId();
    console.log(this.id);
    this.transferdata.getCharacterById(this.id).subscribe(data => {
      this.character = data;
      console.log(this.character);
    });
  }

}
