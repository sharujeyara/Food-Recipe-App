import Customimage from "./Customimage";

export default function Recipecard({recipe}) {
    return (
        <div className="recipe-card">
            <Customimage className="custom-image" imgSrc={recipe.image} pt="60%" alt="" />
            <div className="info">
                <img className="auther" src={recipe.authorImg} alt="" />
                <p className="title">{recipe.title}</p>
                <p className="recipe-para">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine.</p>
                <a href="#!" className="view-btn">VIEW RECIPE</a>
            </div>
        </div>
    )
}