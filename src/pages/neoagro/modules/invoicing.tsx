import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Invoicing() {

    return (
        <Container>
            <h1>Módulo de Faturamento</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/software.png" />
                        <span>Controle de Pedidos a Faturar</span>
                    </Card>
                    <Card>
                        <img src="/iot.png" />
                        <span>Emissão do Orçamento de Vendas</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Emissão de NFe</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Emissão de CTe</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Emissão de MDFe</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}
