import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


export function ContatcForm() {
    const initialFormData = {
        name: '',
        company: '',
        email: '',
        phone: '',
        found: '',
        subject: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.company || !formData.email || !formData.message || !formData.phone) {
            alert("Preencha todos os campos")
        }

        const templateParams = {
            from_name: formData.name,
            company: formData.company,
            subject: formData.subject,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        }

        emailjs.send("service_fqyt8tr", "template_hf0o8gi", templateParams, "XVB4_Z3OtWYzK_PnX")
            .then((res) => {
                console.log("Email enviado", res.status, res.text)
                setFormData(initialFormData)
            })
            .catch((error) => console.log(error))
    };

    return (
        <Container>
            <FormContainer>
                <FormTitle>Contato</FormTitle>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <FormWrapper>
                        <LeftContainer>
                            <FormField>
                                <Label htmlFor="name">Nome</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete='off'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <Label htmlFor="company">Empresa</Label>
                                <Input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </FormField>
                            <FormField>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <Label htmlFor="phone">Telefone de Contato</Label>
                                <Input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </FormField>
                        </LeftContainer>
                        <RightContainer>
                            {/* Últimos três campos à direita */}
                            <FormField>
                                <Label htmlFor="found">Onde nos encontrou?</Label>
                                <Select
                                    id="found"
                                    name="found"
                                    value={formData.found}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="google">Google</option>
                                    <option value="indicacao">Indicação</option>
                                    <option value="redes sociais">Redes Sociais</option>
                                    <option value="outro">Outro</option>
                                </Select>
                            </FormField>
                            <FormField>
                                <Label htmlFor="subject">Assunto</Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </FormField>
                        </RightContainer>
                    </FormWrapper>
                    <ButtonContainer style={{ width: '100%' }}>
                        <Button type="submit">Enviar</Button>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </Container>
    );
};


const Container = styled.div`
    height: auto; 
    width: 100%;
    display: flex;
    padding: 20px 20px;
    box-sizing: border-box;
    background-color: #003c5d; 
`

const FormContainer = styled.div`
  width: 80%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    };
`;

const FormWrapper = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003c5d; 
  box-sizing: border-box;
  margin-bottom: 20px;


  @media (max-width: 768px) {
       flex-direction: column;
    };
`;

const LeftContainer = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RightContainer = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const FormTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #fff; 
  margin-bottom: 30px;
`;

const FormField = styled.div`
  width: 80%; 
  margin-bottom: 15px;

  button {
    width: 30%;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: white; /* Cor do texto em branco */
`;

const Input = styled.input`
  width: 100%;
  border: none; /* Remove a borda padrão */
  border-bottom: 2px solid white; /* Linha branca na parte inferior */
  padding: 8px 0; /* Ajusta o padding */
  outline: none; /* Remove o contorno padrão ao focar */
  color: white; /* Cor do texto em branco */
  background-color: transparent; /* Fundo transparente */
  transition: border-bottom-color 0.3s;

  &:focus {
    border-bottom: 2px solid #007bff; /* Muda a cor da linha ao focar */
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #003c5d inset !important;
    -webkit-text-fill-color: white !important; /* Força a cor do texto */
}
`;

const Textarea = styled.textarea<{ rows?: number }>`
  width: 100%;
  border: none; /* Remove a borda padrão */
  border-bottom: 2px solid white; /* Linha branca na parte inferior */
  padding: 8px 0; /* Ajusta o padding */
  resize: none; /* Impede redimensionamento */
  outline: none; /* Remove o contorno padrão ao focar */
  color: white; /* Cor do texto em branco */
  background-color: transparent; /* Fundo transparente */
  transition: border-bottom-color 0.3s;

  &:focus {
    border-bottom: 2px solid #2088c0; /* Muda a cor da linha ao focar */
  }
`;

const Select = styled.select`
  width: 100%;
  border: none; /* Remove a borda padrão */
  border-bottom: 2px solid white; /* Linha branca na parte inferior */
  padding: 8px 0; /* Ajusta o padding */
  outline: none; /* Remove o contorno padrão ao focar */
  color: white; /* Cor do texto em branco */
  background-color: #003c5d; /* Fundo transparente */
  transition: border-bottom-color 0.3s;

  &:focus {
    border-bottom: 2px solid white; /* Muda a cor da linha ao focar */
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Button = styled.button`
  width: 30%;
  padding: 10px;
  border-radius: 8px ;
  background-color: white;
  color: #003c5d;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.0rem;

  &:hover {
    background-color: #2088c0;
    color: white;
  }
`;


