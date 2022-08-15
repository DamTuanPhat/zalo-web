import { Component, OnInit } from '@angular/core';
import { faCheck, faDownload, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-zalo-pc',
  templateUrl: './zalo-pc.component.html',
  styleUrls: ['./zalo-pc.component.css']
})
export class ZaloPcComponent implements OnInit {
  faCheck = faCheck;
  faDown = faDownload;
  faGlobe = faGlobe;

  constructor() { }

  ngOnInit(): void {
  }

}
