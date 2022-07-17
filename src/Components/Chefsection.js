import Cheifcard from "./Cheifcard"

export default function Chefsection() {
    const chiefs = [
        {
            name: "John Doe",
            img: "/top-chiefs/img_1.jpg",
            recipe: "05",
            cuisine: "Japanese",
        },
        {
            name: "John Dorry",
            img: "/top-chiefs/img_2.jpg",
            recipe: "15",
            cuisine: "Chinese",
        },
        {
            name: "Choe Charles",
            img: "/top-chiefs/img_3.jpg",
            recipe: "13",
            cuisine: "American",
        },
        {
            name: "Blake Lively",
            img: "/top-chiefs/img_4.jpg",
            recipe: "08",
            cuisine: "Italian",
        },
        {
            name: "Erich Maria",
            img: "/top-chiefs/img_5.jpg",
            recipe: "10",
            cuisine: "Indian",
        },
        {
            name: "Sharu Jeyara",
            img: "/top-chiefs/img_6.jpg",
            recipe: "12",
            cuisine: "Sri Lankan"
        }
    ]
    return (
        <div className="section cheifs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="chief-container">
                {chiefs.map(chief=>
                    <Cheifcard key={chief.name} chief={chief} />
                )}

            </div>
        </div>
    )
}