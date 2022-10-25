/*MADE BY KATIE */
import DescriptionPic from "../img/descpic.jpeg";

export default function DescriptionTop() {
    return (
        <div>
            <div className="description-gradient">
                <img className="description-image" src={DescriptionPic} alt="series"></img>
            </div>
            <div className="text-container">
                <h1 className="description-header">The Lord of the Rings: The Rings of Power</h1>
                <p className="description-text">A short series description as a little teaser to give the overall feeling of the show, info about the director, studio etc.</p>
            </div>
        </div>
    )
}