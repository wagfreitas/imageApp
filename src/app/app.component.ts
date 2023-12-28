import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ './side-menu/styles/side-menu.scss',
  './side-menu/styles/side-menu.shell.scss',
  './side-menu/styles/side-menu.responsive.scss',
'app.component.scss'],
})
export class AppComponent implements OnInit {



  exameLaudados: number = 0;
  examesLaudar: number = 0 ;

  sLaudo = [];
  cLaudo = [];
  items: any[] = [];

  email: string ='';
  photo: string = '';
  public selectedIndex = 0;
  public appPages = [

    {
      title: 'Exames Marcados',
      url: '/exames/exameslist',
      icon: 'analytics'
    },
    {
      title: 'Exames Laudados',
      url: '/exames/exameslaudados',
      icon: 'archive'
    },

  ];


 constructor(
    private platform: Platform,
  ) {


  }


  ngOnInit(): void {

  }

}
