import styled from "styled-components";
import { Dashboards } from "./dashboards";
import { Products } from "./products";

export function Solucoes() {
  return (
    <>
      <Header>
        <h1>Nossas Soluções</h1>
      </Header>
      <Container>
        <Content>
          {/* <CardsContainer>
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
          </CardsContainer> */}
          <TextContainer>
            <h2>Foco no cliente</h2>
            <span>Estamos sempre próximos dos nossos clientes, mantendo linhas de comunicação ágeis. Isso torna o processo de criação mais eficiente, permitindo que entreguemos soluções de forma rápida e eficaz.</span>
          </TextContainer>
          <TextContainer>
            <h2>Ambientes Exigentes</h2>
            <span>Desenvolvemos sistemas para empresas multinacionais no Brasil, utilizados por centenas de usuários, sempre em conformidade com as rigorosas exigências das auditorias internacionais.</span>
          </TextContainer>
          <TextContainer>
            <h2>Inovação</h2>
            <span>Acreditamos que, no agronegócio, assim como em qualquer setor, é essencial promover a transparência no processo produtivo. Isso é feito por meio do registro automático de dados com tecnologia inovadora (IoT), minimizando a interferência humana sempre que possível. Essa transparência e rastreabilidade são cruciais para compreender o processo e estabelecer pontos de medição eficazes.</span>
          </TextContainer>
        </Content>
      </Container>
      <Products />
      <Dashboards />
    </>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.lighter};
  display: flex;
  justify-content: center;
  padding: 0px 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondary.lighter};


  h1 {
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }


  @media (max-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.medium}; 
    }
  }
`

const Content = styled.div`
  max-width: 1200px;
  padding: 20px;
  line-height: 1.6;
  text-align: justify;

  h2 {
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }

  span {
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 300;
    display: block;
    margin-bottom: 20px;
  }

  br {
    margin-bottom: 20px;
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

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

