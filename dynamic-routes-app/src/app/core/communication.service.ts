import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public readonly message$: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
