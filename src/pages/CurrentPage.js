import Cards from "../components/Cards.js"
import BottomNav from "../components/BottomNav"

export default function CurrentPage () {
    return (
        <div>
            <BottomNav />
            <div className="current-main">
                <Cards />
            </div>
        </div>
    )
}