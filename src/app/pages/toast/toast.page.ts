import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController: ToastController) { }

  // ngOnInit() {
  // }

  // async presentToast(position: 'top' | 'middle' | 'bottom') {
  //   const toast = await this.toastController.create({
  //     message: 'Hello World!',
  //     duration: 1500,
  //     position: position,
  //   });

  //   await toast.present();

  // }

  ngOnInit() {
  }

  //   handlerMessage = '';
  //   roleMessage = ''; //Variables

  //   async presentToast() {
  //     const toast = await this.toastController.create({
  //       message: 'Hello World!',
  //       duration: 3000,
  //       buttons: [
  //         {
  //           text: 'More Info',
  //           role: 'info',
  //           handler: () => {
  //             this.handlerMessage = 'More Info clicked';
  //           },
  //         },
  //         {
  //           text: 'Dismiss',
  //           role: 'cancel',
  //           handler: () => {
  //             this.handlerMessage = 'Dismiss clicked';
  //           },
  //         },
  //       ],
  //     });

  //     await toast.present();

  //     const { role } = await toast.onDidDismiss();
  //     this.roleMessage = `Dismissed with role: ${role}`;
  //   }
  // }

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);

    await toast.present();
  }

  async presentBaselineToast() {
    await this.presentToast({
      duration: 3000,
      message: 'This is a toast with a long message and a button that appears on the same line.',
      buttons: [{ text: 'Action With Long Text' }],
    });
  }

  async presentStackedToast() {
    await this.presentToast({
      duration: 3000,
      message: 'This is a toast with a long message and a button that appears on the next line.',
      buttons: [{ text: 'Action With Long Text' }],
      layout: 'stacked',
    });
  }
}
