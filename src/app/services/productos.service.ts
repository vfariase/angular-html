import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;

  productos: Producto[]=[];
  productosFiltrado: Producto[]=[];


  constructor(private http:HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-html-379f5.firebaseio.com/productos_idx.json')
    .subscribe((response:Producto []) =>{

      this.productos=response;
      this.cargando=false;
      resolve();
            
    });
    });

    
  }


  

  getProducto(id:string){

    return this.http.get(`https://angular-html-379f5.firebaseio.com/productos/${id}.json`);

  }

  searchProducto(termino:string){

     if(this.productosFiltrado.length == 0){
       this.cargarProductos().then(()=>{
         // ejecutar después de tener los productos
         // aplicar filtro
         this.filtrarProductos(termino);

       });
     }else{
       this.filtrarProductos(termino);
     }
  }

  filtrarProductos(termino:string){
    
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
     if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
       this.productosFiltrado.push(prod);
     }
    });
  }
  
 

}
