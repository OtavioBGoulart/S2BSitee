import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Marketing() {

    return (
        <Container>
            <h1>Módulo de Marketing</h1>
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
