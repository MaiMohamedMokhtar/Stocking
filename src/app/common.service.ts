import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
   }

   getDetails() {
    // tslint:disable-next-line: new-parens
    const headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://198.38.85.97:8090');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get('http://198.38.85.97:8090/UbiPharmacy/searchdrugs?action=searchdrug&searchkey=localbarcode&searchvalue=006098'
    , {
      headers
    }
    );
  }
}
