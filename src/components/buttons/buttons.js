import { useContext } from "react"
import './buttons.css';
import CalculatorContext from "../../calculatorContext"

const Buttons = ({type, value}) => {

    const calculator = useContext(CalculatorContext);

    const handleClick = () => {
        switch (type) {
            case 'number':
                calculator.addNumber(parseInt(value));
            break;

            case 'operator':
                calculator.addOperation(value);
            break;

            case 'action':
                calculator.executeAction(value);
            break;

            default:
        }

    }

    return(
        <button className="calculatorButton" onClick={handleClick}>
            {value}
        </button>
    )
}

export default Buttons;