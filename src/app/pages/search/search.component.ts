import { ProductosService } from './../../services/productos.service';
import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  producto:Producto;
  constructor(private route:ActivatedRoute,public productosService:ProductosService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params =>{
      this.productosService.searchProducto(params['termino']);

    })

  }

}
