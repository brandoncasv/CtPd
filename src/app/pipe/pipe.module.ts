import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNamePipe } from './search-name.pipe';



@NgModule({
  declarations: [SearchNamePipe],
  exports: [SearchNamePipe],
  imports: []
})
export class PipeModule { }
