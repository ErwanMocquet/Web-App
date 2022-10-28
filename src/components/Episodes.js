import episode from "../img/episode.jpg";
import AddIcon from '@mui/icons-material/Add';

export default function Episodes() {
    return (
        <section className="episode-card-container">
            <figure className="image-episode-card">
                <img className="episode-image" src={episode} alt="Episode"></img>
            </figure>
            <article className="episode-content">
                <h2 className="episode-name">1. Shadow of the path</h2>
                <p className="episode-time">1hr 5min</p>
            </article>
            <div className="add-episode mobile">
                <AddIcon className="add-episode-button"/>
            </div>
            <div className="add-episode desktop-plus-button">
                <AddIcon className="add-episode-button" sx={{ fontSize: "2.5rem" }}/>
            </div>
        </section>
    )
}