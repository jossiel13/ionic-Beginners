import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-seacher',
  templateUrl: './seacher.page.html',
  styleUrls: ['./seacher.page.scss'],
})
export class SeacherPage implements OnInit {

albume: any[]=[];
textoBusqueda:string='';

  constructor(private dataService:DataService,
                ) { }

  ngOnInit() {

    this.dataService.getAlbums().subscribe(albumes=>

      this.albume=albumes

      );

  }

  onSearchChange(even){

    this.textoBusqueda=even.detail.value;

  }

}
