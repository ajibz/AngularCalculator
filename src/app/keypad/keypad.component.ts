import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent {

  @Output() outputCharacter = new EventEmitter<string>()

  pressKey(keyCharacter:string) {
  this.outputCharacter.emit(keyCharacter)
  }

  

}
