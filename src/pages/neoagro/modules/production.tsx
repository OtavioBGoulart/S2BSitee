import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Production() {

    return (
        <Container>
            <h1>Módulo de Produção</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/producao-icons/contrato.png" />
                        <span>Controle de Contratos</span>
                    </Card>
                    <Card>
                        <img src="/producao-icons/etiqueta.png" />
                        <span>Emissão de Etiquetas</span>
                    </Card>
                    <Card>
                        <img src="/producao-icons/controle-pos-estoque.png" />
                        <span>Controle Posição do Estoque</span>
                    </Card>
                    <Card>
                        <img src="/producao-icons/controle-producao.png" />
                        <span>Controle Produção e Beneficiamento</span>
                    </Card>
                    <Card>
                        <img src="/producao-icons/controle-de-qualidade.png" />
                        <span>Controle Processo de Análise e Checagem</span>
                    </Card>
                    <Card>
                        <img src="/producao-icons/ticket.png" />
                        <span>Controle de Tickets de Entrada</span>
                    </Card>
                    <Card>
                        <img src="/producao-icons/controle-pass.png" />
                        <span>Controle de Passagem</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

