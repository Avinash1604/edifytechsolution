import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private showContactModalSubject = new BehaviorSubject<boolean>(false);
  public showContactModal$ = this.showContactModalSubject.asObservable();

  openContactModal() {
    this.showContactModalSubject.next(true);
  }

  closeContactModal() {
    this.showContactModalSubject.next(false);
  }
}
