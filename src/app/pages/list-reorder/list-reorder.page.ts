import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ["1", "2", "3", "4", "5", "6",]
// declarar propiedad booleana
reorderDisable:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(even: any) {


    const   itemMover=this.personajes.splice(even.detail.from,1)[0];

    this.personajes.splice(even.detail.to,0,itemMover);

    even.detail.complete();

  }

}
