import { Component } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from "../services";

@Component({
  selector: 'app-root',
  templateUrl: 'app.template.html',
  styleUrls: ['assets/app.styles.scss']
})
export class AppComponent {

  // example image sources
  public imageSources: string[] = [
    'https://www.w3schools.com/css/trolltunga.jpg',
    'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png',
    'https://cdn.pixabay.com/photo/2016/10/07/13/00/yucca-plant-1721515__340.jpg',
    'https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg',
  ];

  //example config
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE_OVERLAP,
    autoplay: true,
    autoplayDelay: 3000
  };
}
