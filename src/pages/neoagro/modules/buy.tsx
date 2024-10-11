import styled from "styled-components";

export function Compras() {

    return (
        <Container>
            <h1>Módulo de compras</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/buys_icons/controle-req-comp.png" />
                        <span>Controle de requisição de compra</span>
                    </Card>
                    <Card>
                        <img src="/buys_icons/perfil-de-alcadas.png" />
                        <span>Perfil de alçadas por centro de custo e valores</span>
                    </Card>
                    <Card>
                        <img src="/buys_icons/cotacao.png" />
                        <span>Cotação de compras via Arquivo</span>
                    </Card>
                    <Card>
                        <img src="/buys_icons/importacao-de-arquivo.png" />
                        <span>Importação de arquivo de cotação</span>
                    </Card>
                    <Card>
                        <img src="/buys_icons/monitoramento-compras.png" />
                        <span>Monitoramento de compras</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border-radius: 10px ;
    min-height: 800px;


    h1 {
        color: ${({ theme }) => theme.colors.secondary.dark};
        text-align: center;
    }
`
export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media( max-width: 900px) {
    margin-top: 15px;
  }
`

export const CardsContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 85px;
    justify-content: space-evenly;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 15px
    };
`

export const Card = styled.div`
    width: 32%;
    max-height: 350px;
    padding: 10px 0;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 5px;
    /* border: 1px solid white; */
    /* border: 20px;
    background-color: ${({ theme }) => theme.colors.secondary.lighter}; */
    transition: transform 0.2 ease-in-out, box-shadow 0.2 ease-in-out;

    @media (max-width: 900px) {
        width: 100%;
        justify-content: flex-start;
        gap: 20px

    
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
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    }

    img {
        width: 50px;
        height: 50px;
    }
`