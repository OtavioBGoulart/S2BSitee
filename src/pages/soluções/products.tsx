import styled from "styled-components";

export function Products() {

    return (
        <ProductsContainer>
            <CardsContainer>
                <Card>
                    <span>Sistema de Gestão para Agronegócio (neOagro)</span>
                </Card>
                <Card>
                    <span>Inovação Agro IoT</span>
                </Card>
                <Card>
                    <span>Serviços de Consultoria e Soluções em Business Intelligence (BI)</span>
                </Card>
                <Card>
                    <span>Desenvolvimento de soluções  sob medida</span>
                </Card>
                <Card>
                    <span>Consultoria em Análise e Melhoria de Processos</span>
                </Card>
                <Card>
                    <span>Serviços de Gerenciamento de TI em Geral</span>
                </Card>
            </CardsContainer>
        </ProductsContainer>
    )
}


const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary.light}, 
    #2a4f78,
    ${({ theme }) => theme.colors.primary.lighter}
  );
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
    justify-content: center;
    border: 1px solid #003c5d;
    border: 20px;
    background-color: ${({ theme }) => theme.colors.secondary.default};
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