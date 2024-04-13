import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText!: string;
  isInitialPage: boolean = false;
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;
  isRegisterPageHotel: boolean = false;
  isRegisterPageReserve: boolean = false;

  constructor(private router: Router, private modalService: NgbModal) {
    this.setButtonText();
  }

  ngOnInit() {
    this.setButtonText();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setButtonText();
        this.updateRouteFlags();
      }
    });
  }

  openLoginOrRegister() {
    if (this.buttonText === 'LOGIN') {
      this.router.navigate(['/login']);
    } else if (this.buttonText === 'REGISTRAR') {
      this.router.navigate(['/signup']);
    }
  }

  setButtonText() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('login')) {
      this.buttonText = 'REGISTRAR';
    } else {
      this.buttonText = 'LOGIN';
    }
  }

  updateRouteFlags() {
    this.isInitialPage = this.router.url.includes('/');
    this.isLoginPage = this.router.url.includes('/login');
    this.isRegisterPage = this.router.url.includes('/signup');
    this.isRegisterPageHotel = this.router.url.includes('/hotel');
    this.isRegisterPageReserve = this.router.url.includes('/reserve');
    this.isRegisterPageReserve = this.router.url.includes('/reserve');
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Saldo aqui';
  }
}
