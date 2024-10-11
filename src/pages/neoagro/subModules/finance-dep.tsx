import { Container, CardsContainer, ProductsContainer, Card, Header } from "../modules/buy";



export function FinDep() {



    return (
        <Container>
            <Header>
                <h1>SubMódulo de Departamento Financeiro</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/finDep-icons/adiantamentos.png" />
                        <span>Controle de Adiantamentos Cliente/Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/recebimentos.png" />
                        <span>Controle Recebimento Clientes</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/titulos.png" />
                        <span>Controle de Títulos a Vencer e Vencidos</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/cheque-bancario.png" />
                        <span>Controle de Recebimentos em Cheques Pré-Datados</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/pagamento.png" />
                        <span>Geração de Arquivos para Pagamentos de Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/movimentacoes.png" />
                        <span>Controle das Movimentações Financeira e Bancárias</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/pagamento.png" />
                        <span>Controle de Pagamentos a Fornecedores</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/titulos.png" />
                        <span>Controle e Baixa de Recebimentos de Títulos de Clientes</span>
                    </Card>
                    <Card>
                        <img src="/finDep-icons/fatura.png" />
                        <span>Geração de Fatura de Várias Duplicatas</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

