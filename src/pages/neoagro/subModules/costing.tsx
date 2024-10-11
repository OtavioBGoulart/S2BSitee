import { Container, CardsContainer, ProductsContainer, Card, Header } from "../modules/buy";

export function Costing() {


    return (
        <Container>
            <Header>
                <h1>SubMódulo Custeio</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/costing-icons/regras.png" />
                        <span>Definição de Regras de Apuração do Custeio</span>
                    </Card>
                    <Card>
                        <img src="/costing-icons/controle-rastreio.png" />
                        <span>Apuração e Controle do Rateio de Custo</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

