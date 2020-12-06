import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalReference: NgbModalRef;
  faSearch = faSearch;
  @ViewChild('searchModel') templateRef: TemplateRef<any>;
  constructor(private modalService: NgbModal, ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  openSearchModel() {
    this.modalService.open(this.templateRef, { centered: true });
  }

  // tslint:disable-next-line: typedef
  closeSearchModel() {
    this.modalService.dismissAll();
    // this.form.reset();
    // this.router.navigate(['/generate']);
  }

}
