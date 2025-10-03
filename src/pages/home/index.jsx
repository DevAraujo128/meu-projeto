import CarrosselServicos from '../../componentes/carrosselServicos'
import { Link } from 'react-router-dom';
import '../../App.css'
function Home() {
    
    return (
        <div className="container">
            <header>
                <nav>
                    <img src="src/assets/logo.png" alt="logo" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <div className='container-buttons'>
                        <button>Entrar</button>
                    <Link to="/cadastro">
                        <button>Cadastrar</button>
                    </Link>
                    </div>
                </nav>
            </header>

            <section className='section-servicos'>
                <CarrosselServicos />
            </section>
            <section className='about'>
                <div className='about-text'>
                    <h1>Contrate o Serviço que <span> voce precisar!</span> </h1>
                    <p>Conecte-se com profissionais qualificados para cuidar do seu lar ou negócio.
                        Aqui você encontra serviços ótimos serviços. Contrate com praticidade, segurança e rapidez!</p>
                </div>
                <img src="src/assets/servicos.jpg" alt="" />
            </section>
            <section className='about'>
                <img src="src/assets/empresa.jpg" alt="" />
                <div className='about-text'>
                    <h1>Sobre <span>Nossa Empresa</span></h1>
                    <p>Somos uma empresa especializada em prestar todo tipo de serviço, desde manutenção, reparos, consultoria e instalações, até soluções personalizadas para empresas e residências. Trabalhamos com profissionais qualificados, garantindo qualidade, agilidade e confiança em cada projeto.</p>
                </div>
            </section>
            <footer>
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>Redes Sociais</h3>
                        <a href="https://www.instagram.com">Instagram</a>
                        <a href="https://www.linkedin.com">LinkedIn</a>
                    </div>
                    <div class="footer-column">
                        <h3>Contato</h3>
                        <a href="https://wa.me/5511999999999">WhatsApp</a>
                        <p>Email: contato@devservicos.com</p>
                    </div>
                    <div class="footer-column">
                        <h3>Endereço</h3>
                        <p>Rua Exemplo, 123</p>
                        <p>Cidade, Estado</p>
                    </div>
                </div>
                <p class="footer-bottom">© Desenvolvido por DevServiços</p>
            </footer>
        </div>

    )
}

export default Home