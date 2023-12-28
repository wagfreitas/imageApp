import { Component, OnInit } from '@angular/core';
import { ExamesService } from './../../services/exames.service';
import { LoadingController } from '@ionic/angular';
import { examesLaudos } from '../../model/cadExames';

@Component({
  selector: 'app-exam-laudos',
  templateUrl: './exam-laudos.page.html',
  styleUrls: ['./exam-laudos.page.scss'],
})
export class ExamLaudosPage implements OnInit {
  exames: examesLaudos[] = []
  constructor(
    private examesService: ExamesService,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.carregaDados();
  }

  async exibirLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando exames...',
    });
    await loading.present();
  }

  async carregaDados() {
    await this.exibirLoading();
    this.examesService.getAllLaudos().subscribe((res) => {
      this.exames = res;
    });

    await this.loadingController.dismiss();
  }

}
