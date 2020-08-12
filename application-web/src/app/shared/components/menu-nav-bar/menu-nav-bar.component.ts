import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.scss']
})
export class MenuNavBarComponent implements OnInit {

  @Input() title: string;
  @Input() itens: [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
