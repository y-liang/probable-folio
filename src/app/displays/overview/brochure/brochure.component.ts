import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from 'src/app/supplies/animations/router-animations';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.less'],
  animations: [slideInAnimation]
})
export class BrochureComponent implements OnInit {

  offRoutes: string[] = ['cipher', 'match', 'preference', 'readability', 'signature'];

  currentRoute: string;
  currentIndex: number;


  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url.substring(18);
    this.currentIndex = this.offRoutes.findIndex(element => element == this.currentRoute);
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toPrev() {
    let prevIndex;
    if (this.currentIndex == 0) {
      prevIndex = 4;
    } else {
      prevIndex = this.currentIndex - 1;
    }

    this.currentIndex = prevIndex;
    // console.log(prevIndex);

    this.router.navigateByUrl(`/overview/sandbox/${this.offRoutes[prevIndex]}`);
  }

  toNext() {
    let nextIndex;
    if (this.currentIndex == 4) {
      nextIndex = 0;
    } else {
      nextIndex = this.currentIndex + 1;
    }

    this.currentIndex = nextIndex;

    // console.log(nextIndex);

    this.router.navigateByUrl(`/overview/sandbox/${this.offRoutes[nextIndex]}`);
  }
}
