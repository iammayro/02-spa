import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(texto: string) {
    if (texto !== '') {
      this._router.navigate(['/heroes', texto]);
    } else {
      this._router.navigate(['/heroes']);
    }
  }

}
