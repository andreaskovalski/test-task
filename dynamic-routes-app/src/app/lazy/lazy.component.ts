import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss'
})
export class LazyComponent {

}
