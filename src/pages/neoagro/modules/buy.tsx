import styled from "styled-components";

export function Compras() {

    return (
        <Container>
            <h1>Módulo de compras</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/software.png" />
                        <span>Controle de requisição de compra</span>
                    </Card>
                    <Card>
                        <img src="/iot.png" />
                        <span>Perfil de alçadas por centro de custo e valores</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Cotação de compras via Arquivo</span>
                    </Card>
                    <Card>
                        <img src="/fita-metrica.png" />
                        <span>Importação de arquivo de cotação</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Monitoramento de compras</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border-radius: 10px ;
    min-height: 500px;

    h1 {
        color: ${({ theme }) => theme.colors.secondary.dark};
        text-align: center;
    }
`
const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CardsContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 15px
    };
`

const Card = styled.div`
    width: 30%;
    height: 150px;
    max-height: 350px;
    padding: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    /* border: 1px solid white; */
    /* border: 20px;
    background-color: ${({ theme }) => theme.colors.secondary.lighter}; */
    transition: transform 0.2 ease-in-out, box-shadow 0.2 ease-in-out;

    @media (max-width: 900px) {
        flex-direction: row;
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
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    }

    img {
        width: 50px;
        height: 50px;

        svg {
            color: ${({ theme }) => theme.colors.secondary.lighter};
        }

        &:hover {
        }
    }
`