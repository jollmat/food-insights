import { HostListener, Injectable, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, debounceTime, fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

export type DeviceCheckType = 'breakpoint' | 'dimensions';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

@Injectable({
  providedIn: 'root'
})
export class DeviceService implements OnDestroy {

  deviceCheckType: DeviceCheckType = 'dimensions';
  deviceType$ = new BehaviorSubject<DeviceType>('desktop');

  pageResizeSubscription?: Subscription;
  checkByBreakpointSubscription?: Subscription;
  
  private destroy$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.checkDeviceType();

    this.pageResizeSubscription = fromEvent(window, 'resize')
      .pipe(
        debounceTime(300),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.checkDeviceType();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkDeviceType() {
    console.log('checkDeviceType()');
    switch(this.deviceCheckType) {
      case 'breakpoint':
        this.checkDeviceByBreakpoint();
        break;
      case 'dimensions':
        this.checkDeviceByDimensions();
        break;
    }
  }
  
  private checkDeviceByBreakpoint() {
    this.checkByBreakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Handset]) {
        this.deviceType$.next('mobile');
      } else if (result.breakpoints[Breakpoints.Tablet]) {
        this.deviceType$.next('tablet');
      } else if (result.breakpoints[Breakpoints.Web]) {
        this.deviceType$.next('desktop');
      }
    });
  }

  private checkDeviceByDimensions() {
    const width = window.innerWidth;
    if (width < 768) {
      this.deviceType$.next('mobile');
    } else if (width < 1024) {
      this.deviceType$.next('tablet');
    } else {
      this.deviceType$.next('desktop');
    }
  }

}
