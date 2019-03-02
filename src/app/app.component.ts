import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { TestState } from './state/test.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-hmr';

  @Select(TestState.items) items$: Observable<string[]>
}
