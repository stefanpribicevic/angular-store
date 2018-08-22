import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.userLoginStatusChangedEmitter.subscribe(() => {
      this.username = localStorage.getItem('username');
    });
  }

}
