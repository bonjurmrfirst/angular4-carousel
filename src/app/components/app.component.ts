import { Component } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from "../services";

@Component({
  selector: 'app-root',
  templateUrl: 'app.template.html',
  styleUrls: ['assets/app.styles.scss']
})
export class AppComponent {

  // example image sources
  /*public imageSources: string[] = [
    'https://www.w3schools.com/css/trolltunga.jpg',
    'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png',
    'https://cdn.pixabay.com/photo/2016/10/07/13/00/yucca-plant-1721515__340.jpg',
    'https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg',
  ];*/


  public imageSources: string[] = [
    'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'http://i2.cdn.cnn.com/cnnnext/dam/assets/170317115043-1684-stradivari-super-169.jpg',
  ];

  //example config
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE_OVERLAP,
    autoplay: false,
    autoplayDelay: 3000
  };
}
