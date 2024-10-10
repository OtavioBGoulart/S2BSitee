import styled from "styled-components";
import { Modules } from "./modules";
import { useState } from "react";
import { CSubModules } from "./controllership-subModules";
export function Neoagro() {

    const [module, setModule] = useState("module");
    return (
        <Container>
            <Title>
                <img src="neoagro.png" alt="Neoagro Logo" />
                <span>
                    O ERP neOagro é um software de gestão empresarial sob medida que atende às
                    todas as demandas gerenciais e operacionais de uma empresa. Contribuindo e
                    controlando com relatórios precisos e processos a sua evolução.
                </span>
            </Title>

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
    padding: 40px 20px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;

    img {
        width: 250px;
        height: 100px;
    }
`