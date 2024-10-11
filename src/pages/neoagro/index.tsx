import styled from "styled-components";
import { Modules } from "./modules";
import { useState } from "react";
import { CSubModules } from "./controllership-subModules";
import { AreasAtuação } from "./areas-atuação";
export function Neoagro() {

    const [module, setModule] = useState("module");
    return (
        <Container>
            <Title>
                <img src="/marca-images/neoagro.bmp" alt="Neoagro Logo" />
                <span>
                    O ERP neOagro é um software de gestão empresarial sob medida que atende às
                    todas as demandas gerenciais e operacionais de uma empresa. Contribuindo e
                    controlando com relatórios precisos e processos a sua evolução.
                </span>
            </Title>
            <AreasAtuação />

            {module === "module" ? (
                <Modules setModule={setModule} />
            ) : module === "subModules" ? (
                <CSubModules setModule={setModule} />
            ) : null}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 40px 0px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;

    img {
        width: 250px;
        height: 80px;
    }

    span {
        font-family: ${({ theme }) => theme.fonts.content};
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-size: ${({ theme }) => theme.fontSizes.xmedium};
        font-weight: 500;
        text-align: justify;
    }
`