/*MADE BY KATIE */
//import DescriptionPic from "../img/descpic.jpeg";

export default function DescriptionTop({datapass}) {
    console.log(datapass)
    return (
        <section>
            <div className="description-top mobile">
                <div className="description-gradient">
                    <img className="description-image" src={datapass.datapass.image} alt="series"></img>
                </div>
                <div className="text-container">
                    <h1 className="description-header">{datapass.datapass.name}</h1>
                    <p className="description-text">{datapass.datapass.overall}</p>
                </div>
            </div>
            <div className="top-card desktop">
                <div className="desktop-top-card-container">
                    <figure className="description-image-container">
                    <img className="desktop-description-image" src={datapass.datapass.image} alt="series"></img>
                    </figure>
                    <div className="desktop-text-container">
                        <h1 className="desktop-description-header">{datapass.datapass.name}</h1>
                        <p className="desktop-description-text">{datapass.datapass.overall}</p>
                        <p className="desktop-description-text">Rating: 86% <br></br>Imported from Rotten tomato.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}