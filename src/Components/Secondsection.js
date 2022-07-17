
export default function Secondsection() {
    const list= [
        "Learn New receipes",
        "Experiment with food",
        "Write your own receipes",
        "Know nutrition facts",
        "Get cooking receipes",
        "get ranked"
    ]

    return (
        <div className="section second">

            <div className="col img">
                <img src="/gallery/img_10.jpg" alt=""/>
            </div>


            <div className="col typography">
                <h1 className="title">Improve Your Cooking Skills</h1>
                {list.map((item,index) => (
                    <p className="second-list" key={index}>{item}</p>
                ))}
                <button className="button">Signup Now</button>
            </div>



        </div>
    )
}