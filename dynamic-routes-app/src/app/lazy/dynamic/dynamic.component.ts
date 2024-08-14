import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CommunicationService} from "../../core/communication.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {
  public message$!: Observable<string>;

  constructor(private service: CommunicationService) {
    this.message$ = this.service.message$;
  }
}
