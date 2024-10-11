import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Distribution() {

    return (
        <Container>
            <h1>Módulo de distribuição</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/distribuition_icons/montagem-cargas.png" />
                        <span>Montagem de Carga</span>
                    </Card>
                    <Card>
                        <img src="/distribuition_icons/cadastro-cargas.png" />
                        <span>Cadastro de Veículos e Controle de Frota</span>
                    </Card>
                    <Card>
                        <img src="/distribuition_icons/entrega-cargas.png" />
                        <span>Controle de Entrega de Carga</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

