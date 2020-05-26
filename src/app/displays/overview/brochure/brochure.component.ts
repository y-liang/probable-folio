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

  currentRoute: string;
  currentIndex: number;

  offRoutes: string[] = ['cipher', 'match', 'preference', 'readability', 'signature', 'cover'];
  icons: string[] = ['gradient', 'widgets', 'assessment', 'menu_book', 'gesture', 'extension'];
  icon;



  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url.substring(18);
    this.currentIndex = this.offRoutes.findIndex(element => element == this.currentRoute);

    this.icon = this.icons[this.currentIndex];
  }



  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toPrev() {
    let prevIndex;
    if (this.currentIndex == 0) {
      prevIndex = 5;
    } else {
      prevIndex = this.currentIndex - 1;
    }

    this.currentIndex = prevIndex;
    // console.log(prevIndex);
    this.icon = this.icons[this.currentIndex];

    this.router.navigateByUrl(`/overview/sandbox/${this.offRoutes[prevIndex]}`);
  }

  toNext() {
    let nextIndex;
    if (this.currentIndex == 5) {
      nextIndex = 0;
    } else {
      nextIndex = this.currentIndex + 1;
    }

    this.currentIndex = nextIndex;
    this.icon = this.icons[this.currentIndex];
    // console.log(nextIndex);

    this.router.navigateByUrl(`/overview/sandbox/${this.offRoutes[nextIndex]}`);
  }
}
