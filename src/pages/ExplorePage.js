/* So far made by Katie */
import ExploreCards from "../components/ExploreCards.js"
import BottomNav from "../components/BottomNav"

export default function CurrentPage () {
    return (
        <main>
            <div className="for-you-main">
                <h1 className="explore-heading-one">For you</h1>
                <ExploreCards />
            </div>
            <div className="trending-main">
                <h1 className="explore-heading-one">Trending</h1>
                <ExploreCards />
            </div>
            <div className="themes-main">
                <h1 className="explore-heading-one">Themes</h1>
                <ExploreCards />
            </div>
            <BottomNav/>
        </main>
    )
}