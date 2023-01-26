import { createContext, useState } from "react";

const CalculatorContext = createContext({
    memory: null,
    operation: null,
    currentValue: 0,
    isDecimal: false,
    addNumber: (value) => {},
    addOperation: (operation) => {},
    getResult: () => {},
    executeAction:  (action) => {}
});

export const CalculatorContextProvider = ({children}) => {

    const [memory, setMemory] = useState(null);
    const [operation, setOperation] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [isClear, setIsClear] = useState(true);
    const [isDecimal, setIsDecimal] = useState(false);

    const handleAddNumber = (value) => {

        if(isClear){
            if(value === '.'){
                setIsDecimal(true);
            }else{
                const point = isDecimal ? '.' : '';
                const newValue = currentValue.toString() + point + value.toString();
                setCurrentValue(parseFloat(newValue));
                setIsClear(false);
                setIsDecimal(false);
            }
        }else{
                if(value === '.'){
                    setIsDecimal(true);
                }else{
                    const point = isDecimal ? '.' : '';
                    const newValue = currentValue.toString() + point + value.toString();
                    setIsDecimal(false);
                    setCurrentValue(parseFloat(newValue));
                }
             }
        

    }

    const handleAddOperation = (ope) => {

        if(currentValue){
            if(operation){
                handleGetResult();
                setOperation(ope)
            }else{
                setOperation(ope);
                setMemory(currentValue);
                setCurrentValue(0);
                setIsClear(true);
            }
        }


    }

    const handleGetResult = () => {
        let result = 0;

        if(currentValue && operation && memory){
            switch (operation) {
                case "+":
                    result = parseFloat(currentValue) + parseFloat(memory);
                break;

                case "-":
                    result = parseFloat(memory) - parseFloat(currentValue);
                break;

                case "X":
                    result = parseFloat(currentValue) * parseFloat(memory);
                break;

                case "/":
                    result = parseFloat(memory) / parseFloat(currentValue);
                break;

                case "%":
                    result = parseFloat(memory) / 100 * parseFloat(currentValue);
                break;

                default:
            }

            setCurrentValue(result);
            setOperation(null);
            setMemory(result);
            setIsClear(true);
            setIsDecimal(false);
        }
    }

    const clean = () => {
        setCurrentValue(0);
        setOperation(null);
        setMemory(0);
        setIsClear(true);
        setIsDecimal(false);
    }

    const deleteNum = () => {
        const index = currentValue.toString().indexOf(".");
        if(index > 0){
            const numberOfDecimals = currentValue.toString().slice(index + 1).length;
            if(numberOfDecimals === 1){
                const min = Math.floor(currentValue);
                setCurrentValue(min);
            }else{
                const newNumber = parseFloat(currentValue).toFixed(numberOfDecimals - 1);
                setCurrentValue(newNumber);
            }
        }else{
            setCurrentValue(parseInt(currentValue / 10));
        }

        //setCurrentValue(parseInt(currentValue / 10));
    }

    const changeSign = () => {
        setCurrentValue(currentValue * -1);
    }

    const convertToFloat = () => {
        if(currentValue.toString().indexOf(".") > 0){

        }else{
            handleAddNumber(".");
        }
    }

    const handleExecuteAction = (action) => {

        switch (action) {
            case "=":
                handleGetResult();
            break;

            case 'AC':
                clean();
            break;

            case '<==':
                deleteNum();
            break;

             case '+/-':
                 changeSign();
            break;

            case '.':
                convertToFloat();
           break;

            default:
        }

    }

    return(
        <CalculatorContext.Provider value={{
            memory,
            operation,
            currentValue,
            isDecimal,
            addNumber: handleAddNumber,
            addOperation: handleAddOperation,
            getResult: handleGetResult,
            executeAction: handleExecuteAction
        }}>{children}</CalculatorContext.Provider>
    )
    
    
}

export default CalculatorContext;