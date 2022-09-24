import { useState } from 'react';
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  const [number, addDigit] = useState(0),
    [buffer, updateBuffer] = useState(null),
    [displayValue, updateDisplay] = useState(0),
    [savedOperation, updateOperation] = useState(null);

  const doCalc = (op) => {
  }

  const doOperation = (operation) => {
    switch (operation) {
      case '+':
        updateDisplay(buffer + number);
        break;
      case '/':
        updateDisplay(number ? buffer / number : 0);
        break;
      case 'x':
        updateDisplay(buffer * number);
        break;
      case '-':
        updateDisplay(buffer - number);
        break;  
      default:
    }
    addDigit(0);
    updateBuffer(null);
    updateOperation(null);
  }

  const doIntermediateOperaton = (operation) => {
    let res;
    switch (savedOperation) {
      case '+':
        res = buffer + number;
        break;
      case '/':
        res = number ? buffer / number : 0;
        break;
      case 'x':
        res = buffer * number;
        break;
      case '-':
        res = buffer - number;
        break;  
      default:
    }

    if (buffer === null) {
      updateBuffer(number);
      updateDisplay(number);
    } else {
      updateBuffer(res);
      updateDisplay(res);
    }

    addDigit(0);
  }

  const handleOperationClick = (op) => {
    switch(op) {
      case '=':
        doOperation(savedOperation);
        break;
      case 'clear':
        clearAll();
        break;
      case '+':
      case '/':
      case 'x':
      case '-':
        doIntermediateOperaton(savedOperation);
        updateOperation(op);
        break;
      default:
    }
  };

  // helper functions
  const handleNumberClick = (digit) => {
    const newValue = (10 * number) + digit;
    addDigit(newValue);
    updateDisplay(newValue);
  };

  const clearAll = () => {
    addDigit(0);
    updateBuffer(null);
    updateDisplay(0);
    updateOperation();
  }

  return (
    <div>
      <Screen value={displayValue} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
