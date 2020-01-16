import React, {PureComponent} from "react";

class ResultInput extends PureComponent {
  constructor(props) {
    super(props);    
    this.xValue = this.generateRandomValue(100);
    this.yValue = this.generateRandomValue(100);
    this.zValue = this.generateRandomValue(100);
    this.answer = (this.xValue + this.yValue + this.zValue);
    this.proposedAnswer = this.generateRandomValue(3) + this.answer;
  }
  
  generateRandomValue = (factor) => {
    return  Math.floor(Math.random() * factor); 
  };

  handleChoice = (choice) => {
    const result     = this.answer === this.proposedAnswer;
    const {onChoice} = this.props;
   
    onChoice(
      result && choice ? true : !result && !choice ? true : false
    );
  };
  
  render() {
    return (
      <div>
         <div>
            <label>X</label>
            <input value={this.xValue} disabled/>
         </div>
         <div>
            <label>Y</label>
            <input value={this.yValue} disabled/>
         </div>
         <div>
            <label>Z</label>
            <input value={this.zValue} disabled/>
         </div>
         <div>
            <label>The sum of (X + Y + Z) is?</label>
            <input value={this.proposedAnswer} disabled/>
         </div>
         <div>
            <button onClick={() => this.handleChoice(true)}>yes</button>
            <button onClick={() => this.handleChoice(false)}>no</button>
         </div>
      </div>
    );
  }
}

export default ResultInput;