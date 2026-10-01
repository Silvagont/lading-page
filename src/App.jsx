import './App.css'

import heroImage from './assets/hero.png'
import reactImage from './assets/react-green.png'
import viteImage from './assets/vite-green.png'

function App() {
  return (
    <>
      {/* ================= HEADER ================= */}

      <header>
        <div className="logo">
          <h1>SENAI</h1>
          <span>Desenvolvimento de Sistemas</span>
        </div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizado">Aprendizados</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#atuacao">Atuação</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="inicio" className="hero">

          <div className="hero-content">

            <div className="hero-text">

              <span className="tag">
                CURSO TÉCNICO
              </span>

              <h2>
                Transforme ideias em
                <span> sistemas.</span>
              </h2>

              <p>
                Aprenda a desenvolver soluções, conhecer novas
                tecnologias e construir seu futuro na área de tecnologia.
              </p>

              <a href="#sobre" className="button">
                Conheça o curso
              </a>

            </div>

            <div className="hero-image">
              <img
                src={heroImage}
                alt="Ilustração tecnológica"
              />
            </div>

          </div>

        </section>


        {/* ================= SOBRE ================= */}

        <section id="sobre" className="section">

          <div className="section-title">
            <span>SOBRE O CURSO</span>
            <h2>O que é Desenvolvimento de Sistemas?</h2>
          </div>

          <div className="about-content">

            <div>
              <p>
                O curso Técnico em Desenvolvimento de Sistemas
                prepara estudantes para aprender programação,
                desenvolvimento de sistemas e tecnologias utilizadas
                na área de tecnologia.
              </p>

              <p>
                Durante o curso, o aluno desenvolve conhecimentos
                para criar, testar, manter e melhorar aplicações
                e sistemas.
              </p>
            </div>

            <div className="about-card">

              <strong>Desenvolvimento</strong>

              <p>
                Transforme ideias em soluções digitais.
              </p>

            </div>

          </div>

        </section>


        {/* ================= APRENDIZADO ================= */}

        <section id="aprendizado" className="section dark-section">

          <div className="section-title">
            <span>APRENDIZADO</span>
            <h2>O que você vai aprender</h2>
          </div>

          <div className="cards">

            <article className="card">
              <div className="card-number">01</div>
              <h3>Lógica de programação</h3>
              <p>
                Aprenda a criar soluções utilizando
                lógica e programação.
              </p>
            </article>

            <article className="card">
              <div className="card-number">02</div>
              <h3>Desenvolvimento Web</h3>
              <p>
                Crie páginas e aplicações para a internet.
              </p>
            </article>

            <article className="card">
              <div className="card-number">03</div>
              <h3>Frontend</h3>
              <p>
                Desenvolva a parte visual e interativa
                das aplicações.
              </p>
            </article>

            <article className="card">
              <div className="card-number">04</div>
              <h3>Backend</h3>
              <p>
                Trabalhe com a parte interna dos sistemas.
              </p>
            </article>

            <article className="card">
              <div className="card-number">05</div>
              <h3>Banco de dados</h3>
              <p>
                Aprenda a armazenar e organizar informações.
              </p>
            </article>

            <article className="card">
              <div className="card-number">06</div>
              <h3>APIs</h3>
              <p>
                Entenda como diferentes sistemas podem
                se comunicar.
              </p>
            </article>

            <article className="card">
              <div className="card-number">07</div>
              <h3>Aplicativos</h3>
              <p>
                Conheça conceitos utilizados na criação
                de aplicações.
              </p>
            </article>

            <article className="card">
              <div className="card-number">08</div>
              <h3>Versionamento</h3>
              <p>
                Aprenda a trabalhar com Git e GitHub.
              </p>
            </article>

          </div>

        </section>


        {/* ================= TECNOLOGIAS ================= */}

        <section id="tecnologias" className="section">

          <div className="section-title">
            <span>TECNOLOGIAS</span>
            <h2>Ferramentas utilizadas</h2>
          </div>

          <div className="technologies">

            <div className="technology">
              <strong>HTML</strong>
              <span>Estrutura</span>
            </div>

            <div className="technology">
              <strong>CSS</strong>
              <span>Estilização</span>
            </div>

            <div className="technology">
              <strong>JavaScript</strong>
              <span>Programação</span>
            </div>

            <div className="technology image-tech">
              <img src={reactImage} alt="React" />
              <strong>React</strong>
            </div>

            <div className="technology image-tech">
              <img src={viteImage} alt="Vite" />
              <strong>Vite</strong>
            </div>

            <div className="technology">
              <strong>Node.js</strong>
              <span>Backend</span>
            </div>

            <div className="technology">
              <strong>SQL</strong>
              <span>Banco de dados</span>
            </div>

            <div className="technology">
              <strong>Git</strong>
              <span>Versionamento</span>
            </div>

            <div className="technology">
              <strong>GitHub</strong>
              <span>Colaboração</span>
            </div>

          </div>

        </section>


        {/* ================= ÁREAS DE ATUAÇÃO ================= */}

        <section id="atuacao" className="section dark-section">

          <div className="section-title">
            <span>MERCADO</span>
            <h2>Áreas de atuação</h2>
          </div>

          <div className="cards">

            <article className="card">
              <h3>Frontend</h3>
              <p>
                Desenvolvimento da parte visual das aplicações.
              </p>
            </article>

            <article className="card">
              <h3>Backend</h3>
              <p>
                Desenvolvimento da parte interna dos sistemas.
              </p>
            </article>

            <article className="card">
              <h3>Full Stack</h3>
              <p>
                Trabalho com frontend e backend.
              </p>
            </article>

            <article className="card">
              <h3>Aplicações</h3>
              <p>
                Desenvolvimento de diferentes tipos de aplicações.
              </p>
            </article>

            <article className="card">
              <h3>Banco de dados</h3>
              <p>
                Organização e gerenciamento de dados.
              </p>
            </article>

            <article className="card">
              <h3>Suporte</h3>
              <p>
                Manutenção e melhoria de sistemas.
              </p>
            </article>

          </div>

        </section>


        {/* ================= PROJETOS ================= */}

        <section id="projetos" className="section">

          <div className="section-title">
            <span>PRÁTICA</span>
            <h2>O que você pode criar?</h2>
          </div>

          <div className="projects">

            <article className="project">
              <span>01</span>
              <h3>Sistema de cadastro</h3>
              <p>
                Cadastro e gerenciamento de clientes.
              </p>
            </article>

            <article className="project">
              <span>02</span>
              <h3>Sistema de estoque</h3>
              <p>
                Controle de produtos e estoque.
              </p>
            </article>

            <article className="project">
              <span>03</span>
              <h3>Agendamentos</h3>
              <p>
                Organização de horários e agendamentos.
              </p>
            </article>

            <article className="project">
              <span>04</span>
              <h3>Loja virtual</h3>
              <p>
                Aplicação para apresentação e venda de produtos.
              </p>
            </article>

            <article className="project">
              <span>05</span>
              <h3>Dashboard</h3>
              <p>
                Painel administrativo com informações.
              </p>
            </article>

            <article className="project">
              <span>06</span>
              <h3>Aplicativo de tarefas</h3>
              <p>
                Organização de tarefas e atividades.
              </p>
            </article>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section id="cta" className="cta">

          <span>COMECE AGORA</span>

          <h2>
            Seu futuro na tecnologia
            pode começar aqui.
          </h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento
            de Sistemas.
          </p>

          <a href="#inicio" className="button">
            Voltar ao início
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          <h3>SENAI</h3>

          <p>
            Técnico em Desenvolvimento de Sistemas
          </p>
        </div>

        <div>
          <p>© 2026</p>
          <p>Aluno: Seu Nome</p>
        </div>

      </footer>

    </>
  )
}

export default App