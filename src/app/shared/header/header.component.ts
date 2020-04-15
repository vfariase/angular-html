import { Router } from '@angular/router';
import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _info:InfoPaginaService, private route:Router) { }

  ngOnInit(): void {
  }
  

  buscarProducto(termino: string){
    if(termino.length<1){
      return;
    }
    this.route.navigate(['/search',termino]);
  }
}
