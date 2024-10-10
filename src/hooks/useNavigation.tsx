import { useNavigate } from "react-router-dom";

export function useNavigation() {
    const navigate = useNavigate();

    function goToContacts() {
        navigate("/contatos");
    }

    function goToSolutions() {
        navigate("/solucoes");
    }

    function goHome() {
        navigate("/");
    }

    function goAbout() {
        navigate("/sobre");
    }

    function goToNeoagro() {
        navigate("/neoagro");
    }

    function goTobuys() {
        navigate("/neoagro/compras");
    }

    function goToDistribution() {
        navigate("/neoagro/distribuicao");
    }

    function goToSalesManagement() {
        navigate("/neoagro/gerenciamento-de-vendas");
    }

    function goToAccounting() {
        navigate("/neoagro/controladoria/contabilidade");
    }

    function goToCredit() {
        navigate("/neoagro/controladoria/credito-e-cobranca");
    }


    function goToCosting() {
        navigate("/neoagro/controladoria/custeio");
    }


    function goToFinanceDepartament() {
        navigate("/neoagro/controladoria/departamento-financeiro");
    }


    function goToTaxDepartament() {
        navigate("/neoagro/controladoria/departamento-fiscal");
    }

    function goToBudget() {
        navigate("/neoagro/controladoria/orcamento");
    }

    function goToInvoicing() {
        navigate("/neoagro/faturamento");
    }

    function goToMarketing() {
        navigate("/neoagro/marketing");
    }

    function goToProduction() {
        navigate("/neoagro/producao");
    }

    function goToLab() {
        navigate("/neoagro/laboratorio");
    }


    return {
        goToContacts, goToSolutions, goHome, goAbout, goToNeoagro, goTobuys, goToDistribution, goToSalesManagement,
        goToAccounting, goToCredit, goToCosting, goToFinanceDepartament, goToTaxDepartament,
        goToBudget, goToInvoicing, goToMarketing, goToProduction, goToLab
    };
}
