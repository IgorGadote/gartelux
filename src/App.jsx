import React, { useState, useEffect } from 'react';
import './App.css';
import { skincareData } from './data/skincareData';

export default function SkincareQuiz() {
  const [telaAtual, setTelaAtual] = useState('home'); // Telas: 'home', 'quiz', 'resultados', 'ebook'
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState({
    oleosidade: 0, ressecamento: 0, acne: 0, manchas: 0, sensibilidade: 0, antiidade: 0, olheiras: 0, textura: 0
  });
  const [indiceDepoimento, setIndiceDepoimento] = useState(0);

  const avaliacoes = [
    { texto: "Eu gastava horrores em farmácia comprando coisas que as blogueiras indicavam. O quiz montou uma rotina de 3 passos que finalmente secou minhas espinhas sem arder minha pele.", autor: "Mariana S., 24 anos" },
    { texto: "Prático, rápido e científico. Em 5 minutos descobri que meu problema era a barreira cutânea danificada e não apenas oleosidade.", autor: "Beatriz L., 28 anos" },
    { texto: "Sempre tive dificuldade de entender qual ácido usar para minhas manchas. A análise foi direto ao ponto e os produtos da Amazon chegaram rapidinho.", autor: "Camila R., 31 anos" },
    { texto: "Finalmente uma recomendação de skincare que não tenta me empurrar 10 produtos caros. Estou usando apenas 4 itens e minha pele nunca esteve tão boa.", autor: "Fernanda T., 22 anos" },
    { texto: "Achei genial a parte de cruzar variáveis biológicas. A rotina noturna que o algoritmo sugeriu mudou a textura da minha pele em duas semanas.", autor: "Juliana M., 35 anos" },
    { texto: "O design do teste me passou muita confiança. Comprei o gel de limpeza e o hidratante recomendados e o resultado foi exatamente o prometido.", autor: "Larissa C., 29 anos" },
    { texto: "Eu não sabia que a minha pele na verdade era sensível até responder essas perguntas. Troquei meus produtos e a vermelhidão sumiu.", autor: "Amanda V., 26 anos" },
    { texto: "Direto ao ponto, sem enrolação. Gostei de já sair com os links diretos da Amazon, facilitou muito a minha vida.", autor: "Roberto M., 33 anos" },
    { texto: "Incrível como 15 perguntas conseguem mapear exatamente o que está acontecendo com o nosso rosto. O e-book também é maravilhoso!", autor: "Paula K., 40 anos" },
    { texto: "Melhor diagnóstico virtual que já fiz. A curadoria de produtos é excelente, só trabalham com marcas que realmente entregam resultado.", autor: "Natália F., 27 anos" }
  ];

  useEffect(() => {
    if (telaAtual === 'home') {
      const intervalo = setInterval(() => {
        setIndiceDepoimento((indiceAtual) => (indiceAtual + 1) % avaliacoes.length);
      }, 6000); 
      return () => clearInterval(intervalo); 
    }
  }, [telaAtual, avaliacoes.length]);

  const lidarComResposta = (impacto) => {
    setPontuacao({
      oleosidade: pontuacao.oleosidade + (impacto.oleosidade || 0),
      ressecamento: pontuacao.ressecamento + (impacto.ressecamento || 0),
      acne: pontuacao.acne + (impacto.acne || 0),
      manchas: pontuacao.manchas + (impacto.manchas || 0),
      sensibilidade: pontuacao.sensibilidade + (impacto.sensibilidade || 0),
      antiidade: pontuacao.antiidade + (impacto.antiidade || 0),
      olheiras: pontuacao.olheiras + (impacto.olheiras || 0),
      textura: pontuacao.textura + (impacto.textura || 0)
    });

    const proxima = perguntaAtual + 1;
    if (proxima < skincareData.perguntas.length) {
      setPerguntaAtual(proxima);
    } else {
      setTelaAtual('resultados');
    }
  };

  const obterProdutosRecomendados = () => {
    const filtrados = skincareData.produtos_afiliados.filter(produto => {
      return (produto.gatilho.acne ? pontuacao.acne >= produto.gatilho.acne : true) &&
             (produto.gatilho.oleosidade ? pontuacao.oleosidade >= produto.gatilho.oleosidade : true) &&
             (produto.gatilho.ressecamento ? pontuacao.ressecamento >= produto.gatilho.ressecamento : true) &&
             (produto.gatilho.manchas ? pontuacao.manchas >= produto.gatilho.manchas : true) &&
             (produto.gatilho.sensibilidade ? pontuacao.sensibilidade >= produto.gatilho.sensibilidade : true) &&
             (produto.gatilho.antiidade ? pontuacao.antiidade >= produto.gatilho.antiidade : true) &&
             (produto.gatilho.olheiras ? pontuacao.olheiras >= produto.gatilho.olheiras : true) &&
             (produto.gatilho.textura ? pontuacao.textura >= produto.gatilho.textura : true);
    });
    return filtrados.slice(0, 6); 
  };

  return (
    <div className="container" style={{ padding: 0 }}> 
      
      <header className="global-header">
        <img src="produtos/logo.png" alt="Logo Garte Lux" className="logo-img" />
      </header>

      <div style={{ padding: '40px 20px' }}> 
        
        {/* ================================================== */}
        {/* TELA 1: HOME PAGE */}
        {/* ================================================== */}
        {telaAtual === 'home' && (
          <div className="landing-wrapper">
            <div className="hero-section">
              <span className="badge">Ciência & Estética Avançada</span>
              <h1>A Revolução do Skincare Baseado em Dados</h1>
              <p>Descubra os ativos dermatológicos exatos que a sua pele precisa através de uma anamnese inteligente. Zero achismos, 100% ciência.</p>
              <button className="primary-button" onClick={() => setTelaAtual('quiz')}>
                Fazer Análise de Pele Grátis
              </button>
            </div>

            <div className="hero-image-container">
              <img src="produtos/hero-image.jpg" alt="Estética e Cuidados com a Pele" />
            </div>

            <div className="trust-section">
              <div className="trust-item">
                <h4>🔬 Curadoria Clínica</h4>
                <p>Análise validada por biomedicina</p>
              </div>
              <div className="trust-item">
                <h4>📦 Produtos Originais</h4>
                <p>Links diretos da Amazon</p>
              </div>
              <div className="trust-item">
                <h4>🔒 Privacidade</h4>
                <p>Seus dados estão seguros</p>
              </div>
            </div>

            <div className="about-company">
              <div className="about-text">
                <h3>Sobre o Nosso Laboratório Digital</h3>
                <p>Desenvolvido por especialistas em biomedicina e engenharia de software, nosso algoritmo cruza dezenas de variáveis biológicas para desenhar rotinas de cuidados altamente eficazes e personalizadas para o seu perfil.</p>
              </div>
              <div className="about-stats">
                <div className="stat-box"><h4>15</h4><span>Variáveis Clínicas</span></div>
                <div className="stat-box"><h4>100%</h4><span>Baseado em Ciência</span></div>
              </div>
            </div>

            <div className="preview-section" style={{ marginTop: '40px' }}>
              <h3 className="section-title">Ativos Recomendados na Plataforma</h3>
              <p className="section-desc">Nosso catálogo completo de dermocosméticos disponíveis na Amazon.</p>
              <div className="products-grid">
                {skincareData.produtos_afiliados.map(produto => (
                  <div key={produto.id} className="product-card">
                    <img src={produto.imagem_url || "https://via.placeholder.com/150"} alt={produto.nome} />
                    <h4>{produto.nome}</h4>
                    <a href={produto.link_compra} className="buy-button" target="_blank" rel="noopener noreferrer">
                      Ver na Amazon
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials">
              <h3 className="section-title">O que dizem sobre nossa análise</h3>
              <div className="testimonial-card fade-in" key={indiceDepoimento}>
                "{avaliacoes[indiceDepoimento].texto}"
                <span className="testimonial-author">- {avaliacoes[indiceDepoimento].autor}</span>
              </div>
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* TELA 2: O QUIZ */}
        {/* ================================================== */}
        {telaAtual === 'quiz' && (
          <div>
            <div className="quiz-header">
              <span className="progress-text">Pergunta {perguntaAtual + 1} de {skincareData.perguntas.length}</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${((perguntaAtual + 1) / skincareData.perguntas.length) * 100}%` }}></div>
              </div>
            </div>
            <h2 className="question-title">{skincareData.perguntas[perguntaAtual].texto}</h2>
            <div className="options-grid">
              {skincareData.perguntas[perguntaAtual].opcoes.map((opcao, index) => (
                <button key={index} className="option-button" onClick={() => lidarComResposta(opcao.impacto)}>
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{opcao.resposta}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* TELA 3: RESULTADOS */}
        {/* ================================================== */}
        {telaAtual === 'resultados' && (
          <div>
            <div className="results-header">
              <span className="badge">Análise Concluída</span>
              <h2>Seu Diagnóstico Digital</h2>
              <p>Esta é a sua rotina ideal validada pela ciência.</p>
            </div>
            
            <h3 style={{ marginBottom: '20px', color: '#1E293B', textAlign: 'center' }}>Top Produtos Para o Seu Perfil</h3>
            
            <div className="products-grid">
              {obterProdutosRecomendados().length > 0 ? (
                obterProdutosRecomendados().map(produto => (
                  <div key={produto.id} className="product-card">
                    <img src={produto.imagem_url || "https://via.placeholder.com/150"} alt={produto.nome} />
                    <h4>{produto.nome}</h4>
                    <a href={produto.link_compra} className="buy-button" target="_blank" rel="noopener noreferrer">
                      Comprar na Amazon
                    </a>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center', width: '100%' }}>Nenhum produto atendeu exatamente ao seu perfil, mas confira nosso catálogo completo!</p>
              )}
            </div>

            {/* O GATILHO QUE LEVA PARA A NOVA PÁGINA DO E-BOOK */}
            <div className="upsell-box" style={{ marginTop: '40px' }}>
              <span className="badge-ebook">Material Exclusivo</span>
              <h3 className="upsell-title">Quer aprofundar seus resultados?</h3>
              <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '10px 0 20px 0' }}>
                Adquira o e-book desenvolvido por especialistas e aprenda a decifrar a barreira cutânea e rótulos de cosméticos.
              </p>
              <button onClick={() => setTelaAtual('ebook')} className="upsell-button" style={{ border: 'none', cursor: 'pointer', width: '100%' }}>
                Ver Detalhes do E-book
              </button>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={() => { 
                  setTelaAtual('home'); setPerguntaAtual(0); 
                  setPontuacao({ oleosidade: 0, ressecamento: 0, acne: 0, manchas: 0, sensibilidade: 0, antiidade: 0, olheiras: 0, textura: 0 });
                }} 
                className="restart-button"
              >
                Voltar ao Início / Refazer Teste
              </button>
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* TELA 4: A NOVA PÁGINA DE VENDAS DO E-BOOK */}
        {/* ================================================== */}
        {telaAtual === 'ebook' && (
          <div className="ebook-landing">
            <span className="badge">Guia Definitivo</span>
            <h2>O Guia da Barreira Intacta</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B' }}>
              Você já tem a lista de produtos ideais. Agora, aprenda o protocolo exato para controlar a produção de sebo, secar inflamações e uniformizar seu tom de pele em 21 dias.
            </p>
            
            <div className="ebook-features">
              <h4 style={{ marginBottom: '15px', color: '#1E293B' }}>O que você vai aprender:</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>✅ A ordem correta de aplicar cada ácido para evitar o efeito rebote.</li>
                <li>✅ Como identificar rótulos que pioram a acne (ingredientes comedogênicos).</li>
                <li>✅ O ciclo noturno para clarear manchas sem arder a pele.</li>
              </ul>
            </div>

            <a href="SEU_LINK_DA_HOTMART_OU_KIWIFY_AQUI" className="primary-button" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '20px', width: '100%', maxWidth: '300px' }}>
              Comprar Agora por R$ 29,90
            </a>

            <div>
              <button onClick={() => setTelaAtual('resultados')} className="restart-button">
                ← Voltar para Meus Resultados
              </button>
            </div>
          </div>
        )}

      </div>

      {/* TELA 5: TERMOS DE USO */}
        {telaAtual === 'termos' && (
          <div className="ebook-landing" style={{ textAlign: 'left' }}>
            <span className="badge">Legal</span>
            <h2 style={{ marginBottom: '20px' }}>Termos de Uso</h2>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '15px' }}>
              Bem-vindo ao Garte Lux. Ao acessar e utilizar nosso site, você concorda com os presentes Termos de Uso. Nosso portal oferece análises informativas e educacionais sobre skincare baseadas em questionários interativos.
            </p>
            <h4 style={{ color: '#1E293B', marginTop: '20px', marginBottom: '10px' }}>1. Propriedade Intelectual</h4>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '15px' }}>
              Todo o conteúdo, layout, algoritmos e identidade visual do Garte Lux são protegidos por leis de propriedade intelectual. É proibida a reprodução não autorizada.
            </p>
            <h4 style={{ color: '#1E293B', marginTop: '20px', marginBottom: '10px' }}>2. Isenção de Responsabilidade Médica</h4>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '15px' }}>
              As recomendações geradas pelo quiz possuem caráter exclusivamente informativo e educativo. Elas não substituem o diagnóstico, avaliação ou prescrição de um médico dermatologista.
            </p>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => setTelaAtual('home')} className="restart-button">
                ← Voltar para o Início
              </button>
            </div>
          </div>
        )}

        {/* TELA 6: POLÍTICA DE PRIVACIDADE */}
        {telaAtual === 'privacidade' && (
          <div className="ebook-landing" style={{ textAlign: 'left' }}>
            <span className="badge">LGPD & Privacidade</span>
            <h2 style={{ marginBottom: '20px' }}>Política de Privacidade</h2>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '15px' }}>
              O Garte Lux respeita a sua privacidade e está em conformidade com a Lei Geral de Proteção de Dados (LGPD). Esta política descreve como coletamos e tratamos suas informações.
            </p>
            <h4 style={{ color: '#1E293B', marginTop: '20px', marginBottom: '10px' }}>1. Dados do Quiz</h4>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '15px' }}>
              As respostas fornecidas no questionário de pele são utilizadas unicamente em tempo de execução no seu navegador para calcular a melhor recomendação de ativos, sem armazenamento de dados sensíveis em servidores próprios.
            </p>
            <h4 style={{ color: '#1E293B', marginTop: '20px', marginBottom: '10px' }}>2. Links de Afiliados e Cookies</h4>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '15px' }}>
              Utilizamos cookies de rastreamento de parceiros (como o Programa de Associados da Amazon) para contabilizar indicações de compra qualificadas. Ao clicar em nossos links, um cookie é armazenado pelo parceiro para validar a comissão, sem custo adicional para você.
            </p>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => setTelaAtual('home')} className="restart-button">
                ← Voltar para o Início
              </button>
            </div>
          </div>
        )}

      {/* ================================================== */}
      {/* RODAPÉ GLOBAL (APARECE EM TODAS AS TELAS) */}
      {/* ================================================== */}
      <footer className="global-footer">
        <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Meta Platforms, Inc.</p>
        <p>Como Participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.</p>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px', cursor: 'pointer' }}>
          <span onClick={() => setTelaAtual('termos')} style={{ textDecoration: 'underline' }}>Termos de Uso</span>
          <span onClick={() => setTelaAtual('privacidade')} style={{ textDecoration: 'underline' }}>Políticas de Privacidade</span>
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.7rem' }}>&copy; 2026 Garte Lux. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}