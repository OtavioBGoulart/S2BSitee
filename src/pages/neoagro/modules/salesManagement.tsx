import { Container, CardsContainer, ProductsContainer, Card, Header } from "./buy";

export function SalesManagement() {

    return (
        <Container>
            <Header>
                <h1>Módulo de Gerenciamento de Vendas</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/salesManager-icons/cadastro.png" />
                        <span>Cadastro de Clientes/Trasnportador/Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/salesManager-icons/ordem-carregamentos.png" />
                        <span>Controle de Ordem de Carregamento</span>
                    </Card>
                    <Card>
                        <img src="/salesManager-icons/controle-ped-vendas.png" />
                        <span>Controle de Pedido de Vendas</span>
                    </Card>
                    <Card>
                        <img src="/salesManager-icons/comissao.png" />
                        <span>Controle de Comissão</span>
                    </Card>
                    <Card>
                        <img src="/salesManager-icons/controle-cotas.png" />
                        <span>Controle de Cotas</span>
                    </Card>
                    <Card>
                        <img src="/salesManager-icons/vendedor.png" />
                        <span>Controle Representante Comercial</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

