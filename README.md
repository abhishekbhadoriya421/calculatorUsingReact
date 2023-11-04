# Calculator Project Using React

this calculator web application let you perform all the method and function to do your calculation 

## Available code

>use `npm start` to run code

## Used Tools

- React
- JavaScript
- HTML
- CSS

## Folder Structure
-src
>In src Folder you can find all the code and target the
-src -> App.js
>don't manipulate App.js file 
-src -> component
-component -> Display -> Keyboard -> CalculatorComponent.jsx
>CalculatorComponent.jsx file contains all the logic code and Display Folder contain calculator display code  and keyboard folder contains calculator buttons code

## Calculator Login

```js
switch (action) {
      case "C": {
        setFirstOperand(null);
        setCurrentVal("0");
        setOperator("");
        break;
      }
      case "=": {
        if (firstOperand === null || operator === "") {
          setFirstOperand(null);
          setCurrentVal("0");
          setOperator("");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(null);
          setCurrentVal(ans);
          setOperator("");
        }
        break;
      }
      case "+": {
        if (operator === "" || firstOperand === null) {
          setFirstOperand(Number(currentVal));
          setCurrentVal("");
          setOperator("+");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(ans);
          setOperator("+");
          setCurrentVal("");
        }
        break;
      }
}
```
>this is the main code 



