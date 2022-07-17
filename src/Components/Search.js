import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Search(){
    const searches = ["pizza", "burger", "cookies", "juice", "briyani", "salad", "ice-cream", "lasanga", "pudding", "soup", "sarbath", "coffee"]

    return(
        <div className="Previous-searches">
        <h1>Previous Searches</h1>
        <div className="search-container">
            {searches.map((search, index) => (
                <div className="item" key={index} style={{animationDelay: index * .1 + "s"}}>
                    {search}
                </div>
            ))}
            <div className="search-box">
              <input type="text" placeholder="Search here" className="input" />
              <button className="btn">
                  <FontAwesomeIcon icon={faSearch}/>
              </button>
            </div>
        </div>
    </div>
    )
}