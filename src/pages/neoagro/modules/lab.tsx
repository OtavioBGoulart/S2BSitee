import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Lab() {

    return (
        <Container>
            <h1>Módulo de laboratório</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/software.png" />
                        <span>Controle Atestado de Garantia</span>
                    </Card>
                    <Card>
                        <img src="/iot.png" />
                        <span>Controle Boletim de Análise</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Ficha de Análise de Produto</span>
                    </Card>
                    <Card>
                        <img src="/fita-metrica.png" />
                        <span>Controle de Qualidade do Produto</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Testes avulsos de Laboratório</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

