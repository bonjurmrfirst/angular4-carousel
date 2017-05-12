export enum AnimationConfig { APPEAR, SLIDE_OVERLAP, SLIDE }

export interface ICarouselConfig {
  verifyBeforeLoad: boolean;
  log: boolean;
  animation: boolean;
  animationType: AnimationConfig;
  autoplay: boolean;
  autoplayDelay: number;
  stopAutoplayMinWidth: number;
}
