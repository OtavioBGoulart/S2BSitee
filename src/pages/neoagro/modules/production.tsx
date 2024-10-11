import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Production() {

    return (
        <Container>
            <h1>Módulo de Produção</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/software.png" />
                        <span>Controle de Contratos</span>
                    </Card>
                    <Card>
                        <img src="/iot.png" />
                        <span>Emissão de Etiquetas</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Controle Posição do Estoque</span>
                    </Card>
                    <Card>
                        <img src="/fita-metrica.png" />
                        <span>Controle Produção e Beneficiamento</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle Processo de Análise e Checagem</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle de Tickets de Entrada</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle de Passagem</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

