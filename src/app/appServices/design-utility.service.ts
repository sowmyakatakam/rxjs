import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  
  constructor() { }
  
  print(val: string, containerId: string){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }

  scribbleprint(expval: string, containerId: string){
    let el = document.createElement('li');
    el.innerText = expval;
    document.getElementById(containerId)?.appendChild(el);  
  }
  amount(totalval: string, containerId: string){
    let k = document.createElement('h2');
    k.innerText = totalval;
    document.getElementById(containerId)?.appendChild(k);  
  }
}