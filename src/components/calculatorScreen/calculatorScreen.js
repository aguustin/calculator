import { useContext } from "react";
import CalculatorContext from "../../calculatorContext";

const CalculatorScreen = () => {

    const calculator = useContext(CalculatorContext);

    return(
        <div className="calculatorScreen">
        <div>
            <span>Memory: {calculator.memory}</span>
            <span>operation: {calculator.operation}</span>
        </div>
        <div className="calculatorCurrentValue"><span>Result: {calculator.currentValue}{calculator.isDecimal? '.' : ""}</span></div>
        </div>
    )
}

export default CalculatorScreen;