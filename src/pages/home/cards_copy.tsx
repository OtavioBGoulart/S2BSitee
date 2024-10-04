import styled from "styled-components";
//import { useNavigation } from "../../hooks/useNavigation";

export function Cards() {

    //const { goToSolutions } = useNavigation();

    return (
        <MainContainer>
            <CardsContainer>
                <Card>
                    <span>Soluções</span>
                    <img src="solutions.png" />
                </Card>
                <Card>
                    <span>Segurança</span>
                    <img src="security.png" />
                </Card>
                <Card>
                    <span>Escalabilidade</span>
                    <img src="scale.png" />
                </Card>
            </CardsContainer>
            {/* <MoreInfo>
                <button onClick={goToSolutions}>Mais informações</button>
            </MoreInfo> */}
        </MainContainer>
    )
}


const Card = styled.div`
    width: 30%;
    height: auto;
    max-height: 350px;
    padding: 10px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2 ease-in-out, box-shadow 0.2 ease-in-out;

    @media (max-width: 900px) {
        width: 100%;
    };

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 
        0 12px 40px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }

    span {
    font-family: 'Montserrat', sans-serif;
    color: #003c5d;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    }

    img {
        width: 60%;
    }
`

// const MoreInfo = styled.div`
//     display: flex;
//     justify-content: center;

//     button  {
//         font-family: 'Montserrat', sans-serif;
//         color: #003c5d;
//         font-size: 1.5rem;
//         border: none;
//         background-color: transparent;
//         text-decoration: underline  ;

//         &:hover {
//             cursor: pointer;
//             color: #2088c0;
//             filter: brightness(100%);
//         }
//     }
// `

const CardsContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 15px
    };
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px;
    padding: 20px 20px;
    background-color: white;
`