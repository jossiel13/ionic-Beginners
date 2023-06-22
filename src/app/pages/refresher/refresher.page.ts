import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[];

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      //Asignar la cantidad de elementos a Cargar
      this.items=Array[20];
      event.target.complete();//Llamar

    }, 2000);
  }

}
