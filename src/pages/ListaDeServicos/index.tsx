import imgLogo from "../../assets/imagens/img/logo.svg";
import imgClientes from "../../assets/imagens/clientes.png";
import maosDev from "../../assets/imagens/maos_dev.png";
import alfinete from "../../assets/imagens/alfinete.png";
import imgDev from "../../assets/imagens/dev.png";
import imgLogrodape from "../../assets/imagens/logo.svg";
import imgfacebook from "../../assets/imagens/facebook.svg";
import imginstatagram from "../../assets/imagens/instagram.svg";
import imglinkedin from "../../assets/imagens/linkedin.svg";

function ListaDeServisos(){
    let menu: any = document.getElementById("menu_links") ; // Obtém o elemento do menu pelo ID
    let sombra: any= document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras:any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    let body = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

    function mostrarMenu() {
        if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
            menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
            sombra.style.right = "-10vw"; // Move a sombra para a direita
            menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
            menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
            body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
        } else {
            menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
            sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
            menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
            menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
            body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
        }
        menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
    }
    return (
        <div>
            <div id="sombra"></div>
            <header>
                <div className="container header_conteudo">

                    <a className="menu_barras" id="menu_barras" aria-label="abrir menu" aria-expanded="false" aria-controls="menu_links" aria-haspopup="true" onClick={mostrarMenu} href="#"><div className="barra"></div></a>
                    <img className="header_logo" src={imgLogo} alt="" />
                    <nav>
                        <div id="menu_links" className="menu_links">
                            <a href="../Home/index.html">home</a>
                            <a href="#">serviços</a>
                            <a href="../CadastroDev/index.html">cadastro</a>
                        </div>
                        <a className="header_icone_login" href="../Login/index.html">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">

                            </svg>
                        </a>
                        <a className="header_botao_login" href="../Login/index.html">login</a>
                    </nav>
                </div>
            </header>
            <main id="main">
                <h1>página inicial VSconnect</h1>
                <section className="banner">
                    <div className="banner_conteudo">
                        <span className="banner_slogan_l1">VSConnect</span>
                        <p className="banner_slogan_l2">Conectando os melhores desenvolvedores independentes às mais diversas
                            oportunidades.</p>
                        <p className="banner_slogan_l3">Conecte-se e comece a desvendar esse mundo!</p>
                        <div className="banner_botoes">
                            <a className="botao banner_botao_dev" href="#">desenvolvedor</a>
                            <a className="botao banner_botao_cli" href="#">cliente</a>
                        </div>
                    </div>
                </section>
                <section className="container para_clientes">
                    <div className="span_cliente">
                        <p>Desde 2015 unindo propósitos.<br />Uma nova forma de conectar pessoas.</p>
                    </div>
                    <div className="clientes_conteudo">
                        <img src={imgClientes} alt="" />
                        <div className="clientes_texto">
                            <h2>para clientes</h2>
                            <ul>
                                <li>cadastrar serviços</li>
                                <li>procurar por desenvolvedores</li>
                            </ul>
                            <div>
                                <a className="botao clientes_botao_cli" href="#">criar conta</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="conexao"></div>
                <section className="container para_devs">
                    <div className="devs_texto">
                        <h2>para desenvolvedores</h2>
                        <ul>
                            <li>encontrar serviços</li>
                            <li>divulgar suas hardskills</li>
                        </ul>
                        <div>
                            <a className="botao clientes_botao_devs" href="#">criar conta</a>
                        </div>
                    </div>
                    <img src={maosDev} alt="" />
                </section>
                <section className="container servicos">
                    <h2>serviços</h2>
                    <div className="servicos_cards">
                        <div className="card card1">
                            <img src={alfinete} alt="" />
                            <h3>Aplicativo para PetShop</h3>
                            <p>Possuo um Petshop e gostaria de um aplicativo para que meus clientes pudessem agendar serviços
                                como: banho e tosa, taxi dog, hotelzinho e etc.</p>
                            <p>Proposta: A Combinar</p>
                        </div>
                        <div className="card card2">
                            <img src={alfinete} alt="" />
                            <h3>Site para Pizzaria</h3>
                            <p>Preciso de um site para divulgar o sabores das pizzas, o endereço, os telefones de contato,
                                nossas redes sociais.</p>
                            <p>Proposta: R$750,00</p>
                        </div>
                    </div>
                    <a href="#">Ver mais serviços</a>
                </section>
            </main>
            <footer>
                <div className="container rodape">
                    <div className="span_dicas">
                        <img src={imgDev} alt="" />
                        <div className="span_dicas_texto">
                            <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                                recomendações para saber mais.</p>
                            <a className="botao botao_dicas" href="#">mais dicas</a>
                        </div>
                    </div>
                    <div className="rodape_conteudo">
                        <div className="rodape_conteudo_paginas">
                            <h2>Páginas</h2>
                            <ul>
                                <li>Login</li>
                                <li>Home</li>
                                <li>Listar Serviços</li>
                                <li>Cadastrar Cliente</li>
                                <li>Cadastrar Desenvolvedor</li>
                            </ul>
                        </div>
                        <img src={imgLogrodape} alt="" />
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <a href="#"><img src={imgfacebook} alt="" /></a>
                                <a href="#"><img src={imginstatagram} alt="" /></a>
                                <a href="#"><img src={imglinkedin} alt="" /></a>
                            </div>
                            <a href="mailto:">contato@vsconnect.com</a>
                        </div>
                    </div>
                    <p>todos os direitos reservados ©.</p>
                </div>
            </footer>
        </div>
    )
}

export default ListaDeServisos;