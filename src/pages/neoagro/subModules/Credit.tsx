import { Container, CardsContainer, ProductsContainer, Card, Header } from "../modules/buy";

export function Credit() {


    return (
        <Container>
            <Header>
                <h1>SubMódulo de Credito e Cobrança</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/finDep-icons/fatura.png" />
                        <span>Controle da Posição Financeira do Cliente</span>
                    </Card>
                    <Card>
                        <img src="/credit-icons/boleto.png" />
                        <span>Envio de Remessas Bancárias de Boletas</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/baixa-rec.png" />
                        <span>Impportação de Arquivos de Remessa</span>
                    </Card>
                    <Card>
                        <img src="/credit-icons/restricao.png" />
                        <span>Controle Restrição do Cliente</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/credito.png" />
                        <span>Acompanhamento do Crédito</span>
                    </Card>
                    <Card>
                        <img src="/taxDep-icons/credito.png" />
                        <span>Análise e Aprovação do Crédito para o cliente</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

