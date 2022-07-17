import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Quotesection() {
    return (
        <div className="section quote">
            <p className="text" >
                <FontAwesomeIcon icon={faQuoteLeft}/>
                FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.
            </p>

            <p className="author">Anthony Bardian</p>

        </div>
    )
}