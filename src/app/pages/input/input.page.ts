import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { componente } from 'src/app/interfaces/componente';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre:string='';

  componentes!: Observable<componente[]>;

usuario={
email:'',
password:''
};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){



  }

}
