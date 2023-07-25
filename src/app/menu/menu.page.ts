import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private storage: Storage,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  async logout(){
    // await this.storage['set']("isUserLoggedIn", false);
    await this.storage.set("isUserLoggedIn", false);
    this.navCtrl.navigateRoot('/login');
  }

  goIntro(){
    this.navCtrl.navigateRoot('/intro');
  }

  goSetting(){
    this.navCtrl.navigateForward('/menu/settings');
  }

}
