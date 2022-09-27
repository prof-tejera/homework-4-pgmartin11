import { useState } from 'react';
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  const [number, addDigit] = useState(0),
    [buffer, updateBuffer] = useState(null),
    [displayValue, updateDisplay] = useState(0),
    [savedOperation, updateOperation] = useState(null);

  // helper functions
  const doCalc = (operation, operand1, operand2) => {
    let res;
    switch (operation) {
      case '+':
        res = operand1 + operand2;
        break;
      case '/':
        res = operand1 ? operand1 / operand2 : 0;
        break;
      case 'x':
        res = operand1 * operand2;
        break;
      case '-':
        res = operand1 - operand2;
        break;  
      default:
    }

    return res;
  }

  const doOperation = (operation) => {
    updateDisplay(doCalc(operation, buffer, number));
    addDigit(0);
    updateBuffer(null);
    updateOperation(null);
  }

  const doIntermediateOperaton = (operation) => {
    if (buffer === null) {
      updateBuffer(number);
      updateDisplay(number);
    } else {
      let res = doCalc(operation, buffer, number);
      updateBuffer(res);
      updateDisplay(res);
    }

    addDigit(0);
  }

  const clearAll = () => {
    addDigit(0);
    updateBuffer(null);
    updateDisplay(0);
    updateOperation(null);
  }

  // event handlers
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

  const handleNumberClick = (digit) => {
    const newValue = (10 * number) + digit;
    addDigit(newValue);
    updateDisplay(newValue);
  };

  return (
    <div
      style={{
        padding: 20,
        border: "1px solid gray",
        borderRadius: 5
      }}
    >
      <Screen value={displayValue} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
        </div>
        <div style={{ marginLeft: 5 }}>
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
