import {MiniTopMessage} from "../../components/alerts";
import {useState} from "react";


export const CardElementBaseline = ({cardNumber, cvvNumber, expiryDate, cardLabel, cardImg}) => {
    const [showCopyMessage, setCopyMessage] = useState(false);

    function performCopy(text_to_copy) {
        navigator.clipboard.writeText(text_to_copy).then(function () {
            setCopyMessage(true);
            setTimeout(() => setCopyMessage(false), 1000);
        }, function (err) {
        });
    }

    return (
        <div className="card_element_baseline">
            {/*<h3>{cardLabel}</h3>*/}
            <img src={cardImg} alt={'acabeza credit cards generator'} className="cc-image" height={40} />
            <div className="card_details">
                <CardElementInfoBaseline
                    label={'Card number:'}
                    value={cardNumber}
                    copy_callback={() => performCopy(cardNumber)}
                />
                <CardElementInfoBaseline
                    label={'CVV:'}
                    value={cvvNumber}
                    copy_callback={() => performCopy(cvvNumber)}
                />
                <CardElementInfoBaseline
                    label={'Expiry Date:'}
                    value={expiryDate}
                    copy_callback={() => performCopy(expiryDate)}
                />
            </div>

            <MiniTopMessage show={showCopyMessage}>
                Copied
            </MiniTopMessage>
        </div>
    )
}


export const CardElementInfoBaseline = ({label, value, copy_callback}) => {
    return (
        <div className="detail_element">
            <span className="label">{label}</span>
            <span className="value">{value}</span>
            <span className="copy_value" onClick={copy_callback}><i className="far fa-copy"></i></span>
        </div>
    )
}