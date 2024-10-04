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

    return { goToContacts, goToSolutions, goHome, goAbout };
}
