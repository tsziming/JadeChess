import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayFinderComponent } from './play-finder/play-finder.component';
import { PlayComponent } from './play/play.component';
import { BoardModule } from '../board/board.module';



@NgModule({
  declarations: [
    PlayFinderComponent,
    PlayComponent
  ],
  imports: [
    CommonModule,
    BoardModule,
  ]
})
export class PlayModule { }
