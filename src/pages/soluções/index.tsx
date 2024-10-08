import styled from "styled-components";

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
            <h2>Embientes Exigentes</h2>
            <span>Desenvolvemos sistemas para empresas multinacionais no Brasil, utilizados por centenas de usuários, sempre em conformidade com as rigorosas exigências das auditorias internacionais.</span>
          </TextContainer>
          <TextContainer>
            <h2>Inovação</h2>
            <span>Acreditamos que, no agronegócio, assim como em qualquer setor, é essencial promover a transparência no processo produtivo. Isso é feito por meio do registro automático de dados com tecnologia inovadora (IoT), minimizando a interferência humana sempre que possível. Essa transparência e rastreabilidade são cruciais para compreender o processo e estabelecer pontos de medição eficazes.</span>
          </TextContainer>
          <Products>
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
          </Products>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary.light};


  h1 {
    color: ${({ theme }) => theme.colors.secondary.lighter};
    font: ${({ theme }) => theme.fonts.main};
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
    color: ${({ theme }) => theme.colors.primary.light};
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
    background-color: ${({ theme }) => theme.colors.secondary.light};
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

const Products = styled.div`
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

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

const ListImageContainer = styled.div`
    display: flex;
    justify-content: start;
`
