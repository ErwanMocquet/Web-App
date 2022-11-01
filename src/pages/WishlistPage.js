/* MADE BY IGOR */
import WishlistCard from "../components/WishlistCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import SecondDeskNav from "../components/SecondDeskNav.js";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function WishlistPage () {

    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);
    

    // FETCHING DATA FROM THE DATABASE
    useEffect(() => {
        async function getPosts() {
        const url =
        "https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json";
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
            <Toaster className="toaster"
                position="bottom-center"
                reverseOrder={false}
                fontFamily='forma-djr-text'
            />
            <TopDeskNav />
            <TopNav />
            <BottomNav />
            <SecondDeskNav />
            <div className="wishlist-main">
                <div className="container-desktop-current-cards">
                {isPosts ? (
                    <div className="currentbox">
                        {posts.map((post) => (
                            <WishlistCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="emptyseries">To see your series, go to Explore and add them</p>
                )}
                </div>
            </div>
            <Footer />
        </div>
    )
}