import Card from "../../components/Card"
import Banner from "../../components/Banner"

export default function Home() {
    return (
        <div>
            <div className="banner__home">
                <h1>Chez vous, partout et ailleurs</h1>
                <Banner />
            </div>
            <Card />
        </div>

    )
}