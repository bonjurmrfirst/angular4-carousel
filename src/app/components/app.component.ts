import { Component } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.template.html',
  styleUrls: ['assets/app.styles.scss']
})
export class AppComponent {
  public imageSources: string[] = [
    'http://www.violinshoptampa.com/assets/images/Panorama2a.jpg',
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
  ];

  // example config
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
}
