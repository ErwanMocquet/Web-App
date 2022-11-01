/* MADE BY ERWAN AND IGOR */
import AddIcon from '@mui/icons-material/Add';
import KateProfile from "../img/karuno.svg";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';

export default function WishlistCard({ post }) {
    const [card, setCard] = useState([])

    useEffect(() => {
        if (post) {
            setCard(post);
        }
    }, [post]);

    // ADDING FROM WISHLIST TO CURRENT
    async function addCurrent() {
        const url = "https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/current.json";
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(card) 
        });
        const data = await response.json();
        console.log(data);
        toast.success('Successfully added to Current!', {className: "toaster"})
    }

    // PASSING DATA TO THE DESCRIPTION PAGE
    const datapass = {
        name: post.name,
        overall: post.overall,
        image: post.image_thumbnail_path,
    };

    return(
        <main className="main-card">
        <section className="card-container">
            <div className="profile-cards-container">
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
            </div>
            <Link to="/description" state={{ datapass }}>
            <figure className="image-cards-container">
                    <img className="image-cards" src={post.image_thumbnail_path} alt="Series"></img>
            </figure>
            </Link>
            <Link to="/description" state={{ datapass }}>
            <article className="content-container">
                <h1 className="text-cards title-content-card">{post.name}</h1>
                <h2 className="text-cards whereat-content-card">{post.seasnum} season</h2>
                <p className="text-cards description-content-card">{post.lastepisode}</p>
                <div className="platform-cards-container">
                    <img className="platform-cards" src={post.source} alt="Platform logo"></img>
                </div>
            </article>
            </Link>
            <button className="add-series-arrow-container desktop" onClick={addCurrent}>
                <AddIcon className="add-series-arrow"></AddIcon>
            </button>
            <button className="add-series-arrow-container mobile" onClick={addCurrent}>
                <AddIcon className="add-series-arrow" sx={{ fontSize: "2.5rem" }}></AddIcon>
            </button>
        </section>
        </main>
    )
}