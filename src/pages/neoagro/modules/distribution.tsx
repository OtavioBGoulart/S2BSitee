import { Container, CardsContainer, ProductsContainer, Card, Header } from "./buy";

export function Distribution() {

    return (
        <Container>
            <Header>
                <h1>Módulo de distribuição</h1>
            </Header>
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

