import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextConverterComponent } from './text-converter/text-converter.component';
import { FormsModule } from '@angular/forms';
import { CustomToasterComponent } from './custom-toaster/custom-toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    TextConverterComponent,
    CustomToasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
