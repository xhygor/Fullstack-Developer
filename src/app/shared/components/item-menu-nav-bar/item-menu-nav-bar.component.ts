import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-menu-nav-bar',
  templateUrl: './item-menu-nav-bar.component.html',
  styleUrls: ['./item-menu-nav-bar.component.scss']
})
export class ItemMenuNavBarComponent implements OnInit {

  @Input() item: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
