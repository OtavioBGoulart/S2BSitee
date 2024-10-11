import { Container, CardsContainer, ProductsContainer, Card, Header } from "../modules/buy";



export function Accounting() {


    return (
        <Container>
            <Header>
                <h1>SubMódulo de Contabilidade</h1>
            </Header>
            <ProductsContainer>
                <CardsContainer>
                    <Card>
                        <img src="/accounting-icons/lancamentos-contabeis.png" />
                        <span>Lançamentos Contábeis (Manual e Automático)</span>
                    </Card>
                    <Card>
                        <img src="/accounting-icons/depreciacao.png" />
                        <span>Controle Depreciação Imobilizado</span>
                    </Card>
                    <Card>
                        <img src="/accounting-icons/encerramento-exercicio.png" />
                        <span>Encerramento Exercício Mensal/Trimestral ou Anual</span>
                    </Card>
                    <Card>
                        <img src="/accounting-icons/sped.png" />
                        <span>Apuração do SPED Contábil</span>
                    </Card>
                    <Card>
                        <img src="/accounting-icons/importacao-pag-terc.png" />
                        <span>Importação arquivos de Folhas de Pgamento de Terceiros</span>
                    </Card>
                    <Card>
                        <img src="/accounting-icons/tipo-mov.png" />
                        <span>Gestão de Périodos por Tipo de Movimentação </span>
                    </Card>
                    <Card>
                        <img src="/accounting-icons/integracao-contabil.png" />
                        <span>Integração contábil de forma automática</span>
                    </Card>
                </CardsContainer>
            </ProductsContainer>
        </Container>
    )
}

