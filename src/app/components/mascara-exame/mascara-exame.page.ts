import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ExamesService } from 'src/app/services/exames.service';
import { MascarasService } from 'src/app/services/mascaras.service';
import {
  posicaoExameModel,
  ExamesNormais,
  LaudosMin,
  laudoAlteradoModel,
} from 'src/app/model/mascarasExames';
import { switchMap } from 'rxjs';

interface posicaoExame {
  id: string;
}

interface laudoAlterado {
  laudos: string;
  descricao: string;
}

@Component({
  selector: 'app-mascara-exame',
  templateUrl: './mascara-exame.page.html',
  styleUrls: ['./mascara-exame.page.scss'],
})
export class MascaraExamePage implements OnInit {
  public exames!: any;
  tipoExames!: posicaoExame[];
  exameSel: string = '';
  exameNome: any;

  public laudosAlterados: laudoAlteradoModel[] = [];
  public analisemins: LaudosMin[] = [];
  public analisesnorm: ExamesNormais[] = [];
  public posicaoExame: posicaoExameModel[] = [];
  public locais: any;
  public local: any;
  public tipo: string = '';
  public btnColor: string = '';
  public btnNormal: boolean = false;
  public btnCadastra: boolean = false;
  public laudosObs: string = '';

  public arrLocal = [];
  public arrPosicaoExame: posicaoExame[] = [];
  public arrLaudosAlterados: laudoAlterado[] = [];
  public arrAnalisemin: LaudosMin[] = [];
  public arrAnaliseNorm: ExamesNormais[] = [];
  public arrDados = [];
  public arrNormal = [];
  public id: string = '';

  constructor(
    private exameService: ExamesService,
    private mascaraService: MascarasService,
    private router: Router,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.exames = this.exameService.getData();
    this.tipoExames = this.exames.tipoexame;
  }

  public buscaMascara(): void {
    this.mascaraService.getMascara(this.exameSel).subscribe((res) => {
      if (res) {
        this.setMascara(res);
      } else {
        alert('Mascara não encontrada');
      }
    });
  }

  public setMascara(dados: any) {
    this.laudosAlterados = dados.laudos;
    this.analisemins = dados.laudosmin;
    this.analisesnorm = dados.examesnormais;
    this.posicaoExame = dados.exames;
    this.locais = dados.locais;
    this.btnColor = 'primary';
    this.btnNormal = false;
    this.tipo = dados.mascara;
  }

  public choosePosicaoExame(posicaoExame: posicaoExameModel, i: number) {
    if (posicaoExame.btncolor === 'primary') {
      const marcado = { btncolor: 'success', exames: posicaoExame.exames };
      this.posicaoExame[i] = marcado;
      const dadosPosicaoExame = { id: posicaoExame.exames };
      this.arrPosicaoExame.push(dadosPosicaoExame);
    } else {
      const desmarcado = { btncolor: 'primary', exames: posicaoExame.exames };
      this.posicaoExame[i] = desmarcado;
      const dadosPosicaoExame = { id: posicaoExame.exames };

      for (let i = 0; i < this.arrPosicaoExame.length; i++) {
        if (this.arrPosicaoExame[i].id === dadosPosicaoExame.id) {
          this.arrPosicaoExame.splice(i, 1);
        }
      }
    }

    if (
      (this.arrPosicaoExame.length > 0 && this.arrAnaliseNorm.length > 0) ||
      this.arrLaudosAlterados.length > 0
    ) {
      this.btnCadastra = true;
    }
  }

  public chooseAnalisenorm() {
    if (this.btnColor === 'primary') {
      this.btnNormal = true;
      this.btnColor = 'success';
      let tempAnalise = [];
      tempAnalise = this.analisesnorm;

      tempAnalise.forEach((normal) => {
        this.arrAnaliseNorm.push(normal);
      });
    } else {
      this.btnNormal = false;
      this.btnColor = 'primary';
      this.arrAnaliseNorm = [];
    }

    if (
      (this.arrPosicaoExame.length > 0 && this.arrAnaliseNorm.length > 0) ||
      this.arrLaudosAlterados.length > 0
    ) {
      this.btnCadastra = true;
    }
  }

