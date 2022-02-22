import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blogapp';
  public editorValue: string = '';
  public loading: boolean | undefined;
  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.sharedService.loading.subscribe((res) => {
      this.loading = res;
      this.cdRef.detectChanges();
    });
  }

  checkValue() {
    // console.log('this.editorValue', this.editorValue);
  }
}
