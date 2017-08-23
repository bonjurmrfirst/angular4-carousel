import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class WindowWidthService {
  private minWidthBreakpoint: number;

  public onResize(minWidthBreakpoint: number, scrollBar?: boolean): Observable<boolean | {}> {
    this.minWidthBreakpoint = minWidthBreakpoint;

    return Observable.fromEvent(window, 'resize')
      .map(() => this.assertSize(scrollBar))
      .startWith(this.assertSize(scrollBar))
      .distinctUntilChanged();
  };

  private assertSize(scrollBar?: boolean): boolean {
    const area = scrollBar ? window.innerWidth : document.documentElement.clientWidth;

    return this.minWidthBreakpoint <= area;
  }
}
