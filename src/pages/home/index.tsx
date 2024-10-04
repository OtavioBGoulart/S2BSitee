import styled from "styled-components";
import { Cards } from "./cards";

export function Home() {


    return (
        <MainContainer>
            <Banner>
                <img src="s2bbanner.png" />
            </Banner>
            <Cards />
        </MainContainer>
    );
}

const Banner = styled.div`
    width: 100%;

    img {
        width: 100%;
        object-fit: cover;
    }

    /* @media (max-width: 900px) {
        height: 300px;
    } */
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

