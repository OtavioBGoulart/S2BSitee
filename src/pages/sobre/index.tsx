import styled from "styled-components";

export function Sobre() {
  return (
    <Container>
      <Content>
        <h1>QUEM SOMOS?</h1>
        <span>
          A S2B Software possui mais de 30 anos de experiência em desenvolvimento de software e otimização de processos, com foco especial no agronegócio, utilizando tecnologia de ponta.
          <br /><br />
          Estamos sempre próximos dos nossos clientes, mantendo linhas de comunicação ágeis. Isso torna o processo de criação mais eficiente, permitindo que entreguemos soluções de forma rápida e eficaz.
          <br /><br />
          Desenvolvemos sistemas para empresas multinacionais no Brasil, utilizados por centenas de usuários, sempre em conformidade com as rigorosas exigências das auditorias internacionais.
          <br /><br />
          Acreditamos que, no agronegócio, assim como em qualquer setor, é essencial promover a transparência no processo produtivo. Isso é feito por meio do registro automático de dados com tecnologia inovadora (IoT), minimizando a interferência humana sempre que possível. Essa transparência e rastreabilidade são cruciais para compreender o processo e estabelecer pontos de medição eficazes.
          <br /><br />
          Adoramos simplificar o que parece ser complexo!
          <br /><br />
          Aqui estão os produtos que oferecemos:
        </span>
        <ul>
          <li>Sistema de Gestão para Agronegócio</li>
          <li>Consultoria em Análise e Melhoria de Processos</li>
          <li>Serviços de Consultoria e Soluções em Business Intelligence (BI)</li>
          <li>Serviços de Gerenciamento de TI em Geral</li>
        </ul>

      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.lighter};
  display: flex;
  justify-content: center;
  padding: 20px 20px;
`;

const Content = styled.div`
  max-width: 800px;
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

  span {
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
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
    margin-bottom: 20px;
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
