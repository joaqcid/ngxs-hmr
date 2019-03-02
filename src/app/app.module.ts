import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule, StateContext, Select } from '@ngxs/store';
import { NgxsHmrLifeCycle, NgxsHmrSnapshot as Snapshot } from '@ngxs/hmr-plugin';
import { TestState } from './state/test.state';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Uncomment to repro error
    //
    // "Error: The selector "app-root" did not match any elements"
    //
    // i think that ngModule.destroy is executed before createNewHosts 
    // app-root is not in DOM when angular tries to bootstrap after hot reload
    // 
    // NgxsModule.forRoot([TestState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements NgxsHmrLifeCycle<Snapshot> {
  public hmrNgxsStoreOnInit(ctx: StateContext<Snapshot>, snapshot: Partial<Snapshot>) {
    ctx.patchState(snapshot);
  }

  public hmrNgxsStoreBeforeOnDestroy(ctx: StateContext<Snapshot>): Partial<Snapshot> {
    return ctx.getState();
  }
}