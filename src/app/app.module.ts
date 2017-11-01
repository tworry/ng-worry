import { HighlightModule } from 'ngx-highlightjs';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';



@NgModule({
    declarations: [
        AppComponent,
        DisplayDataComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HighlightModule.forRoot({ theme: 'monokai-sublime' }),
        NgZorroAntdModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
