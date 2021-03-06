import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create.component';
import { TasklistComponent } from './components/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
