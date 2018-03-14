import { GiphyService } from '../shared/giphy/giphy.service';
import { EventoService } from '../shared/evento/evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})

export class EventoListComponent implements OnInit {
  eventos: Array<any>;
	
  constructor(private eventoService: EventoService, private giphyService: GiphyService) { }

  ngOnInit() {
	  this.eventoService.getAll().subscribe(data => {
      this.eventos = data;
      for (const evento of this.eventos) {
        this.giphyService.get(evento.name).subscribe(url => evento.giphyUrl = url);
      }
    });
  }

}
