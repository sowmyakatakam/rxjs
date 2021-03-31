import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg!: { a: string; b: string; c: string; };
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //OF

    const Obs1 = of('Anup', 'Shaker', 'Sharma');

    Obs1.subscribe(res =>{
      console.log(res)
      this._designUtility.print(res, 'elContainer');
    })

    const Obs2 = of({a: 'Anup', b: 'Shaker', c: 'Sharma'});

    Obs2.subscribe(res =>{
      //console.log(res)
      //this._designUtility.print(res, 'elContainer');
      this.obsMsg = res;
      console.log('obsMsg => ',res);
    })


    //FROM - Array
    let Arr = ['sowmya','sudha','somu'];
    const Obs3 = from(Arr);

    Obs3.subscribe(res => {
      console.log('hello' + res);
      this._designUtility.print(res,'elContainer3');
    })

    //FROM - Promise
    const promise = new Promise(resolve =>{
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    })
    const Obs4 = from(promise);

    Obs4.subscribe(res => {
      console.log('from Promise =>', res);
      //this._designUtility.print(res,'elContainer4');
    })
  }

}
