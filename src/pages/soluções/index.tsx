import styled from "styled-components";
import { Products } from "./products";

export function Solucoes() {
    return (
        <>
            <Container>
                <Content>
                    <h1>NOSSAS SOLUÇÕES</h1>
                    <CardsContainer>
                        <Card>
                            <h2>Integração</h2>
                            <img src="solutions.png" />
                        </Card>
                        <Card>
                            <h2>Segurança</h2>
                            <img src="security.png" />
                        </Card>
                        <Card>
                            <h2>Escalabilidade</h2>
                            <img src="scale.png" />
                        </Card>
                    </CardsContainer>
                    <TextContainer>
                        <h2>Foco no cliente</h2>
                        <span>Estamos sempre próximos dos nossos clientes, mantendo linhas de comunicação ágeis. Isso torna o processo de criação mais eficiente, permitindo que entreguemos soluções de forma rápida e eficaz.</span>
                    </TextContainer>
                    <TextContainer>
                        <h2>Embientes Exigentes</h2>
                        <span>Desenvolvemos sistemas para empresas multinacionais no Brasil, utilizados por centenas de usuários, sempre em conformidade com as rigorosas exigências das auditorias internacionais.</span>
                    </TextContainer>
                    <TextContainer>
                        <h2>Inovação</h2>
                        <span>Acreditamos que, no agronegócio, assim como em qualquer setor, é essencial promover a transparência no processo produtivo. Isso é feito por meio do registro automático de dados com tecnologia inovadora (IoT), minimizando a interferência humana sempre que possível. Essa transparência e rastreabilidade são cruciais para compreender o processo e estabelecer pontos de medição eficazes.</span>
                    </TextContainer>
                    <h1>Nossos Produtos</h1>
                    <ListImageContainer>
                        <ul>
                            <li>Sistema de Gestão para Agronegócio (neOagro)</li>
                            <li>Inovação Agro IoT</li>
                            <li>Serviços de Consultoria e Soluções em Business Intelligence (BI)</li>
                            <li>Desenvolvimento de soluções  sob medida</li>
                            <li>Consultoria em Análise e Melhoria de Processos</li>
                            <li>Serviços de Gerenciamento de TI em Geral</li>
                        </ul>
                    </ListImageContainer>
                </Content>
            </Container>
        </>
    );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.lighter};
  display: flex;
  justify-content: center;
  padding: 20px 20px;
`;

const Content = styled.div`
  max-width: 1200px;
  padding: 20px;
  line-height: 1.6;
  text-align: justify;
  

  h1 {
    color: ${({ theme }) => theme.colors.primary.light};
    font: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-bottom: 20px;
    text-align: center;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }

  span {
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 300;
    display: block;
    margin-bottom: 20px;
  }

  br {
    margin-bottom: 20px;
  }

  ul {
    margin-top: 25px;
    list-style-type: disc;
    padding-left: 20px;
  }

 li {
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
    font-weight: bolder;
 }


  @media (max-width: 768px) {
    max-width: 90%;
    padding: 10px;

    h1 {
      font-size: ${({ theme }) => theme.fontSizes.medium}; 
    }

    span {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    @media (max-width: 480px) {

    h1 {
      font-size: ${({ theme }) => theme.fontSizes.small}; 
    }

    span {
      font-size: 14px; 
    }
  }

  }
`;


const Card = styled.div`
    width: 30%;
    height: auto;
    max-height: 350px;
    padding: 10px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: transform 0.2 ease-in-out, box-shadow 0.2 ease-in-out;

    img {
        width: 60%;
    }

    @media (max-width: 900px) {
        width: 100%;
    };

    
`

const CardsContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    margin: 30px auto;
    /* border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.secondary.light}; */
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 15px
    };
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

const ListImageContainer = styled.div`
    display: flex;
    justify-content: start;
`