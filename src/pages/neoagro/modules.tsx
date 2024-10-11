import styled from "styled-components";
import { useNavigation } from "../../hooks/useNavigation";

export interface ModulesProps {
    setModule: (moduleName: string) => void;
}

export function Modules({ setModule }: ModulesProps) {

    const { goTobuys, goToDistribution, goToInvoicing, goToMarketing
        , goToProduction, goToLab, goToSalesManagement
    } = useNavigation();

    return (
        <Container>
            <h1>Módulos</h1>
            <CardContainer>
                <Card>
                    <h2>Compras</h2>
                    <img src="/modules-icons/compras.png" />
                    <SaibaMais onClick={goTobuys}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Controladoria</h2>
                    <img src="/modules-icons/controladoria.png" />
                    <SaibaMais onClick={() => setModule("subModules")}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Distribuição</h2>
                    <img src="/modules-icons/distribuicao.png" />
                    <SaibaMais onClick={goToDistribution}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Faturamento</h2>
                    <img src="/modules-icons/faturamento.png" />
                    <SaibaMais onClick={goToInvoicing}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Gerenciamento de Vendas</h2>
                    <img src="/modules-icons/vendas.png" />
                    <SaibaMais onClick={goToSalesManagement}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Marketing</h2>
                    <img src="/modules-icons/marketing.png" />
                    <SaibaMais onClick={goToMarketing}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Produção</h2>
                    <img src="/modules-icons/producao.png" />
                    <SaibaMais onClick={goToProduction}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
                <Card>
                    <h2>Laboratório</h2>
                    <img src="/modules-icons/laboratorio.png" />
                    <SaibaMais onClick={goToLab}>
                        Saiba Mais
                    </SaibaMais>
                </Card>
            </CardContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    padding-top: 20px;
    padding-bottom: 15px;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
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

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border: 1px solid ${({ theme }) => theme.colors.secondary.dark};;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
              0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 10px 10px;
    width: 30%;
    min-width: 200px;
    max-width: 600px;
    min-height: 300px;
    transition: transform 0.2s ease-in-out box-shadow 0.2s ease-in-out;

    h2 {
        color: ${({ theme }) => theme.colors.primary.light};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        margin-bottom: 3px;
        text-align: center;
    }

    span {
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.small};
        flex-grow: 1; /* Faz o conteúdo crescer se necessário */
    }
    
    img {
        width: 100px;
        height: 100px;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }

    @media(max-width: 1043px) {
        min-height: 100px;
        height: auto;
    }

    @media(max-width: 768px) {
        width: 70%;
        min-height: 100px;
        height: auto;
    }
`;


const SaibaMais = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 50%;
    height: 25px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    color: ${({ theme }) => theme.colors.secondary.lighter};
    margin-top: 20px; 
    align-self: center; 

    &:hover {
        cursor: pointer;   
        filter: brightness(95%) ;
    }
`;