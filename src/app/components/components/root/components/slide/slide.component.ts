import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-slide',
  templateUrl: './slide.template.html',
  styleUrls: ['./assets/slide.styles.scss']
})
export class SlideComponent implements OnInit{
  @Input() public src: string;
  @Input() public slideNo: number;
  @Input() public isHidden: boolean;

  constructor() {}

  ngOnInit() {

  }
}
