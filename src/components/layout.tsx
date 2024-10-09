import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useScroll } from "../hooks/useRef";
import styled from "styled-components";
import { useScrolltop } from "../hooks/useScrollTop";
import { Form } from "./form";

export function Layout() {
    const { contatosRef } = useScroll();
    useScrolltop();


    return (
        <div>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    );
}

const Main = styled.div`
    width: 100%;
`