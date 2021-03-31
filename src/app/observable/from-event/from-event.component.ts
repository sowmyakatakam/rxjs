import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  //@ViewChild('addbtn') addbtn!: ElementRef;
  @ViewChild('addbtn') addbtn !: ElementRef;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    
  }
//fromEvent(targetname--button, eventname--click){}
  ngAfterViewInit(){
    let count = 1;
    
    fromEvent(this.addbtn.nativeElement, 'click').subscribe(res =>{
      let countVal = 'Video '+ count++;
      console.log(countVal)
      this._designUtility.print(countVal,'elContainer');
      this._designUtility.print(countVal,'elContainer2');
 
    })
  }

}
