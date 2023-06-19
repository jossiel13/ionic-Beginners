import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Obtener Usuarios
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user: any) {
    this.ionList.closeSlidingItems();
  }
  share(user: any) {
    this.ionList.closeSlidingItems();
  }
  delete(user: any) {
    this.ionList.closeSlidingItems();
  }
}
