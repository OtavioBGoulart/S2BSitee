import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function SalesManagement() {

    return (
        <Container>
            <h1>Módulo de Gerenciamento de Vendas</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/software.png" />
                        <span>Cadastro de Clientes/Trasnportador/Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/iot.png" />
                        <span>Controle de Ordem de Carregamento</span>
                    </Card>
                    <Card>
                        <img src="/business-intelligence.png" />
                        <span>Controle de Pedido de Vendas</span>
                    </Card>
                    <Card>
                        <img src="/fita-metrica.png" />
                        <span>Controle de Comissão</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle de Cotas</span>
                    </Card>
                    <Card>
                        <img src="/melhoria.png" />
                        <span>Controle Representante Comercial</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

