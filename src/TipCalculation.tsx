import React, { useState } from 'react';

const TipCalculation: React.FC = () => {

    const [billAmount, setBillAmount] = useState<number | string>("");
    const [tipAmount, setTipAmount] = useState<number | string>("");
    const [totalBill, setTotalBill] = useState<string | null>(null);


    const handleBillInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        setBillAmount(isNaN(value) ? "" : value);
    }
    const handleTipInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        setTipAmount(isNaN(value) ? "" : value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        const billNumber = Number(billAmount);
        const tipNumber = Number(tipAmount);
        const calculation = billNumber * tipNumber;
        const totalPrice = calculation.toFixed(2);
        const totalPriceResult = `Your total is:  ${totalPrice}  Thank you !`
        setTotalBill(totalPriceResult)
    }


    return (
        <>
            <form className='main-form'>

                <div className='tip-input'>
                    <label htmlFor='bill'> Enter bill amount : </label>
                    <input
                        id="bill"
                        type="number"
                        placeholder=' 0 '
                        value={billAmount}
                        onChange={handleBillInput}
                    ></input>
                </div>
                <div className='tip'>
                    <label htmlFor='tip'> Enter Tip Percentage : </label>
                    <input
                        id="tip"
                        type="number"
                        placeholder=" .10 "
                        value={tipAmount}
                        onChange={handleTipInput}
                    ></input>
                </div>
                <div className='tipExample'>example tip input  =  .10</div>
                <div>
                    <button type="button" className="btn btn-outline-success" onClick={handleClick}

                    >Enter</button>

                    {/* <button
                        onClick={handleClick}
                        title="button"
                        type="button" className="btn btn-primary"
                    >Enter</button>

                    <button
                        className="enterInfo"
                        onClick={handleClick}
                        title="button"
                    >Enter</button> */}
                    {totalBill !== null && (
                        <div className='totalPrice'>
                            <p>{totalBill}</p>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}

export default TipCalculation;