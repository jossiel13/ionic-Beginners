import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetctrl:ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet(){

  const actionSheet = await this.actionSheetctrl.create({
        header: 'Options',
        backdropDismiss:false,
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            cssClass:'rojo',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ],
      });

    await actionSheet.present();
    
    }
}