  public chooseLaudoAlterado(laudoAlterado: laudoAlteradoModel, i: any) {
    if (laudoAlterado.btncolor === 'primary') {
      const secondary = {
        btncolor: 'success',
        laudos: laudoAlterado.laudos,
        descricao: laudoAlterado.descricao,
      };
      this.laudosAlterados[i] = secondary;
      const dadosLaudoAlterados = {
        laudos: laudoAlterado.laudos,
        descricao: laudoAlterado.descricao,
      };
      this.arrLaudosAlterados.push(dadosLaudoAlterados);
    } else {
      const primary = {
        btncolor: 'primary',
        laudos: laudoAlterado.laudos,
        descricao: laudoAlterado.descricao,
      };
      this.laudosAlterados[i] = primary;
      const dadosAlterados = {
        laudos: laudoAlterado.laudos,
        descricao: laudoAlterado.descricao,
      };

      for (let i = 0; i < this.arrLaudosAlterados.length; i++) {
        if (this.laudosAlterados[i].laudos === dadosAlterados.laudos) {
          this.arrLaudosAlterados.splice(i, 1);
        }
      }
    }

    if (
      (this.arrPosicaoExame.length > 0 && this.arrAnaliseNorm.length > 0) ||
      this.arrLaudosAlterados.length > 0
    ) {
      this.btnCadastra = true;
    }
  }

  public chooseAnalisemin(analisemin: any, i: any) {
    if (analisemin.btncolor === 'primary') {
      const secondary = {
        btncolor: 'success',
        laudosmin: analisemin.laudosmin,
      };
      this.analisemins[i] = secondary;
      const dadosAnalisemin = {
        btncolor: 'secondary',
        laudosmin: analisemin.laudosmin,
      };
      this.arrAnalisemin.push(dadosAnalisemin);
    } else {
      const primary = { btncolor: 'primary', laudosmin: analisemin.laudosmin };
      this.analisemins[i] = primary;
      const dadosAnalisemin = { laudosmin: analisemin.laudosmin };

      for (let i = 0; i < this.arrAnalisemin.length; i++) {
        if (this.arrAnalisemin[i].laudosmin === dadosAnalisemin.laudosmin) {
          this.arrAnalisemin.splice(i, 1);
        }
      }
    }
  }

  public createLaudo() {
    const arrayDados = {
      nome: this.exames.firstName,
      idade:
        this.exames.idade.anos +
        'A' +
        ' ' +
        this.exames.idade.meses +
        'M' +
        ' ' +
        this.exames.idade.dias +
        'D',
      tipoExame: this.tipo,
      local: this.arrLocal,
      exames: this.arrPosicaoExame,
      laudos: this.arrLaudosAlterados,
      laudosnorm: this.arrAnaliseNorm,
      laudosmin: this.arrAnalisemin,
      laudoObs: this.laudosObs,
    };

    for (let i = 0; i < this.tipoExames.length; i++) {
      if (this.tipoExames[i].id === this.tipo) {
        this.tipoExames.splice(i, 1);
        this.exames.tipoexame = this.tipoExames;
      }
    }

    this.id = this.exames.id;

   this.exameService.createLaudoExames(arrayDados).subscribe((res) => {
      if (res.message === `Cadastro efetuado com sucesso`) {
        this.exameService.updateExamesMarcados(this.id, this.exames).subscribe((ret) =>{
          console.log(ret)
        });
      }
    });

    if (this.tipoExames.length === 0) {
      this.exameService.deleteExamesMarcados(this.id).subscribe((dele) => {
        if (dele.status == 200){
          this.menuController.enable(true);
          this.router.navigate([`exames/exameslist`]);

        }
      })
    }
  }
}
