import styled from "styled-components";

export function Info() {

    return (
        <ProductsContainer>
            <CardsContainer>
                <Card>
                    <span>Sistema de Gestão para Agronegócio (neOagro)</span>
                    <img src="software.png" />
                </Card>
                <Card>
                    <span>Inovação Agro IoT</span>
                    <img src="iot.png" />
                </Card>
                <Card>
                    <span>Serviços de Consultoria e Soluções em Business Intelligence (BI)</span>
                    <img src="business-intelligence.png" />
                </Card>
                <Card>
                    <span>Desenvolvimento de soluções  sob medida</span>
                    <img src="fita-metrica.png" />
                </Card>
                <Card>
                    <span>Consultoria em Análise e Melhoria de Processos</span>
                    <img src="melhoria.png" />
                </Card>
                <Card>
                    <span>Serviços de Gerenciamento de TI em Geral</span>
                    <img src="infra.png" />
                </Card>
            </CardsContainer>
        </ProductsContainer>
    )
}


const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color:  ${({ theme }) => theme.colors.secondary.lighter};;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid white; */
    /* border: 20px;
    background-color: ${({ theme }) => theme.colors.secondary.lighter}; */
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
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    }

    img {
        width: 70px;
        height: 70px;

        svg {
            color: ${({ theme }) => theme.colors.secondary.lighter};
        }

        &:hover {
        }
    }
`