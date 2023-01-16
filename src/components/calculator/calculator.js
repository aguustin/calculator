import './calculator.css';
import CalculatorScreen from '../calculatorScreen/calculatorScreen';
import Buttons from '../buttons/buttons';

const Calculator = () => {
    return(
        <div>
            <div className='calculator-container'>
                <CalculatorScreen/>
                <div className='container'>
                    <Buttons type="action" value="AC" />
                    <Buttons type="operator" value="%" />
                    <Buttons type="action" value="<==" />
                    <Buttons type="operator" value="/" />
                    <Buttons type="number" value="7" />
                    <Buttons type="number" value="8" />
                    <Buttons type="number" value="9" />
                    <Buttons type="operator" value="X" />
                    <Buttons type="number" value="4" />
                    <Buttons type="number" value="5" />
                    <Buttons type="number" value="6" />
                    <Buttons type="operator" value="-" />
                    <Buttons type="number" value="1" />
                    <Buttons type="number" value="2" />
                    <Buttons type="number" value="3" />
                    <Buttons type="operator" value="+" />
                    <Buttons type="action" value="+/-" />
                    <Buttons type="number" value="0" />
                    <Buttons type="action" value="." />
                    <Buttons type="action" value="=" />
                </div>
            </div>
        </div>
    )
}

export default Calculator;