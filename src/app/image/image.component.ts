import { ViewEncapsulation } from '@angular/core';
import { ImageService } from '../Shared/image.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';

interface Images {
  image_id?: number;
  image_url?: string;
  data1?: string;
  data2?: string;
  data3?: string;

}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  encapsulation: ViewEncapsulation.None,

})

export class ImageComponent implements OnInit, AfterViewInit {


  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  elements: any = [];
  previous: any = [];
  headElements = ['Opportunity Id', 'Document Tag Name', 'Document Name', ''];

  firstItemIndex;
  lastItemIndex;


  closeResult: string;
  Images: Images[];
  images: string;

  searchText: string;

  constructor(
    private imageService: ImageService,
    private modalService: NgbModal,
    private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef
  ) { }

  getImages() {
    this.imageService.getImages().subscribe(data => {
      this.Images = data;
    })
  }

  ViewImage(imgId, content) {
    for (let i = 0; i < this.Images.length; i++) {
      if (this.Images[i].image_id === imgId) {
        this.images = this.Images[i].image_url;
      }
    }
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
    this.getImages();
    // for (let i = 1; i <= 4; i++) {
    //   this.elements.push({ id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
      document.addEventListener('contextmenu', event => event.preventDefault());
      this.tableService.setDataSource(this.elements);
      this.elements = this.tableService.getDataSource();
      this.previous = this.tableService.getDataSource();
    
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }
}
