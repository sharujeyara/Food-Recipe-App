import Customimage from "./Customimage"


export default function Mainsection() {
    const images = [
        "/gallery/img_1.jpg",
        "/gallery/img_2.jpg",
        "/gallery/img_3.jpg",
        "/gallery/img_4.jpg",
        "/gallery/img_5.jpg",
        "/gallery/img_6.jpg",
        "/gallery/img_7.jpg",
        "/gallery/img_8.jpg",
        "/gallery/img_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">
                    FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.
                </p>
                <button className="button">Explore Now</button>
            </div>


            <div className="col gallery">
                {images.map((src, index) => (
                    <Customimage key={index} imgSrc={src} pt={"70%"} />
                ))}




            </div>
        </div>
    )
}