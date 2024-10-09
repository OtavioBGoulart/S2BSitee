import styled from "styled-components";
import { useNavigation } from "../../hooks/useNavigation";

export function Erp() {

    const { goToSolutions, goToNeoagro } = useNavigation()

    return (
        <Div>
            <Container>
                <h1>Sistema de gestão ERP</h1>
                <CardContainer>
                    <Card>
                        <h2>NEOAGRO SOLUTIONS</h2>
                        <span>Nosso sistema Neoagro está no mercado há mais de 30 anos solucionando e inovando em todas as formas.
                            Ajudamos a gerenciar sua TI com as melhores práticas do mercado, focando na continuidade do seu negócio,
                            oferecendo melhor custo-benefício e otimizando a estrutura de comunicação, hardware e software utilizados.
                        </span>
                        <SaibaMais onClick={goToNeoagro}>
                            Saiba Mais
                        </SaibaMais>
                    </Card>
                    <Card>
                        <h2>NEOAGRO SOLUTIONS</h2>
                        <span>Nosso sistema Neoagro está no mercado há mais de 30 anos solucionando e inovando em todas as formas.
                            Ajudamos a gerenciar sua TI com as melhores práticas do mercado, focando na continuidade do seu negócio,
                            oferecendo melhor custo-benefício e otimizando a estrutura de comunicação, hardware e software utilizados.
                        </span>
                        <SaibaMais onClick={goToSolutions}>
                            Saiba Mais
                        </SaibaMais>
                    </Card>
                </CardContainer>
            </Container>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary.light}, 
    #2a4f78,
    ${({ theme }) => theme.colors.primary.lighter}
  );
`

const Container = styled.div`
    width: 80%;
    padding-top: 20px;
    padding-bottom: 30px;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: ${({ theme }) => theme.colors.secondary.light};
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
    justify-content: center;
    gap: 100px;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Garante que o conteúdo e o botão fiquem separados */
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border-radius: 40px;
    padding: 20px 40px;
    width: 50%;
    min-width: 300px;
    max-width: 400px;

    h2 {
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.xmedium};
        margin-bottom: 20px;
        text-align: center;
    }

    span {
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.small};
        flex-grow: 1; /* Faz o conteúdo crescer se necessário */
    }

    @media(max-width: 768px) {
        width: 70%;
    }
`;


const SaibaMais = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 30%;
    height: 50px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.medium};
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