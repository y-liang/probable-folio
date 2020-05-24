import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.less']
})
export class ArchitectureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://architecture.yliang.net/';
  }

}
