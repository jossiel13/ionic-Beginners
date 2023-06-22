import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {


    //Es necesario este => await para generar el retorno
    const popover = await this.popoverCtrl.create({

      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss:false

    });

    return await popover.present();
    const {data}= await popover.onWillDismiss();//Extraer datos desde la "raiz"

  }



}

