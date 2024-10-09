import styled from "styled-components";
//import { useNavigation } from "../../hooks/useNavigation";

export function Cards() {

    //const { goToSolutions } = useNavigation();

    return (
        <MainContainer>
            <h1>Alavanque seu negócio com o sistema de gestão mais completo</h1>
            <CardsContainer>
                <Card>
                    <span>Integrações</span>
                    <img src="integracao.png" />
                </Card>
                <Card>
                    <span>Segurança</span>
                    <img src="seguranca.png" />
                </Card>
                <Card>
                    <span>Escalabilidade</span>
                    <img src="grafico-de-barras.png" />
                </Card>
                <Card>
                    <span>Relatórios</span>
                    <img src="relatorio.png" />
                </Card>
                <Card>
                    <span>Confiabilidade</span>
                    <img src="confiabilidade.png" />
                </Card>
                <Card>
                    <span>Suporte</span>
                    <img src="definicoes.png" />
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

    /* &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 
        0 12px 40px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    } */

    span {
    font-family: ${({ theme }) => theme.fonts.content};
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    }

    img {
        width: 70px;
        height: 70px;
        transition: transform 1s ease-in-out;

        &:hover {
            transform: rotate(360deg);
        }
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
    flex-wrap: wrap;
    gap: 5px;
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
    padding: 20px 20px;
    background-color: white;

    h1 {
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-weight: 600;
        margin-bottom: 20px;
    }
`