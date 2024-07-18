import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  constructor() {}

  showOverlay = new BehaviorSubject<boolean>(false);

  showOverlay$ = this.showOverlay.asObservable();

  updateShowOverlay(value: boolean) {
    this.showOverlay.next(value);
  }
}
