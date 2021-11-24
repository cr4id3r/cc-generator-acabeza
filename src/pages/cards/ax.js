import {CardElementBaseline} from "./_cards_baseline";
import {useState} from "react";
import {generate_cc_number, generate_cvv, generate_date_expiration} from "../../utils/card_generator";


export function AXComponent() {
    const [cardNumber, setCardNumber] = useState(generate_cc_number(15, [3,7]));
    const [cvvNumber, setCvvNumber] = useState(generate_cvv(3));
    const [expiryDate, setExpiryDate] = useState(generate_date_expiration());

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