import { Component, Renderer2 } from '@angular/core';
import { MockdataService } from './mockdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-playground';
  activeUser = 'Jerome Heritier';

  mockData = this.mockdataService.mockData;
  constructor(private mockdataService: MockdataService) {}
}
