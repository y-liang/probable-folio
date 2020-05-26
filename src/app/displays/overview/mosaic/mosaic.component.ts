import { Component, OnInit } from '@angular/core';
import { Project, PROJECTS } from 'src/app/supplies/projects/projects';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.less']
})
export class MosaicComponent implements OnInit {
  projects: Project[] = PROJECTS;

  modes: string[] = ['dark', 'light'];
  mode: string;

  currentMode;

  constructor() { }

  ngOnInit() {


    // console.log('this.currentMode');
    // console.log(this.currentMode);

    this.currentMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;
    this.mode = this.currentMode ? this.currentMode : this.modes[1];
  }

  toggleMode() {
    if (this.mode == this.modes[0]) {
      this.mode = this.modes[1];
      localStorage.setItem('mode', 'light');
    } else {
      this.mode = this.modes[0];
      localStorage.setItem('mode', 'dark');
    }


    // console.log(this.mode);
    // console.log('this.currentMode');
    // console.log(this.currentMode);
  }
}
