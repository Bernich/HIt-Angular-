import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'jhi-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrls: ['./coming-soon-page.component.css']
})
export class ComingSoonPageComponent implements OnInit {


  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
  ) { }

  scriptsEmbed = [
    "/assets/static/js/simplyCountdown.js",
    "/assets/static/js/modernizr-2.6.2.min.js",
    "/assets/static/js/jquery.easing.1.3.js",
    "/assets/static/js/bootstrap.min.js",
    "/assets/static/js/jquery.waypoints.min.js",
    "/assets/static/js/jquery.min.js",
    "/assets/static/js/main.js"
  ];

  stylesEmbed = [
    "https://fonts.googleapis.com/css?family=Space+Mono",
    "/assets/static/css/animate.css",
    "/assets/static/css/icomoon.css",
    "/assets/static/css/bootstrap.css",
    "/assets/static/css/style.css",
    "/style.css"
  ];

  ngOnInit() {
    for (const item of this.stylesEmbed) {
      const s = this.renderer2.createElement('link');
      // s.onload = this.loadNextScript.bind(this);
      s.rel = 'stylesheet';
      s.href = "" + item; // Defines someGlobalObject

      this.renderer2.appendChild(this._document.body, s);
    }

    for (const item of this.scriptsEmbed) {

      const s = this.renderer2.createElement('script');
      // s.onload = this.loadNextScript.bind(this);
      s.type = 'text/javascript';
      s.src = "" + item; // Defines someGlobalObject

      this.renderer2.appendChild(this._document.body, s);
    }
  }

  ngAfterViewInit() {

    const jquery = this.renderer2.createElement('script');
    jquery.type = 'text/javascript';
    jquery.src = "/assets/static/js/simplyCountdown.js"; // Defines someGlobalObject
    jquery.onload = this.loadNextScript.bind(this);

    this.renderer2.appendChild(this._document.body, jquery);


  }



  loadNextScript() {
    const s = this.renderer2.createElement('script');
    // s.onload = this.loadNextScript.bind(this);
    s.type = 'text/javascript';
    s.src =
      `
    var d = new Date(new Date().getTime() + (24 * 7) * 60 * 60 * 1000);

    simplyCountdown('.simply-countdown-one', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
    });

    $('#simply-countdown-losange').simplyCountdown({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      enableUtc: false,
    });
    `; // Defines someGlobalObject

    this.renderer2.appendChild(this._document.body, s);
  }

}
