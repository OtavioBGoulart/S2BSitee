import styled from "styled-components";
import { useNavigation } from "../hooks/useNavigation";

export function Navbar() {

    const { goToSolutions, goHome, goAbout, goToContacts } = useNavigation();

    return (
        <Container>
            <Header>
                <img src="/logos2b.svg" onClick={goHome} />
                <div>
                    <span onClick={goHome}>Home</span>
                    <span onClick={goToSolutions}>Soluções </span>
                    <span onClick={goAbout}>Sobre </span>
                    <span onClick={goToContacts}>Contato </span>
                </div>
            </Header>
        </Container>
    );
}

const Header = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
        height: 200px;
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: flex-end;
        gap: 20px; 
    }

    span {
    color:  ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    cursor: pointer;
   

    &:hover {
        color:  ${({ theme }) => theme.colors.primary.lighter};
        filter: brightness(100%);
    }
}

    @media (max-width: 900px) {
        width: 100%;
        justify-content: center;

        div {
            display: none;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 90px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary.light};
    padding: 10px 0;
    top: 0;
`;
