import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth';

function FormLogin() {
    const { signIn } = useContext(AuthContext);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = ({target}) => {
        const { id, value } = target;

        console.log({ [id]: value });
        setForm({ ...form, [id]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn();
    }

    return(
        <Form onSubmit={handleSubmit}>
        <div className="inputs-container">
            <Form.Group>
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control type="text" value={form.username} placeholder="Digite seu e-mail" id="username" onChange={handleChange} required/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="senha">Senha</Form.Label>
                <Form.Control type="password" value={form.password} placeholder="Senha" id="password" onChange={handleChange}autoComplete="current-password" required/>
                <br></br><p>Se você já é um mediador faça login, ou então </p>
                <p><a href="/cadastro-mediador" to="/cadastro-mediador">Cadastre-se</a></p>
            </Form.Group>
        </div>
        <Button className="button-enviar" type="submit">
            Entrar
        </Button>
    </Form>
    )
}

export default FormLogin;