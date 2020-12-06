import { Component, OnInit , ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { CommonService } from './../common.service';
@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.css']
})

export class BarCodeComponent implements OnInit {
  resultstring = '';
  hasDevices = false;
  hasPermission: boolean;
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: MediaDeviceInfo;
  @ViewChild('scanner') scanner: ZXingScannerComponent;

constructor(private Common: CommonService) {
this.Common.getDetails().subscribe(data => {
  console.log('()()()' + data);
}, (error) => {
     console.log(error);
});
   }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
    });
    this.scanner.camerasNotFound.subscribe(() => {
      this.hasDevices = false;
    });
    // this.scanner.scanComplete.subscribe((result: Result) => {
    //   this.qrResult = result;
    //   this.hasPermission = false;
    // });
    this.scanner.permissionResponse.subscribe((perm: boolean) => {
      this.hasPermission = perm;
    });
  }

  handleQrCodeResult(resultstring) {
    resultstring = resultstring;
    alert(resultstring);
  }

  // clearResult(): void {
  //   this.qrResultString = null;
  // }

  // onCodeResult(resultString: string) {
  //   this.qrResultString = resultString;
  // }

}
