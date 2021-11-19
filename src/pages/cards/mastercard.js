import {useState} from "react";
import {CardElementBaseline} from "./_cards_baseline";

export function MasterCardComponent() {
    const [cardNumber, setCardNumber] = useState('5555555555554444');
    const [cvvNumber, setCvvNumber] = useState('123');
    const [expiryDate, setExpiryDate] = useState('12/12');

    return (
        <div className="cc_wrapper">
            <CardElementBaseline
                cardNumber={cardNumber}
                cvvNumber={cvvNumber}
                expiryDate={expiryDate}
                cardLabel={'Maser card details'}
                cardImg={"/static/img/mc-logo.jpeg"}
            />
        </div>
    )
}