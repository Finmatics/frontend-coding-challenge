import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: '',
      loadChildren: () =>
        import('@frontend-coding-challenge/feature-dashboard').then(m => m.FeatureDashboardModule)
    }
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
