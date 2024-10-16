import styled from "styled-components";
import { useNavigation } from "../hooks/useNavigation";
import { useState } from "react";
import { Menu } from "lucide-react";

type SubmenuType = "solutions" | "about" | "contacts" | "mobile" | null;
type PathType = "home" | "ERP" | "BI" | "sobre" | "contato" | null;

export function Navbar() {
    const { goToSolutions, goHome, goAbout, goToContacts, goToNeoagro } = useNavigation();
    const [openSubmenu, setOpenSubmenu] = useState<SubmenuType>(null);

    function handleSubmenuToggle(menu: SubmenuType) {
        setOpenSubmenu(menu === openSubmenu ? null : menu);
    };

    function goTopath(path: PathType) {

        if (path === "home") {
            goHome();
        }

        if (path === "ERP") {
            goToNeoagro();
        }

        if (path === "BI") {
            goToSolutions();
        }

        if (path === "sobre") {
            goAbout();
        }

        if (path === "contato") {
            goToContacts();
        }

        setOpenSubmenu(null);
    }

    return (
        <Container>
            <Header>
                <img src="/marca-images/logos2b.svg" onClick={goHome} />
                <div>
                    <NavItem onClick={goHome}>Home</NavItem>

                    {/* Soluções com submenu */}
                    <NavItem
                        onMouseEnter={() => handleSubmenuToggle("solutions")}
                        onMouseLeave={() => setOpenSubmenu(null)}
                    >
                        Soluções
                        {openSubmenu === "solutions" && (
                            <Submenu>
                                <SubmenuItem onClick={goToNeoagro}>
                                    ERP Neoagro
                                </SubmenuItem>
                                <SubmenuItem onClick={goToSolutions}>
                                    Business Intelligence
                                </SubmenuItem>
                                <SubmenuItem onClick={goToSolutions}>
                                    Gerenciamento TI
                                </SubmenuItem>
                            </Submenu>
                        )}
                    </NavItem>

                    <NavItem onClick={goAbout}>Sobre</NavItem>
                    <NavItem onClick={goToContacts}>Contato</NavItem>
                </div>
            </Header>

            {/* Ícone do menu mobile */}
            <MenuItem>
                <Menu onClick={() => handleSubmenuToggle("mobile")} />
                {openSubmenu === "mobile" && (
                    <MobileMenu>
                        <SubmenuItem onClick={() => goTopath("home")}>Home</SubmenuItem>
                        <SubmenuItem onClick={() => goTopath("ERP")}>ERP Neoagro</SubmenuItem>
                        <SubmenuItem onClick={() => goTopath("BI")}>Business Intelligence</SubmenuItem>
                        <SubmenuItem onClick={() => goTopath("sobre")}>Sobre</SubmenuItem>
                        <SubmenuItem onClick={() => goTopath("contato")}>Contato</SubmenuItem>
                    </MobileMenu>
                )}
            </MenuItem>
        </Container>
    );
}

const Header = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

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

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;

        div {
            display: none;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary.light};
    padding: 10px 0;
    top: 0;
    margin: 0; /* Garante que não tenha margens */
    position: relative; /* Para o posicionamento do menu mobile */
`;

const NavItem = styled.span`
    position: relative;
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary.lighter};
        filter: brightness(100%);
    }
`;

const Submenu = styled.div`
    position: absolute;
    top: 100%; 
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const SubmenuItem = styled.span`
    color: ${({ theme }) => theme.colors.secondary.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary.light};
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.primary.light};
    }
`;

const MenuItem = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        font-size: 1.5rem;
        cursor: pointer;
    }

    svg {
        width: 30px;    
        height: 30px;
        fill: ${({ theme }) => theme.colors.primary.light};
    }
`;

// Submenu para dispositivos móveis
const MobileMenu = styled.div`
    position: absolute;
    top: 20;
    right: 15px;
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 200px;
`;
