import { Link } from 'react-router-dom';
import '../../App.css'
function Login() {
    
    return (
        <div className="cadastro-container">
            <div className="cadastro-box">
                <h2>Cadastro</h2>
                <input
                    placeholder="Email*"
                    // value={email}
                    // onChange={(e) => setEmail(formatadores.email(e.target.value))}
                />
                <input
                    type="password"
                    placeholder="Senha*"
                    // value={senha}
                    // onChange={(e) => setSenha(e.target.value)}
                />
                <button>Cadastrar</button>

                {/* {msg && (
                    <p className="cadastro-msg" style={{ color: sucesso ? "green" : "red" }}>
                        {msg}
                    </p>
                )} */}
                <p>
                    Não possui uma conta? <Link to="/cadastro">Faça cadastro</Link>
                </p>
            </div>
        </div>
    )
}

export default Login