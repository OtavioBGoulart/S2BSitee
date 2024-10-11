import styled from "styled-components";
import { Instagram, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <Container>
            <FooterContainer>
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
            </FooterContainer>
        </Container >
    );
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary.light};
`

const FooterContainer = styled.div`
    width: 80%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto ;

    @media( max-width: 768px) {
        height: auto;
    }
`

const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        font-family: ${({ theme }) => theme.fonts.heading};
        font-size: ${({ theme }) => theme.fontSizes.xmedium};
        color: ${({ theme }) => theme.colors.primary.light};
        font-weight: 550;
    }

    @media( max-width: 768px) {
        
        
        p {
            font-size: ${({ theme }) => theme.fontSizes.small};
        }
    }
`

const Icons = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    color: ${({ theme }) => theme.colors.primary.light};
`

const Adress = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.primary.light};
    font-family: ${({ theme }) => theme.fonts.heading};

    p {
        font-size: ${({ theme }) => theme.fontSizes.xmedium};
        font-weight: 550;
    }

    @media( max-width: 768px) {
        
        
        p {
            font-size: ${({ theme }) => theme.fontSizes.small};
        }
    }

`