import {useState} from "react";
import {CardElementBaseline} from "./_cards_baseline";
import {generate_cc_number, generate_cvv, generate_date_expiration} from "../../utils/card_generator";

export function MasterCardComponent() {
    const [cardNumber, setCardNumber] = useState(generate_cc_number(16, [5,5]));
    const [cvvNumber, setCvvNumber] = useState(generate_cvv(4));
    const [expiryDate, setExpiryDate] = useState(generate_date_expiration());

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