import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import styled from "styled-components";
import { useScrolltop } from "../hooks/useScrollTop";

export function Layout() {
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