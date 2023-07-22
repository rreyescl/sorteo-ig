import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Participantes } from 'src/app/models/participantes';
import { ParticipantesService } from 'src/app/services/participantes.service';

import { MatTableDataSource, MatTableDataSourcePaginator, MatTableModule } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css'],
})
export class SorteoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  participantes: MatTableDataSource<Participantes> | undefined;
  participantesAlAgua : Participantes[] = [];
  ganador: Participantes | null = null;
  alAgua: Participantes | null = null;
  public secciones: Array<string> = [
    'Inicio',
    'Participantes',
    'AL AGUA',
    'SORTEO'
  ];
  displayedColumns: string[] = ['id', 'cuentaComentario', 'cuentaEtiquetada'];
  displayedColumnsAlAgua: string[] = ['id', 'cuentaComentario', 'cuentaEtiquetada'];

  constructor(
    private participantesService: ParticipantesService,
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Obtener la lista de participantes al cargar la página.
    this.obtenerParticipantes();
  }
  realizarSorteo() {
    if (this.participantes) {
      const totalParticipantes = this.participantes.data.length;
      if (totalParticipantes > 0) {
        // Obtener un índice aleatorio para seleccionar al ganador.

        const indiceGanador = Math.floor(Math.random() * totalParticipantes);
        this.ganador = this.participantes.data[indiceGanador];

        Swal.fire({
          icon: 'success',
          title: 'FELICIDADES',
          html:
            'ID: ' +
            this.ganador.id +
            '<br>CUENTA: ' +
            this.ganador.cuentaComentario +
            '<br> ETIQUETÓ A: ' +
            this.ganador.cuentaEtiquetada,
        });
      }
    }
  }
  obtenerAlAgua() {
    if (this.participantes) {
      const totalParticipantes = this.participantes.data.length;
      if (totalParticipantes > 0) {
        // Obtener un índice aleatorio para seleccionar al ganador.
        const indiceAlAgua = Math.floor(Math.random() * totalParticipantes);
        this.alAgua = this.participantes.data[indiceAlAgua];
        this.participantesAlAgua.push(this.alAgua);
        console.log(this.participantesAlAgua);
        Swal.fire({
          icon: 'error',
          title: 'AL AGUA &#128546',
          html:
            'ID: ' +
            this.alAgua.id +
            '<br>CUENTA: ' +
            this.alAgua.cuentaComentario +
            '<br>ETIQUETÓ A: ' +
            this.alAgua.cuentaEtiquetada,
        });
        //const indiceAlAguaEliminar = this.participantes.findIndex(participante => participante === this.alAgua);
        this.participantes.data.splice(indiceAlAgua, 1);
        //console.log(this.participantes.data);
        //this.changeDetectorRef.detectChanges();
        this.participantes.connect();
      }
    }
  }
  obtenerParticipantes() {
    this.participantesService.obtenerParticipantes().subscribe(
      (data) => {
        this.participantes = new MatTableDataSource(data);
      },
      (error) => {
        console.error('Error al obtener la lista de participantes', error);
      }
    );
  }

  scrollToSection(section: string) {
    const element = this.elementRef.nativeElement.querySelector('#' + section);
    if (element) {
      // Obtener la altura del navbar fijado en la parte superior
      //const navbarHeight = this.elementRef.nativeElement.querySelector('.navbar').offsetHeight;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      //window.scrollBy(0, -navbarHeight);
    }
  }
}
