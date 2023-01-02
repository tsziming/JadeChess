import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { PieceComponent } from './piece/piece.component';



@NgModule({
  declarations: [
    BoardComponent,
    PieceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent,
  ]
})
export class BoardModule { }
