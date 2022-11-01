/* MADE BY ERWAN AND IGOR */
import Cards from "../components/CurrentCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import SecondDeskNav from "../components/SecondDeskNav.js";
import { useEffect, useState } from "react";

export default function CurrentPage () {

    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);
  

    // FETCHING DATA FROM THE DATABASE
    useEffect(() => {
        async function getPosts() {
        const url =
        "https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/current.json";
        const response = await fetch(url);
        const data = await response.json();
        if (data !== null) {
            const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            }));
            setPosts(postsArray);
        } else {
            setIsPosts(false);
        }
        }
        getPosts();
    }, []);

    return (
        <div>
            <TopNav />
            <TopDeskNav />
            <BottomNav />
            <SecondDeskNav />
            <div className="current-main">
                <h1 className="first-heading-current">Currently Watching</h1>
                <div className="container-desktop-current-cards">
                {isPosts ? (
                    <div className="currentbox">
                        {posts.map((post) => (
                            <Cards key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="emptyseries">To see your series, go to Explore and add them</p>
                )}
                </div>
                <h1 className="heading-current">Not watched for a while</h1>
                <div className="container-desktop-current-cards">
                {isPosts ? (
                    <div className="currentbox">
                        {posts.map((post) => (
                            <Cards key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="emptyseries">To see your series, go to Explore and add them</p>
                )}
                </div>
                <h1 className="heading-current">Stopped</h1>
                {isPosts ? (
                    <div className="currentbox">
                        {posts.map((post) => (
                            <Cards key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="emptyseries">To see your series, go to Explore and add them</p>
                )}
                <div className="container-desktop-current-cards">
                </div>
            </div>
            <Footer />
        </div>
    )
}