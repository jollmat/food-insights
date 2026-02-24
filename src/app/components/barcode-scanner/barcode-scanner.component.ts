import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [CommonModule], // ✅ fixes NG8103
  template: `
    <div class="scanner-container">
      <video #preview autoplay muted playsinline></video>

      <div class="scan-frame"></div>

      <p *ngIf="scannedValue">Scanned: {{ scannedValue }}</p>
    </div>
  `,
  styles: [`
    .scanner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
    }

    video {
      width: 320px;
      height: 210px;
      border-radius: 8px;
      background: black;
    }

    .scan-frame {
          position: absolute;
          top: 77px;
          left: 103px;
          width: 290px;
          height: 150px;
          border: 3px solid #00ff6a;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 106, 0.5019607843);
          pointer-events: none;
    }
  `]
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {

  @Output()
  onCodeChange = new EventEmitter<string>();

  @ViewChild('preview', { static: true }) previewElem!: ElementRef<HTMLVideoElement>;
  codeReader = new BrowserMultiFormatReader();
  scannedValue: string | null = null;
  scanning = false;
  controls: any;

  async ngOnInit() {
    await this.startScanner();
  }

  async startScanner() {
    if (this.scanning) return;
    this.scanning = true;

    try {
      // ✅ now static
      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      const device = devices.find((d: MediaDeviceInfo) =>
        d.label.toLowerCase().includes('back')
      ) || devices[0];

      // ✅ modern decode API
      this.controls = await this.codeReader.decodeFromVideoDevice(
        device.deviceId,
        this.previewElem.nativeElement,
        (result: Result | undefined, error: any) => {
          if (result) {
            if (this.scannedValue!==result.getText()) {
              this.onCodeChange.emit(result.getText());
            }
            this.scannedValue = result.getText();
            // Optional: stop scanning once found
            // this.stopScanner();
          } else if (error && error.name !== 'NotFoundException' && error.name !== 'NotFoundException2') {
            console.error('❌ Real error:', error);
          }
        }
      );

    } catch (err) {
      console.error('Camera init failed:', err);
    }
  }

  stopScanner() {
    if (this.controls) {
      this.controls.stop(); // ✅ correct way to stop scanning
      this.controls = null;
    }
    this.scanning = false;
    console.log('⏹️ Scanner stopped');
  }


  ngOnDestroy() {
    this.stopScanner();
  }
}
