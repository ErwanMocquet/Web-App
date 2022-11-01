/* MADE BY KATE AND IGOR */
import ExploreCards from "../components/ExploreCards.js";
import BottomNav from "../components/BottomNav";
import TuneIcon from '@mui/icons-material/Tune';
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function CurrentPage () {
    const [series, setSeries] = useState([]);
    const [isSeries, setIsSeries] = useState(true);
    
    // FETCHING SERIES FROM DATABASE
    useEffect(() => {
        async function getSeries() {
            const url = "https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/series.json";
            const response = await fetch(url);
            const data = await response.json();
            if (data !== null) {
                const seriesArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
                }));
                setSeries(seriesArray);
            } else {
                setIsSeries(false);
            }
        }
        getSeries();
    }, []);

    console.log(series)

    return (
        <main className="explore-main">
            <Toaster className="toaster"
                position="bottom-center"
                reverseOrder={false}
                fontFamily='forma-djr-text'
            />
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
                    {isSeries ? (
                        <div className="seriesrow">
                            {series.map((post) => (
                                <ExploreCards key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                    <p className="emptyseries">No series to show</p>
                    )}
                </div>
            </div>
            <div className="trending-main">
                <h1 className="explore-heading-one">Trending</h1>
                <div className="cards-container">
                    {isSeries ? (
                        <div className="seriesrow">
                            {series.map((post) => (
                                <ExploreCards key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                    <p>No series to show</p>
                    )}
                </div>
            </div>
            <div className="themes-main">
                <h1 className="explore-heading-one">Themes</h1>
                <div className="cards-container">
                    {isSeries ? (
                        <div className="seriesrow">
                            {series.map((post) => (
                                <ExploreCards key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                    <p>No series to show</p>
                    )}
                </div>
            </div>
            <BottomNav/>
            <Footer />
        </main>
    )
}