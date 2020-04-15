import { InfoPaginaService } from './../../services/info-pagina.service';
import { InfoPagina } from './../../interfaces/info-pagina.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _info:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
