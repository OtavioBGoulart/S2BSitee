import { Container, CardsContainer, ProductsContainer, Card, Header } from "../modules/buy";

export function TaxDep() {

    return (
        <Container>
            <Header>
                <h1>SubMódulo de Departamento Fiscal</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/taxDep-icons/xml.png" />
                        <span>Entrada de Notas Fiscais ou importação de XML</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/irrf.png" />
                        <span>Controle de Apuração IRRF e pagamentos a PF</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/guias.png" />
                        <span>Geração de Guias para Recolhimento</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/irrf.png" />
                        <span>Apuração do ICMS com as particularidades de Ajuste Fiscal</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/natureza-op.png" />
                        <span>Controle de Naturezas de Operação</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/gerar-nfe.png" />
                        <span>Geração de NFe de forma automática</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/xml.png" />
                        <span>Controle de Pagamentos a Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/gerar-sped.png" />
                        <span>Geração de arquivos SPED Fiscal / Contribuição PIS/COFINS </span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/lucro-presumido.png" />
                        <span>Controle e Apuração do Lucro Presumido</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/credito.png" />
                        <span>Controle de Crédito PIS/COFINS </span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/irrf.png" />
                        <span>Ajustes Fiscais para Apuração de Arquivos do SPED</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

