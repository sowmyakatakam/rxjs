import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-scrrible',
  templateUrl: './scrrible.component.html',
  styleUrls: ['./scrrible.component.css']
})
export class ScrribleComponent implements OnInit {
  @ViewChild('addscr')addscr !: ElementRef

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let count = 1;
    let Total = 0;
    fromEvent(this.addscr.nativeElement, 'click').subscribe(res =>{
      let countVal = 'Amount' + count++;
      Total = Total + count-1;
      let iTotal = Total + '';
      console.log(countVal);
      this._designUtility.scribbleprint(countVal,'scribbleContainer');
      //this._designUtility.scribbleprint(iTotal,'scribbleContainer1');
      this._designUtility.amount(iTotal,'scribbleContainer1');
      
    })
  }

}
