import {CardElementBaseline} from "./_cards_baseline";
import {useState} from "react";
import {generate_cc_number, generate_cvv, generate_date_expiration} from "../../utils/card_generator";


export function VisaComponent() {
    const [cardNumber, setCardNumber] = useState(generate_cc_number(16, [4]));
    const [cvvNumber, setCvvNumber] = useState(generate_cvv(3));
    const [expiryDate, setExpiryDate] = useState(generate_date_expiration());

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