import styled from "styled-components";
import { useNavigation } from "../../hooks/useNavigation";

export function Products() {

    const { goToNeoagro } = useNavigation()
    return (
        <Div>
            <Container>
                <h1>Produtos</h1>
                <CardContainer>
                    <Card>
                        <h2>Sistema ERP NEOAGRO</h2>
                        <span>Ajudamos a gerenciar sua TI com as melhores práticas do mercado, focando na continuidade do seu negócio,
                            oferecendo melhor custo-benefício e otimizando a estrutura de comunicação, hardware e software utilizados.
                        </span>
                        <SaibaMais onClick={goToNeoagro}>
                            Saiba Mais
                        </SaibaMais>
                    </Card>
                    <Card>
                        <h2>Busniness Inteligence</h2>
                        <span>Transformar dados em insights estrategicas a nossa proposta. Com isto sua empresa pode tomar decsões Com a realidade muitas vezes complexa,
                            somos especialistas em otimizar a coleta e análise de dados, convertendo a sua empresa em uma empresa inteligente!
                        </span>
                        <SaibaMais>
                            Saiba Mais
                        </SaibaMais>
                    </Card>
                    <Card>
                        <h2>Gerenciamento TI</h2>
                        <span>Ajudamos a gerenciar sua TI com as melhores práticas do mercado, focando na continuidade do seu negócio,
                            oferecendo melhor custo-benefício e otimizando a estrutura de comunicação, hardware e software utilizados.
                        </span>
                        <SaibaMais>
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
    /* background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.terciary.light}, 
    ${({ theme }) => theme.colors.terciary.lighter}
  );  */
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
        color: ${({ theme }) => theme.colors.secondary.lighter};
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        font-family: ${({ theme }) => theme.fonts.main};
        font-weight: 800;
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
    flex-wrap: wrap;
    gap: 100px;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border: 3px solid ${({ theme }) => theme.colors.secondary.light};
    border-radius: 40px;
    padding: 20px 40px;
    width: 400px;
    height: auto;
    transition: transform 0.2s ease-in-out box-shadow 0.2s ease-in-out;

    h2 {
        color: ${({ theme }) => theme.colors.primary.light};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.xmedium};
        margin-bottom: 20px;
        text-align: center;
    }

    span {
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.small};
        flex-grow: 1;
    }

    &:hover {
        transform: translateY(-20px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }

    @media(max-width: 768px) {
        width: 90%;
    }
`

const SaibaMais = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 50%;
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
`