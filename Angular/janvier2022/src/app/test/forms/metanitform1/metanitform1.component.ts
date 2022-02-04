import { Component, OnInit } from '@angular/core';
export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}
@Component({
  selector: 'app-metanitform1',
  templateUrl: './metanitform1.component.html',
  styleUrls: ['./metanitform1.component.css']
})
export class Metanitform1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  phone: Phone = new Phone("", 0, "Huawei");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
   
  addPhone(){
      this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  }
}
