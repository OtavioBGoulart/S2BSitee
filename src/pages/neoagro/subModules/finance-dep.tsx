import styled from "styled-components";
import { ArrowLeft } from "lucide-react";
import { useNavigation } from "../../../hooks/useNavigation";


export function FinDep() {

    const { goToNeoagro } = useNavigation();

    function BackToControllerShip() {
        goToNeoagro();
    }

    return (
        <Container>
            <Header />
            <ArrowLeft onClick={BackToControllerShip} />
            <h1>SubMódulo de Departamento Financeiro</h1>
            <Header />
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/software.png" />
                        <span>Controle de Adiantamentos Cliente/Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/iot.png" />
                        <span>Controle Recebimento Clientes</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Controle de Títulos a Vencer e Vencidos</span>
                    </Card>
                    <Card>
                        <img src="/fita-metrica.png" />
                        <span>Controle de Recebimentos em Cheques Pré-Datados</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Geração de Arquivos para Pagamentos de Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle das Movimentações Financeira e Bancárias</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle de Pagamentos a Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle e Baixa de Recebimentos de Títulos de Clientes</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Geração de Fatura de Várias Duplicatas</span>
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
    position: relative;

    h1 {
        color: ${({ theme }) => theme.colors.secondary.dark};
        text-align: center;
    }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza o conteúdo */

    svg { /* Estilo para o ícone */
        position: absolute; /* Coloca a seta em uma posição fixa */
        left: 20px; /* Ajuste a posição da seta conforme necessário */
        cursor: pointer;
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: ${({ theme }) => theme.colors.secondary.dark};
        text-align: center;
        margin-bottom: 40px;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: ${({ theme }) => theme.fontSizes.large};
        }
    }
`;

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