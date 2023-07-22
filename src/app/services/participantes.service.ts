import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participantes } from '../models/participantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  private participantesUrl = 'assets/participantes.json'; // Ruta del archivo JSON con los participantes.


  constructor(private http: HttpClient) { }

  
  obtenerParticipantes(): Observable<Participantes[]> {
    return this.http.get<Participantes[]>(this.participantesUrl);
  }
}
