import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommunicationService} from "./core/communication.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-routes-app';
  constructor(private service: CommunicationService) {
  }

  public updateMessage(event: string): void {
    this.service.message$.next(event);
  }
}
