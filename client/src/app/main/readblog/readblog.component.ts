import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css'],
})
export class ReadblogComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('this.route.url', this.router.url);
  }
}
