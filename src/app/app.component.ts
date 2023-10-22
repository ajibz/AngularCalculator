import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';

  displayedValue = ""
  leftValue = ""
  allowedCharacters = ["0","1","2","3","4","5","6","7","8","9","."]
  operatorSign = ""
  isEvaluated = false

  receiveCharacter(receivedCharacter:string){

    if(receivedCharacter === "RESET"){
      this.displayedValue = ""
      this.leftValue = ""
      this.operatorSign = ""
    }

    if(receivedCharacter === "DEL"){
      this.displayedValue = this.displayedValue.substring(0, this.displayedValue.length - 1)
    }


    
    if(receivedCharacter === "+" || receivedCharacter === "-" || receivedCharacter === "/" || receivedCharacter === "*"){
      this.isEvaluated ? this.displayedValue = "" : this.displayedValue
      this.leftValue =  this.leftValue  + this.operatorSign + this.displayedValue 
      console.log(this.leftValue)
      if (this.leftValue.includes("+") || this.leftValue.includes("-") || this.leftValue.includes("/") || this.leftValue.includes("*")){
        console.log(this.leftValue)
        this.displayedValue = eval(this.leftValue)
        this.isEvaluated = true
        this.leftValue = this.displayedValue
        this.operatorSign = receivedCharacter
      }
      else{
        this.operatorSign = receivedCharacter
        this.displayedValue = ""
      }
      
    }

    if(receivedCharacter === "="){
      if(this.operatorSign !== ""){
        this.displayedValue = eval(this.leftValue + this.operatorSign + this.displayedValue)
        this.isEvaluated = true
        this.leftValue = this.displayedValue
        this.operatorSign = ""
      } 
    }

    
  
    if(this.allowedCharacters.includes(receivedCharacter)){

      if(this.isEvaluated){
        this.displayedValue = ""
        receivedCharacter === "." && this.displayedValue.includes(receivedCharacter) ? this.displayedValue : this.displayedValue += receivedCharacter
        this.isEvaluated = false
      }
      else{
        receivedCharacter === "." && this.displayedValue.includes(receivedCharacter) ? this.displayedValue : this.displayedValue += receivedCharacter
      }
    }
   
  }
}
