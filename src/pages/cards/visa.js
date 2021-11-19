import {CardElementBaseline} from "./_cards_baseline";
import {useState} from "react";


export function VisaComponent() {
    const [cardNumber, setCardNumber] = useState('4111111111111111');
    const [cvvNumber, setCvvNumber] = useState('123');
    const [expiryDate, setExpiryDate] = useState('12/12');

    return (
        <div className="cc_wrapper">
            <CardElementBaseline
                cardNumber={cardNumber}
                cvvNumber={cvvNumber}
                expiryDate={expiryDate}
                cardLabel={'Visa details'}
                cardImg={"/static/img/cc-visa.jpeg"}
            />
        </div>
    )
}