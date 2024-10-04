import styled from "styled-components";

export function Products() {

    return (
        <Container>
            <Content>
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
    )
}


const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.lighter};
  display: flex;
  justify-content: center;
  padding: 20px 0;
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
`

const ListImageContainer = styled.div`
    display: flex;
    justify-content: start;

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

`

