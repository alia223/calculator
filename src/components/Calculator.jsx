import '../css/calculator.css';

function Calculator({ display, changeDisplay, removeOneCharFromDisplay, calculate }) {
    const handleButtonClick = (e) => {
        e.preventDefault();
        switch(e.target.innerHTML) {
            case 'backspace':
                removeOneCharFromDisplay();
                break;
            case '=':
                calculate(display);
                break;
            default:
                changeDisplay(e.target.innerHTML);
        }     
    }

    return (
        <div className="container">
            <div className="row m-auto">
                <div className="col-12 d-flex justify-content-end align-items-end">
                    <span>{display}</span>
                </div>
            </div>
            <div className="row m-auto text-center">
                <div className="col-3">
                    <button onClick={handleButtonClick} className="material-icons">backspace</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>1</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>2</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>+</button>
                </div>
            </div>
            <div className="row m-auto text-center">
                <div className="col-3">
                    <button onClick={handleButtonClick}>3</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>4</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>5</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>-</button>
                </div>
            </div>
            <div className="row m-auto text-center">
                <div className="col-3">
                    <button onClick={handleButtonClick}>6</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>7</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>8</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>x</button>
                </div>
            </div>
            <div className="row m-auto text-center">
                <div className="col-3">
                    <button onClick={handleButtonClick}>9</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>0</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>=</button>
                </div>
                <div className="col-3">
                    <button onClick={handleButtonClick}>÷</button> 
                </div>
            </div>
        </div>
    )
}

export default Calculator
