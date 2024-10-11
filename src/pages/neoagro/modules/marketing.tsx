import { Container, CardsContainer, ProductsContainer, Card, Header } from "./buy";

export function Marketing() {

    return (
        <Container>
            <Header>
                <h1>Módulo de Marketing</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/marketing-icons/mkt.png" />
                        <span>Acompanhamento de Clientes / Marketing</span>
                    </Card>

                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}
