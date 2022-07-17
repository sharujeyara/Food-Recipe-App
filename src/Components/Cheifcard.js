import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Cheifcard({chief}){
    return(
        <div className="cheif-card">
            <img src={chief.img} alt=""/>
            <div className="cheif-container">
            <h3 className="name">{chief.name}</h3>
            <p className="recipe">Recipes: <b>{chief.recipe}</b></p>
            <p className="cuisine">Cuisine: <b>{chief.cuisine}</b></p>
            <p className="cheif-icons">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </p>
            </div>
        </div>
    )
}