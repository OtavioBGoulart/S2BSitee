import styled from "styled-components";

export function Compras() {

    return (
        <Container>
            <Header>
                <h1>Módulo de compras</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/buys-icons/controle-req-comp.png" />
                        <span>Controle de requisição de compra</span>
                    </Card>
                    <Card>
                        <img src="/buys-icons/perfil-de-alcadas.png" />
                        <span>Perfil de alçadas por centro de custo e valores</span>
                    </Card>
                    <Card>
                        <img src="/buys-icons/cotacao.png" />
                        <span>Cotação de compras via Arquivo</span>
                    </Card>
                    <Card>
                        <img src="/buys-icons/importacao-de-arquivo.png" />
                        <span>Importação de arquivo de cotação</span>
                    </Card>
                    <Card>
                        <img src="/buys-icons/monitoramento-compras.png" />
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

    @media( max-width: 768px) {
        min-height: 300px;
        height: auto;
    }

`

export const Header = styled.div`
    height: 150px;
    background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary.light}, 
    #2a4f78,
    ${({ theme }) => theme.colors.primary.lighter}
  );
    margin: auto 0;
    

    h1 {
        color: ${({ theme }) => theme.colors.secondary.light};
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