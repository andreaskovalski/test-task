import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss'
})
export class LazyComponent {

}
