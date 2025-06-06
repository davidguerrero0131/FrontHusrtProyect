import { Component, inject, OnInit } from '@angular/core';
import { EquiposService } from '../../../../Services/appServices/biomedicaServices/equipos/equipos.service';
import { ResponsableService } from '../../../../Services/appServices/biomedicaServices/responsable/responsable.service';

@Component({
    selector: 'app-equipos-comodatos',
    templateUrl: './equipos-comodatos.component.html',
    styleUrl: './equipos-comodatos.component.css',
    standalone: false
})
export class EquiposComodatosComponent implements OnInit {

  equipos! : any[];
  responsable! :any;
  equiposServices = inject(EquiposService);
  responsableServices = inject(ResponsableService);
  loading: boolean = false;

  async ngOnInit(){
      this.equipos = await this.equiposServices.getAllEquiposComodatos(localStorage.getItem("idResponsable"));
      this.responsable = await this.responsableServices.getResponsableComodatos(localStorage.getItem("idResponsable"));
  }
}
