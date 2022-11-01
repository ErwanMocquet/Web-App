/* MADE BY MAGDALENA */
import KateProfile from "../img/karuno.svg";

export default function Actor () {
    return (
        <section className="actor-container">
            <div className="actor-content">
                <img className="actor-image" src={KateProfile} alt="actor"/>
                <h1 className="actor-name">Katerina Schmidtova</h1>
            </div>
        </section>
    )
}