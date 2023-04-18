/*import styled from 'styled-components'

const BannerWrapper = styled.banner`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding-top: 75px;
`*/
import Background from "../../assets/e270fc8fc902a1eb738458e7b29c1899.jpg"


function Home() {
    return (
        <div>
            <div className="banner">
                <img src={Background} alt="background de côtes" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallerywrapper">

            </div>
        </div>
    )
}

export default Home