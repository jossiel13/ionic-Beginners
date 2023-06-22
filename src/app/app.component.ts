import { Component } from '@angular/core';
import { componente } from './interfaces/componente';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<componente[]>;

  constructor(private dataService:DataService) {}

  ngOnInit(){

    this.componentes=this.dataService.getUsuarios();
  }
}
