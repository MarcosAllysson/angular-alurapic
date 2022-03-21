import { Directive, ElementRef, OnInit } from '@angular/core';

import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private _elementRef: ElementRef<any>,
    private _platformDetector: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this._platformDetector.isPlatformBrowser && this._elementRef.nativeElement.click();
  }

}
