/*MADE BY KATIE */
import DescriptionPic from "../img/descpic.jpeg";

export default function DescriptionTop() {
    return (
        <section>
            <div className="description-top mobile">
                <div className="description-gradient">
                    <img className="description-image" src={DescriptionPic} alt="series"></img>
                </div>
                <div className="text-container">
                    <h1 className="description-header">The Lord of the Rings: The Rings of Power</h1>
                    <p className="description-text">A short series description as a little teaser to give the overall feeling of the show, info about the director, studio etc.</p>
                </div>
            </div>
            <div className="top-card desktop">
                <div className="desktop-top-card-container">
                    <figure className="description-image-container">
                    <img className="desktop-description-image" src={DescriptionPic} alt="series"></img>
                    </figure>
                    <div className="desktop-text-container">
                        <h1 className="desktop-description-header">The Lord of the Rings: The Rings of Power</h1>
                        <p className="desktop-description-text">A short series description as a little teaser to give the overall feeling of the show, info about the director, studio etc.</p>
                        <p className="desktop-description-text">Rating: 86% <br></br>Imported from Rotten tomato.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}