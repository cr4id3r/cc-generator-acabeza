import {CardElementBaseline} from "./_cards_baseline";
import {useState} from "react";


export function AXComponent() {
    const [cardNumber, setCardNumber] = useState('378282246310005');
    const [cvvNumber, setCvvNumber] = useState('123');
    const [expiryDate, setExpiryDate] = useState('12/12');

    return (
        <div className="cc_wrapper">
            <CardElementBaseline
                cardNumber={cardNumber}
                cvvNumber={cvvNumber}
                expiryDate={expiryDate}
                cardLabel={'American Express details'}
                cardImg={"/static/img/cc-ax.png"}
            />
        </div>
    )
}