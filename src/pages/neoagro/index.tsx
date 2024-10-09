import styled from "styled-components";

export function Neoagro() {

    return (
        <Container>
            <Title>
                <img src="neoagro.png" />
                <span>O ERP neOagro é um software de gestão empresarial sob medida que atende à todas as demandas gerenciais e operacionais de uma empresa. Contribuindo e controlando com relatórios precisos e processos a sua evolução.</span>
            </Title>
            <ul>
                <li>Credito e Cobrança</li>
                <li>CRM (Marketing)</li>
                <li>Financeiro</li>
                <li>Vendas</li>
                <li>Faturamento</li>
                <li>Fiscal</li>
                <li>Contábil</li>
                <li>Recursos Humanos</li>
                <li>Gestão de Custos (ABC)</li>
                <li>Gestão de Ativos</li>
                <li>Trading;Originação</li>
                <li>Planejamento e Controle de Produção</li>
                <li>Troca (Barter)</li>
                <li>Logística</li>
                <li>Gestão de Frota</li>
                <li>Gestão de Qualidade e Laboratório</li>
                <li>Auditoria e Gerência de Sistema e' Segurança</li>
                <li>Oficina</li>
                <li>Mobilidade</li>
                <li>Business Intelligence</li>
                <li>Intergração com sistemas de terceiros</li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 40px 20px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 15px;

    img {
        width: 250px;
        height: 100px;
    }
`