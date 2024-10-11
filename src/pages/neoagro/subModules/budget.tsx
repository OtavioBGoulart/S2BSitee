import { Container, CardsContainer, ProductsContainer, Card, Header } from "../modules/buy";

export function Budget() {

    return (
        <Container>
            <Header>
                <h1>SubMódulo Orçamento</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/budget-icons/cc.png" />
                        <span>Definição e Liberação de Centro de Custo por Conta Contábil</span>
                    </Card>
                    <Card>
                        <img src="/budget-icons/acompanhar-orc.png" />
                        <span>Geração de Acompanhamento de Orçamento</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

