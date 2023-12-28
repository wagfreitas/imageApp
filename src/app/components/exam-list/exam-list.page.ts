import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { LoadingController, MenuController } from '@ionic/angular';
import { ExamesService } from 'src/app/services/exames.service';
import { cadExames } from './../../model/cadExames';


@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.page.html',
  styleUrls: ['./exam-list.page.scss'],
})
export class ExamListPage implements OnInit {
  exames: cadExames[] = [];
  constructor(
    private examService: ExamesService,
    private router: Router,
    private loadingController: LoadingController,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.menuController.enable(true)
    this.getObject();


  }

  async getObject() {
    this.carregaDados()
    const ret = await Preferences.get({ key: 'isLoggedIn' });
    const value = ret.value

    if (value === null ) {
      this.router.navigate(['exames/login']);
    }

  }

  async carregaDados() {
    await this.exibirLoading();
    this.examService.getAllExames().subscribe((res) => {
      this.exames = res;
    });

    await this.loadingController.dismiss();
  }

  async exibirLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando exames...',
    });
    await loading.present();
  }

  public open(itemSlide: cadExames) {
    // atribui os dados do exame selecionado para uma variavel data que será retornada pelo Resolver
    this.examService.setData(itemSlide);
    this.menuController.enable(false)
    this.router.navigate(['exames/mascaraexames']);
  }
}
