import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  count : number = 0;

  constructor() {
    console.log("in counstructor");
   }
 

  DellAvailable(){
    console.log('1 entred into dellaviliable method')
    return true;
  }
  HpAvailable(){
    return false;
  }
  promiseVal: any;

  dell = {
    brand: 'Dell',
    harddisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    harddisk: '3 TB',
    color: 'Sliver'
  }

  notAvil = {
    brand: 'Not Aviliable',
    status: 'failed'
  }

  ngOnInit(): void {
    console.log("in ngoninit");
    let buyLaptop = new Promise( (resolved,rejected)=>{
      //reslove('Promise resolved')
     // rejected('Data rejected')
     console.log('0 before entering into if statement')
     if(this.DellAvailable()){
       console.log('2 below if statement condition')
       return setTimeout(()=>{
        //resolved('Dell is Purchased')
        resolved(this.dell)
       },3000)
     }else if(this.HpAvailable()){
        return setTimeout(()=>{
          //resolved('HP is Purchased')
          resolved(this.hp)
        })
     }else{
       return setTimeout(()=>{
         //rejected('No Laptop present')
         rejected(this.notAvil)
       })
     }
    });
    
    buyLaptop.then((res)=>{ 
      console.log('yaa!!!  ',res)  
      this.promiseVal = res; 
    }).catch(res=>{
      console.log('ayoooo!!!   ',res)
      this.promiseVal = res;
    })
  
  }
}
