import styled from "styled-components";

export function AreasAtuação() {

    return (
        <Container>
            <h1>Áreas de Atuação</h1>
            <ul>
                <li>Produtores Rurais</li>
                <li>Produtores de Sementes;</li>
                <li>Laboratório de Análise de Sementes (certificação de sementes e mudas);</li>
                <li>Cerealistas;</li>
                <li>Indústria de Nutrição Animal;</li>
                <li>Cooperativas;</li>
                <li>Indústria de Alimentos;</li>
                <li>Armazéns;</li>
                <li>Fazendas;</li>
                <li>Fábrica de Insumos e Adubos;;</li>
                <li>Defensivos Agrícolas;</li>
                <li>Comércio de Peças e Componentes Mecânicos (oficina em geral);</li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 15px;

    h1 {
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.content};
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-size: ${({ theme }) => theme.fontSizes.large};
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 40px;
        margin-top: 40px;
        padding-left: 20px;
    }

    li {
        width: 300px;
        font-family: ${({ theme }) => theme.fonts.content};
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
`