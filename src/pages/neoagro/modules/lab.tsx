import { Container, CardsContainer, ProductsContainer, Card } from "./buy";

export function Lab() {

    return (
        <Container>
            <h1>Módulo de laboratório</h1>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/lab-icons/garantia.png" />
                        <span>Controle Atestado de Garantia</span>
                    </Card>
                    <Card>
                        <img src="/lab-icons/boletim-analise.png" />
                        <span>Controle Boletim de Análise</span>
                    </Card>
                    <Card>
                        <img src="/lab-icons/analise-produto.png" />
                        <span>Ficha de Análise de Produto</span>
                    </Card>
                    <Card>
                        <img src="/lab-icons/qualidade.png" />
                        <span>Controle de Qualidade do Produto</span>
                    </Card>
                    <Card>
                        <img src="/lab-icons/teste.png" />
                        <span>Testes avulsos de Laboratório</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

