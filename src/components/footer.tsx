import styled from "styled-components";
import { Instagram, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <Container>
            <SocialMedia>
                <p>Redes Sociais</p>
                <Icons>
                    <a href="https://www.instagram.com/oberssistemas/" target="_blank">
                        <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/company/obers-solutions" target="_blank">
                        <Linkedin />
                    </a>
                </Icons>
            </SocialMedia>
            <Adress>
                <MapPin />
                <p>S2B Software <br></br>
                    R. Ver. Chico Filgueira, 33, Gabinete 12 - Sala 208
                    <br></br>
                    Caiçaras
                    <br></br>
                    38702-178 - Patos de Minas - MG
                    <br></br>
                    Fone: +55 (34) 3818-3800
                </p>
            </Adress>
        </Container >
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.primary.light};
`

const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        color: ${({ theme }) => theme.colors.secondary.lighter};
    }
`

const Icons = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    color: white;
`

const Adress = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.secondary.lighter};
    font-size: ${({ theme }) => theme.fonts.content};

    p {
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-weight: 400;
    }

`