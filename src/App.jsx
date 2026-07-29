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
    const listaProdutos = skincareData.produtos_afiliados || skincareData.produtos || [];
    if (listaProdutos.length === 0) return [];

    const produtosComScore = listaProdutos.map(produto => {
      let scoreTotal = 0;

      if (!produto.gatilho) {
        return { ...produto, score: 0 };
      }

      Object.keys(produto.gatilho).forEach(chave => {
        if (chave === 'todos') {
          scoreTotal += 5;
        } else if (pontuacao[chave] !== undefined && pontuacao[chave] > 0) {
          const pesoUsuario = pontuacao[chave];
          const pesoProduto = produto.gatilho[chave];
          scoreTotal += pesoUsuario * pesoProduto;
        }
      });

      return {
        ...produto,
        score: scoreTotal
      };
    });

    produtosComScore.sort((a, b) => b.score - a.score);

   const recomendadosRelevantes = produtosComScore.filter(p => p.score > 0);

   const top6Diversificado = [];
   const categoriasVistas = new Set();

   for (let produto of recomendadosRelevantes) {
     if (!categoriasVistas.has(produto.categoria)) {
      top6Diversificado.push(produto);
      categoriasVistas.add(produto.categoria);
     }
     if (top6Diversificado.length === 6) {
       break;
     }
   }

  return top6Diversificado;
  };

  // 1. Calcula o Tipo de Pele exato com margem de tolerância para Pele Mista
  const calcularTipoPele = (pontos) => {
    const oleo = pontos.oleosidade || 0;
    const seco = pontos.ressecamento || 0;

    if (oleo < 3 && seco < 3) {
      return 'Mista/Equilibrada';
    }

    const diferenca = Math.abs(oleo - seco);
    if (oleo >= 3 && seco >= 3 && diferenca <= 2) {
      return 'Mista/Equilibrada';
    }

    if (oleo > seco) {
      return 'Oleosa';
    } 
    
    if (seco > oleo) {
      return 'Seca';
    }

    return 'Mista/Equilibrada';
  };

  const tipoPeleExato = calcularTipoPele(pontuacao);

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

        {/* ================================================== */}
        {/* CHAMADA DO E-BOOK NA HOME */}
        {/* ================================================== */}
          <div className="ebook-promo-home" style={{ backgroundColor: '#F8FAFC', padding: '30px 20px', borderRadius: '12px', marginTop: '40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
            <span className="badge" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
            Material Exclusivo
            </span>
            <h3 style={{ color: '#1E293B', marginTop: '15px' }}>Skincare Inteligente: O Guia Definitivo</h3>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '20px', maxWidth: '500px', margin: '10px auto 20px' }}>
             Transforme a forma como você compra cosméticos. Aprenda a interpretar rótulos, identificar ativos eficazes e investir apenas em produtos que realmente fazem sentido para sua pele. Chega de gastar dinheiro sem obter resultado!
            </p>
            <button onClick={() => setTelaAtual('ebook')} className="action-button" style={{ backgroundColor: '#1E293B', color: 'white', padding: '12px 25px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              Conhecer o E-book
            </button>
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
            
           <div className="rotina-container" style={{ backgroundColor: '#F1F5F9', padding: '25px', borderRadius: '12px', marginBottom: '30px', marginTop: '20px', textAlign: 'left' }}>
        <h3 style={{ color: '#0F172A', marginBottom: '10px' }}>
          Diagnóstico: Seu tipo de pele tem forte tendência <span style={{ color: '#3B82F6' }}>{tipoPeleExato}</span>
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '20px' }}>
          Baseado na sua anamnese, desenhamos esta rotina minimalista para maximizar resultados:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          
          {/* ROTINA DIURNA (MANHÃ) */}
          <div style={{ flex: '1', minWidth: '250px', backgroundColor: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #F59E0B' }}>
            <h4 style={{ color: '#F59E0B', marginBottom: '10px' }}>☀️ Manhã</h4>
            <ul style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
              <li><strong>1. Limpeza:</strong> Sabonete suave para remover impurezas noturnas.</li>
              <li><strong>2. Tratamento:</strong> Vitamina C ou Sérum antioxidante.</li>
              
             {tipoPeleExato === 'Oleosa' ? (
              <li><strong>3. Hidratação:</strong> Gel ou loção fluida (Oil-free).</li>
            ) : tipoPeleExato === 'Seca' ? (
              <li><strong>3. Hidratação:</strong> Creme denso e reparador.</li>
            ) : tipoPeleExato === 'Mista/Equilibrada' ? (
              <li><strong>3. Hidratação:</strong> Loção hidratante leve ou gel-creme equilibrante.</li>
            ) : null}
              
              <li><strong>4. Proteção:</strong> Protetor Solar (Obrigatório).</li>
            </ul>
          </div>

          {/* ROTINA NOTURNA (NOITE) */}
          <div style={{ flex: '1', minWidth: '250px', backgroundColor: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3B82F6' }}>
            <h4 style={{ color: '#3B82F6', marginBottom: '10px' }}>🌙 Noite</h4>
            <ul style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
              <li><strong>1. Limpeza Dupla:</strong> Cleansing oil seguido de gel de limpeza.</li>
              
              {/* Tratamento Noturno customizado para as 3 vertentes */}
             {tipoPeleExato === 'Oleosa' ? (
                <li><strong>2. Tratamento:</strong> Ácido Salicílico ou Mandélico para controle de poros.</li>
              ) : tipoPeleExato === 'Seca' ? (
                <li><strong>2. Tratamento:</strong> Ácido Hialurônico ou Hidratação profunda.</li>
              ) : tipoPeleExato === 'Mista/Equilibrada' ? (
                <li><strong>2. Tratamento:</strong> Ácido Mandélico leve ou Niacinamida para zonas mistas.</li>
              ) : null}
              
              <li><strong>3. Reparação:</strong> Hidratante focado em barreira cutânea.</li>
            </ul>
          </div>
        </div>
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

            {/* GATILHO PARA A NOVA PÁGINA DO E-BOOK A PARTIR DO RESULTADO DO QUIZ */}
            <div className="upsell-box" style={{ marginTop: '40px' }}>
              <span className="badge-ebook">Material Exclusivo</span>
              <h3 className="upsell-title">Quer aprofundar seus resultados?</h3>
              <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '10px 0 20px 0' }}>
                Adquira o e-book desenvolvido por especialistas e aprenda a decifrar a barreira cutânea, rótulos de cosméticos e muito mais!
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
                ← Voltar ao Início 
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
            <h2>Skincare Inteligente: O Guia Definitivo</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B' }}>
              Transforme a forma como você compra cosméticos. Aprenda a interpretar rótulos, identificar ativos eficazes e investir apenas em produtos que realmente fazem sentido para sua pele. Chega de gastar dinheiro sem um propósito!
            </p>
            
            <div className="ebook-features">
              <h4 style={{ marginBottom: '15px', color: '#1E293B' }}>O que você vai aprender:</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>✅ Como descobrir se um produto realmente vale o preço que custa.</li>
                <li>✅ Como analisar qualquer lista de ingredientes (INCI) mesmo sem conhecimento técnico.</li>
                <li>✅ Quais ativos realmente funcionam para acne, manchas, oleosidade, rugas e hidratação.</li>
                <li>✅ Como identificar ingredientes usados apenas para marketing.</li>
                <li>✅ Como descobrir se um ingrediente está em uma concentração relevante.</li>
                <li>✅ Como comparar dois produtos e escolher o melhor custo-benefício.</li>
                <li>✅ Como montar uma rotina personalizada para o seu tipo de pele.</li>
                <li>✅ Os erros que fazem milhares de pessoas desperdiçarem dinheiro com skincare.</li>
              </ul>
            </div>

            <a href="LINK" className="primary-button" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '20px', width: '100%', maxWidth: '300px' }}>
              Comprar Agora por R$ 29,90
            </a>

            <div>
              <button onClick={() => setTelaAtual('resultados')} className="restart-button">
                ← Voltar para Meus Resultados
              </button>
            </div>
            <div>
              <button onClick={() => setTelaAtual('home')} className="restart-button">
                ← Voltar ao inicio
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
      <p>Esta plataforma não é afiliada ao Facebook ou a qualquer entidade do Meta Platforms, Inc.</p>
      <p>Como Participantes do Programa de Associados da Amazon, somos remunerados pelas compras qualificadas efetuadas.</p>
      
      {/* SEÇÃO DE CONTATO (E-MAIL E WHATSAPP) */}
      <div className="footer-contact" style={{ margin: '15px 0', fontSize: '0.9rem' }}>
        <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>Precisa de Ajuda? Fale conosco:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:gartelux@gmail.com" style={{ color: '#2563EB', textDecoration: 'none' }}>
            ✉️ E-mail: gartelux@gmail.com
          </a>
          <a href="LINK WPP." target="_blank" rel="noopener noreferrer" style={{ color: '#16A34A', textDecoration: 'none' }}>
            💬 WhatsApp: Suporte Direto
          </a>
        </div>
      </div>

      <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px', cursor: 'pointer', marginTop: '10px' }}>
        <span onClick={() => setTelaAtual('termos')} style={{ textDecoration: 'underline' }}>Termos de Uso</span>
        <span onClick={() => setTelaAtual('privacidade')} style={{ textDecoration: 'underline' }}>Políticas de Privacidade</span>
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '0.7rem' }}>&copy; 2026 Garte Lux. Todos os direitos reservados.</p>
    </footer>

    </div>
  );
}