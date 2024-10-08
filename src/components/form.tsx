import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal'
import { X } from 'lucide-react';

Modal.setAppElement('#root');

export function Form() {
    const customStyles = {
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            width: '90%',
            maxWidth: '350px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            gap: '25px',
            background: '#003c5d',
            borderRadius: '20px',
            transform: 'translate(-50%, -50%)',
        },

        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
    };

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
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function closeModal() {
        setModalIsOpen(false)
    }

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
            .then(() => {
                setFormData(initialFormData)
                setModalIsOpen(true)
            })
            .catch((error) => console.log(error))
    };

    return (
        <>
            <Container>
                <FormContainer>
                    <FormTitle>Contato</FormTitle>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <FormWrapper>
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
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </FormField>
                        </FormWrapper>
                        <ButtonContainer>
                            <Button type="submit">Enviar</Button>
                        </ButtonContainer>
                    </form>
                </FormContainer>
            </Container>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmação de Envio de Email"
                style={customStyles}
            >
                <ModalTitle>Email enviado com sucesso!</ModalTitle>
                <X style={{ color: 'white', cursor: 'pointer' }} onClick={closeModal} />
            </Modal>
        </>
    );
};


const Container = styled.div`
    height: auto; 
    width: 100%;
    display: flex;
    padding: 20px 20px;
    box-sizing: border-box;
    background-color: #f5f1f1; 
`

const FormContainer = styled.div`
  width: 80%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px;

  @media (max-width: 900px) {
    width: 100%;
    };
`;

const FormWrapper = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px ;
  row-gap: 30px;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 20px;

  input, text-area, select {
    border-radius: 5px;
    border: 1px solid #003c5d;
 

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #003c5d !important; 
  }
  }


  @media (max-width: 900px) {
       flex-direction: column;
    };
`;

const FormTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.content};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.light}; 
  margin-bottom: 50px;
`;

const FormField = styled.div`
  width: 40%; 
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #003c5d;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 4px; 
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #003c5d; 
  background-color: white; 
  transition: border-bottom-color 0.3s;

`;

const Textarea = styled.textarea<{ rows?: number }>`
  width: 100%;
  padding: 8px 4px; 
  border-radius: 5px;
  resize: none; 
  color: #003c5d;
  background-color: white; 
  transition: border-bottom-color 0.3s;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 0; 
  color: #003c5d; 
  background-color: white; 
  transition: border-bottom-color 0.3s;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Button = styled.button`
  width: 30%;
  padding: 10px;
  border-radius: 8px ;
  background-color: #e2dfdf;
  color: #003c5d;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.0rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #003c5d;
    color: white;
  }
`;

const ModalTitle = styled.h1`
  font-size: 1.0rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: white;
`

