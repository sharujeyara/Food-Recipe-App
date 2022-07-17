import Recipecard from "../Components/Recipecard";
import Search from "../Components/Search";


export default function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/gallery/img_1.jpg",
            authorImg: "/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/gallery/img_4.jpg",
            authorImg: "/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/gallery/img_5.jpg",
            authorImg: "/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/gallery/img_6.jpg",
            authorImg: "/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/gallery/img_10.jpg",
            authorImg: "/top-chiefs/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/gallery/img_1.jpg",
            authorImg: "/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/gallery/img_4.jpg",
            authorImg: "/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/gallery/img_5.jpg",
            authorImg: "/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/gallery/img_6.jpg",
            authorImg: "/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/gallery/img_10.jpg",
            authorImg: "/top-chiefs/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/gallery/img_5.jpg",
            authorImg: "/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/gallery/img_6.jpg",
            authorImg: "/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.6)

    return (
        <div>
            <Search />
            <div className="recipe-container">
                {recipes.map((recipe, index)  => (
                    <Recipecard key={index} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}