/* So far made by Katie */
import ExploreCards from "../components/ExploreCards.js";
import BottomNav from "../components/BottomNav";
import TuneIcon from '@mui/icons-material/Tune';
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import { useState, useEffect } from "react";

export default function CurrentPage () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/series.json");
            const data = await response.json();
            setPosts(data);
        }
        getData();
        console.log(getData())
    }, []);


    return (
        <main className="explore-main">
            <TopDeskNav />
            <div className="search-container">
                <form className="search-form">
                    <input type="search" className="search-input" placeholder="Search"/>
                    <button type="submit" className="search-button">Search</button>
                </form>
                <TuneIcon className="filter-icon" sx={{ fontSize: "2.5rem" }}/>
            </div>
            <div className="for-you-main">
                <h1 className="explore-heading-one">For you</h1>
                <div className="cards-container">
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                </div>
            </div>
            <div className="trending-main">
                <h1 className="explore-heading-one">Trending</h1>
                <div className="cards-container">
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                </div>
            </div>
            <div className="themes-main">
                <h1 className="explore-heading-one">Themes</h1>
                <div className="cards-container">
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                    <ExploreCards />
                </div>
            </div>
            <BottomNav/>
            <Footer />
        </main>
    )
}