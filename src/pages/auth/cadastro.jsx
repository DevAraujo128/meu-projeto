import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../App.css'

function Cadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    // const [msg, setMsg] = useState("");
    // const [sucesso, setSucesso] = useState(false); // <-- Novo estado

    return (
        <div className="cadastro-container">
            <div className="cadastro-box">
                <h2>Cadastro</h2>
                <input
                    type="text"
                    placeholder="Nome *"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    placeholder="Sobrenome *"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                />
                <input
                    placeholder="CPF*"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    maxLength="14"
                />
                <input
                    placeholder="Celular*"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    maxLength="15"
                />
                <input
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha *"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button onClick={(e) => setSenha(e.target.value)}>Cadastrar</button>

                {/* {msg && (
                    <p className="cadastro-msg" style={{ color: sucesso ? "green" : "red" }}>
                        {msg}
                    </p>
                )} */}

                <p>
                    Já tem uma conta? <Link to="/login">Faça login</Link>
                </p>
            </div>
        </div>
    )
}

export default Cadastro