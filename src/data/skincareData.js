export const skincareData = {
  perguntas: [
    {
      id: "q1",
      texto: "Como sua pele acorda na maioria das manhãs?",
      opcoes: [
        { resposta: "Brilhando e com sensação de óleo, mesmo tendo lavado na noite anterior.", impacto: { oleosidade: 10, acne: 3 } },
        { resposta: "Confortável e normal, apenas com um leve brilho na zona T (testa e nariz).", impacto: { oleosidade: 4, ressecamento: 2 } },
        { resposta: "Opaca, repuxando um pouco ou com aspecto cansado.", impacto: { ressecamento: 10, oleosidade: 0 } }
      ]
    },
    {
      id: "q2",
      texto: "Após lavar o rosto apenas com sabonete e água, como você sente a sua pele nos primeiros 30 minutos?",
      opcoes: [
        { resposta: "Ela volta a ficar oleosa rapidamente.", impacto: { oleosidade: 10 } },
        { resposta: "Fica esturricada, pedindo por um hidratante urgente.", impacto: { ressecamento: 10 } },
        { resposta: "Fica normal e equilibrada.", impacto: { oleosidade: 2, ressecamento: 2 } }
      ]
    },
    {
      id: "q3",
      texto: "Se você olhar bem de perto no espelho agora, como estão os seus poros?",
      opcoes: [
        { resposta: "Muito visíveis, dilatados e concentrados no nariz e bochechas.", impacto: { oleosidade: 10 } },
        { resposta: "Visíveis apenas na região do nariz.", impacto: { oleosidade: 5 } },
        { resposta: "Quase invisíveis, textura bem lisa.", impacto: { ressecamento: 8 } }
      ]
    },
    {
      id: "q4",
      texto: "Ao longo do dia, se você passar a mão no rosto ou usar um lencinho, o que acontece?",
      opcoes: [
        { resposta: "O lencinho sai transparente de tanto óleo.", impacto: { oleosidade: 10 } },
        { resposta: "Fica um pouco de brilho no lencinho, nada absurdo.", impacto: { oleosidade: 4 } },
        { resposta: "Não sai nada, e às vezes sinto a pele até descamar.", impacto: { ressecamento: 10 } }
      ]
    },
    {
      id: "q5",
      texto: "Como a sua pele reage a mudanças climáticas extremas (frio intenso ou ar-condicionado forte)?",
      opcoes: [
        { resposta: "Fica extremamente vermelha, ardendo ou coçando.", impacto: { sensibilidade: 10 } },
        { resposta: "Fica um pouco mais ressecada que o normal.", impacto: { ressecamento: 7 } },
        { resposta: "Não muda muita coisa, continua resistente (ou oleosa).", impacto: { resistencia: 10 } }
      ]
    },
    {
      id: "q6",
      texto: "Se você pudesse resolver apenas UM problema na sua pele hoje como num passe de mágica, qual seria?",
      opcoes: [
        { resposta: "Acabar com as espinhas e cravos.", impacto: { acne: 10 } },
        { resposta: "Clarear manchas escuras ou de sol.", impacto: { manchas: 10 } },
        { resposta: "Suavizar linhas finas, rugas e flacidez.", impacto: { antiidade: 10 } },
        { resposta: "Diminuir a vermelhidão e a sensibilidade.", impacto: { sensibilidade: 10 } }
      ]
    },
    {
      id: "q7",
      texto: "Pensando em espinhas e cravos, qual cenário descreve melhor a sua realidade hoje?",
      opcoes: [
        { resposta: "Tenho espinhas internas, doloridas e inflamadas (císticas).", impacto: { acne: 10 } },
        { resposta: "Tenho muitos cravinhos pretos e espinhas pequenas superficiais.", impacto: { acne: 7 } },
        { resposta: "Só tenho espinhas na época da TPM ou estresse.", impacto: { acne: 4 } },
        { resposta: "Raramente ou nunca tenho espinhas.", impacto: { acne: 0 } }
      ]
    },
    {
      id: "q8",
      texto: "Quando o assunto são manchas, o que você nota com mais facilidade no seu rosto?",
      opcoes: [
        { resposta: "Marcas vermelhas ou marrons que ficaram de espinhas antigas.", impacto: { manchas: 7, acne: 5 } },
        { resposta: "Manchas maiores e acastanhadas (Melasma) ou sardas de sol.", impacto: { manchas: 10 } },
        { resposta: "Olheiras muito pigmentadas.", impacto: { olheiras: 10 } },
        { resposta: "Minha pele tem um tom uniforme, sem manchas.", impacto: { manchas: 0 } }
      ]
    },
    {
      id: "q9",
      texto: "Você costuma sentir o seu rosto vermelho, quente ou ardendo do nada (ou após comer algo picante/beber álcool)?",
      opcoes: [
        { resposta: "Sim, acontece com frequência (suspeita de Rosácea).", impacto: { sensibilidade: 10 } },
        { resposta: "Às vezes, apenas quando esfolio ou passo produtos fortes.", impacto: { sensibilidade: 6 } },
        { resposta: "Nunca, minha pele aguenta tudo.", impacto: { sensibilidade: 0 } }
      ]
    },
    {
      id: "q10",
      texto: "Ao observar a textura geral da sua pele sob uma luz forte, o que mais te incomoda?",
      opcoes: [
        { resposta: "Textura irregular, grossa ou com pequenas bolinhas (queratose).", impacto: { textura: 10 } },
        { resposta: "Linhas de expressão marcadas e falta de firmeza.", impacto: { antiidade: 10 } },
        { resposta: "Falta de viço, pele com aspecto 'cinza' e sem vida.", impacto: { ressecamento: 5 } }
      ]
    },
    {
      id: "q11",
      texto: "Sendo 100% sincero(a): como é a sua relação com o protetor solar hoje?",
      opcoes: [
        { resposta: "Passo todos os dias religiosamente, até dentro de casa.", impacto: { disciplina: 10 } },
        { resposta: "Passo apenas quando vou à praia ou me exponho muito ao sol.", impacto: { disciplina: 5 } },
        { resposta: "Odeio protetor, deixa minha pele melecada e branca.", impacto: { disciplina: 1, oleosidade: 2 } }
      ]
    },
    {
      id: "q12",
      texto: "Quanto tempo você realmente tem (ou está disposto a investir) na sua rotina pela manhã?",
      opcoes: [
        { resposta: "Menos de 3 minutos. Quero o básico que funciona.", impacto: { rotina_pratica: 10 } },
        { resposta: "Uns 10 minutos. Gosto de me cuidar, mas sem exageros.", impacto: { rotina_media: 10 } },
        { resposta: "O tempo que for necessário, o skincare é minha terapia.", impacto: { rotina_completa: 10 } }
      ]
    },
    {
      id: "q13",
      texto: "Você já teve algum 'efeito rebote' (a pele piorar muito) após tentar usar algum ácido forte ou secativo no passado?",
      opcoes: [
        { resposta: "Sim, minha pele manchou ou ressecou demais.", impacto: { sensibilidade: 8 } },
        { resposta: "Nunca usei nada forte, sou iniciante.", impacto: { iniciante: 10 } },
        { resposta: "Já usei e minha pele tolerou super bem.", impacto: { resistencia: 10 } }
      ]
    },
    {
      id: "q14",
      texto: "O que você sente quando tenta comprar produtos de skincare por conta própria numa farmácia?",
      opcoes: [
        { resposta: "Fico perdido(a) com tantos nomes difíceis e acabo não comprando nada.", impacto: { dor_compra: 10 } },
        { resposta: "Compro por indicação de blogueiras, mas raramente funciona para mim.", impacto: { dor_compra: 10 } },
        { resposta: "Gasto muito dinheiro em produtos caros que não entregam resultado.", impacto: { dor_compra: 10 } }
      ]
    },
    {
      id: "q15",
      texto: "Qual é a sua maior meta a longo prazo ao investir numa rotina validada pela ciência?",
      opcoes: [
        { resposta: "Poder sair de casa sem base ou corretivo, com a pele limpa.", impacto: { acne: 3 } },
        { resposta: "Retardar o envelhecimento e manter a firmeza da pele.", impacto: { antiidade: 5 } },
        { resposta: "Parar de gastar dinheiro à toa e ter um protocolo que eu finalmente confie.", impacto: { ressecamento: 1 } }
      ]
    }
  ],
  produtos_afiliados: [
    // --- LIMPEZA ---
    {
      id: "p1",
      nome: "Gel de Limpeza CeraVe",
      categoria: "limpeza",
      imagem_url: "/produtos/cerave-geldelimpeza.jpg",
      link_compra: "https://link.amazon/B021t2gh9",
      gatilho: { oleosidade: 8 }
    },
    {
      id: "p2",
      nome: "Loção de Limpeza Hidratante CeraVe",
      categoria: "limpeza",
      imagem_url: "/produtos/cerave-hidrat.jpg",
      link_compra: "https://link.amazon/B0e7ukEgP",
      gatilho: { ressecamento: 8 }
    },
    {
      id: "p3",
      nome: "Sabonete Líquido Actine (Darrow)",
      categoria: "limpeza",
      imagem_url: "produtos/sabliquido-actine-darrow.jpg",
      link_compra: "https://link.amazon/B0hTnC0eP",
      gatilho: { acne: 7, oleosidade: 7 }
    },
    {
      id: "p4",
      nome: "Cetaphil Loção de Limpeza (Pele Sensível)",
      categoria: "limpeza",
      imagem_url: "produtos/locdelimpeza-cetaphil.jpg",
      link_compra: "https://link.amazon/B02YfXFq9",
      gatilho: { sensibilidade: 8 }
    },

    // --- TRATAMENTO (SÉRUNS E ÁCIDOS) ---
    {
      id: "p5",
      nome: "Sérum Ácido Salicílico Principia",
      categoria: "serum",
      imagem_url: "/produtos/se-acd-salicilico.jpg",
      link_compra: "https://link.amazon/B0dqhorlh",
      gatilho: { acne: 10 }
    },
    {
      id: "p6",
      nome: "Sérum Niacinamida Principia",
      categoria: "serum",
      imagem_url: "produtos/se-niacinamida-principia.jpg",
      link_compra: "https://link.amazon/B0hvNDLgI",
      gatilho: { manchas: 5, oleosidade: 4 }
    },
    {
      id: "p7",
      nome: "Sérum Revitalift Ácido Hialurônico (L'Oréal)",
      categoria: "serum",
      imagem_url: "produtos/se-revitalift-acdhialuronico.jpg",
      link_compra: "https://link.amazon/B0jfP1GFU",
      gatilho: { ressecamento: 5, antiidade: 5 }
    },
    {
      id: "p8",
      nome: "Sérum Retinol Puro (L'Oréal)",
      categoria: "serum",
      imagem_url: "produtos/se-retinolpuro-loreal.jpg",
      link_compra: "https://link.amazon/B0bF5yBjV",
      gatilho: { antiidade: 10 }
    },
    {
      id: "p9",
      nome: "Sérum de Vitamina C Principia",
      categoria: "serum",
      imagem_url: "produtos/se-vitC.jpg",
      link_compra: "https://link.amazon/B0ftkcYrW",
      gatilho: { manchas: 8 }
    },
    {
      id: "p10",
      nome: "Ácido Glicólico Creamy",
      categoria: "acido",
      imagem_url: "produtos/acd-glicolico-creamy.jpg",
      link_compra: "https://link.amazon/B04IGt90F",
      gatilho: { textura: 10 }
    },
    {
      id: "p11",
      nome: "Ácido Mandélico Creamy",
      categoria: "acido",
      imagem_url: "produtos/acd-mandelico-creamy.jpg",
      link_compra: "https://link.amazon/B063GaOct",
      gatilho: { manchas: 8, sensibilidade: 6 }
    },

    // --- HIDRATAÇÃO E REPARAÇÃO ---
    {
      id: "p12",
      nome: "Hidratante Neutrogena Hydro Boost Water Gel",
      categoria: "creme",
      imagem_url: "produtos/hidrat-hydroboostwatergel-neutrogena.jpg",
      link_compra: "https://link.amazon/B0fhhAh94",
      gatilho: { oleosidade: 5, ressecamento: 5 }
    },
    {
      id: "p13",
      nome: "Creme Hidratante CeraVe",
      categoria: "creme",
      imagem_url: "produtos/cremehidrat-cerave.jpg",
      link_compra: "https://link.amazon/B0h8unlac",
      gatilho: { ressecamento: 10 }
    },
    {
      id: "p14",
      nome: "Creme Hidratante Minéral 89 Vichy",
      categoria: "creme",
      imagem_url: "produtos/hidrat-mineral89-vichy.jpg",
      link_compra: "https://link.amazon/B05pmqmYA",
      gatilho: { sensibilidade: 5, ressecamento: 4 }
    },
    {
      id: "p15",
      nome: "Cicaplast Baume B5 (La Roche-Posay)",
      categoria: "creme",
      imagem_url: "produtos/cicaplastbaumeb5-larocheposay.jpg",
      link_compra: "https://link.amazon/B03xRAFIn",
      gatilho: { sensibilidade: 10 }
    },
    {
      id: "p16",
      nome: "Creme Reparador para os Olhos CeraVe",
      categoria: "creme",
      imagem_url: "produtos/cremereparador-paraolhos-cerave.jpg",
      link_compra: "https://amzn.to/3TcIa1e",
      gatilho: { olheiras: 10 }
    },

    // --- PROTEÇÃO SOLAR ---
    {
      id: "p17",
      nome: "Protetor Solar Anthelios Airlicium (La Roche-Posay)",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-atheliosaircilium.jpg",
      link_compra: "https://link.amazon/B0ai42Epu",
      gatilho: { oleosidade: 10 }
    },
    {
      id: "p18",
      nome: "Protetor Solar Bioré UV Aqua Rich",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-bioreuv-aquarich.jpg",
      link_compra: "https://link.amazon/B01Gcz6uo",
      gatilho: { ressecamento: 7 }
    },
    {
      id: "p19",
      nome: "Protetor Solar ISDIN Fusion Water 50",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-fisionwater50-isdin.jpg",
      link_compra: "https://link.amazon/B095qCb6d",
      gatilho: { sensibilidade: 4, oleosidade: 4 }
    },
    {
      id: "p20",
      nome: "Protetor Solar Eucerin Pigment Control",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-pigmentcontrol-eucerin.jpg",
      link_compra: "https://link.amazon/B0ecQF0td",
      gatilho: { manchas: 10 }
    },
    // --- NOVOS PRODUTOS: LIMPEZA ---
    {
      id: "p21",
      nome: "Gel de Limpeza Effaclar Concentrado La Roche-Posay",
      categoria: "limpeza",
      imagem_url: "produtos/geldelimpeza-effaclar.jpg",
      link_compra: "https://link.amazon/B02qS0jza",
      gatilho: { oleosidade: 10, acne: 8 }
    },
    {
      id: "p22",
      nome: "Gel de Limpeza Micelar Sensibio Bioderma",
      categoria: "limpeza",
      imagem_url: "produtos/gel-sensibio-bioderma.jpg",
      link_compra: "https://link.amazon/B07fnB8tT",
      gatilho: { sensibilidade: 10, ressecamento: 5 }
    },
    {
      id: "p23",
      nome: "Óleo Demaquilante Cleansing Oil Bioderma",
      categoria: "limpeza",
      imagem_url: "produtos/cleansingoil-bioderma.jpg",
      link_compra: "https://link.amazon/B0bnYgR9U",
      gatilho: { textura: 8, oleosidade: 5 }
  },
  {
      id: "p24",
      nome: "Sabonete Líquido Uniform & Matte Garnier",
      categoria: "limpeza",
      imagem_url: "produtos/sabonete-uniformmatte-garnier.jpg",
      link_compra: "https://link.amazon/B00PRkPNC",
      gatilho: { manchas: 7, oleosidade: 7 }
  },
  {
      id: "p25",
      nome: "Gel de Limpeza Purified Skin Neutrogena",
      categoria: "limpeza",
      imagem_url: "produtos/geldelimpeza-purified-neutrogena.jpg",
      link_compra: "https://link.amazon/B06jPAuv4",
      gatilho: { sensibilidade: 10 }
  },
// --- NOVOS PRODUTOS: TRATAMENTO (SÉRUNS E ÁCIDOS) ---
  {
      id: "p26",
      nome: "Sérum Hidratante Anti-Idade Hyaluronic Concentrate ISDIN",
      categoria: "serum",
      imagem_url: "produtos/se-isdin-antiidade.jpg",
      link_compra: "https://link.amazon/B00UuqFjM",
      gatilho: { acne: 10, antiidade: 8 }
  },
  {
      id: "p27",
      nome: "Sérum Ácido Lático Principia",
      categoria: "serum",
      imagem_url: "produtos/se-acdlatico-principia.jpg",
      link_compra: "https://link.amazon/B00aw420y",
      gatilho: { textura: 10, sensibilidade: 6 }
  },
  {
      id: "p28",
      nome: "Sérum Salicyli C10 La Roche-Posay",
      categoria: "serum",
      imagem_url: "produtos/se-salicylic10-laroche.jpg",
      link_compra: "https://link.amazon/B0eKM4UbQ",
      gatilho: { antiidade: 8, manchas: 7 }
  },
  {  
      id: "p29",
      nome: "Solução Peeling AHA 30% + BHA 2% The Ordinary",
      categoria: "serum",
      imagem_url: "produtos/peeling-ahabha-theordinary.jpg",
      link_compra: "https://link.amazon/B0hzZYv4o",
      gatilho: { textura: 10, acne: 8 }
  },
  {
      id: "p30",
      nome: "Sérum Clareador Facial Ultraleve Antimanchas Eucerin",
      categoria: "serum",
      imagem_url: "produtos/se-antimanchas-eucerin.jpg",
      link_compra: "https://link.amazon/B02vqjVkM",
      gatilho: { manchas: 10 }
  },
// --- NOVOS PRODUTOS: HIDRATAÇÃO E REPARAÇÃO ---
  {
      id: "p31",
      nome: "Creme Hidratante Epidrat Calm Mantecorp",
      categoria: "Creme",
      imagem_url: "produtos/hidrat-epidratcalm-mantecorp.jpg",
      link_compra: "https://link.amazon/B07jdHTCA",
      gatilho: { sensibilidade: 10, ressecamento: 6 }
  },
  {
      id: "p32",
      nome: "Creme Calmante Multirreparador La Roche-Posay",
      categoria: "creme",
      imagem_url: "produtos/cremecalmante-larocheposay.jpg",
      link_compra: "https://link.amazon/B0htRAnzW",
      gatilho: { sensibilidade: 10, ressecamento: 8 }
  },
  {
      id: "p33",
      nome: "Creme Hidratante Effaclar H Iso-biome La Roche-Posay",
      categoria: "creme",
      imagem_url: "produtos/hidrat-effaclar-larocheposay.jpg",
      link_compra: "https://link.amazon/B0h7XJdnG",
      gatilho: { sensibilidade: 10 }
  },
  {
      id: "p34",
      nome: "Gel Hidratante Facial Antioleosidade La Roche-Posay",
      categoria: "creme",
      imagem_url: "produtos/hidrat-antioleosidade-larocheposay.jpg",
      link_compra: "https://link.amazon/B00HDP4Ge",
      gatilho: { oleosidade: 10, acne: 5 }
  },
  {
      id: "p35",
      nome: "Sérum Rejuvenescedor Facial Ivy C Mantecorp",
      categoria: "serum",
      imagem_url: "produtos/se-ivyc-mantecorp.jpg",
      link_compra: "https://link.amazon/B0g3Sw3mt",
      gatilho: { antiidade: 10, manchas: 5 }
  },

// --- NOVOS PRODUTOS: PROTEÇÃO SOLAR ---
  {
      id: "p36",
      nome: "Protetor Solar Episol Sec OC FPS 60 Mantecorp",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-episolsec-mantecorp.jpg",
      link_compra: "https://link.amazon/B0hVlMwIN",
      gatilho: { oleosidade: 10 }
  },
  {
      id: "p37",
      nome: "Protetor Solar Sun Fresh Neutrogena",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-sunfresh-neutrogena.jpg",
      link_compra: "https://link.amazon/B0f3dlTa2",
      gatilho: { oleosidade: 8, acne: 7 }
  },
  {  
      id: "p38",
      nome: "Protetor Solar Minesol Oil Control Neostrata",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-minesol-neostrata.jpg",
      link_compra: "https://link.amazon/B05hpVspM",
      gatilho: { oleosidade: 10, antiidade: 5 }
  },
  {
      id: "p39",
      nome: "Protetor Solar UV Defender L'Oréal",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-uvdefender-loreal.jpg",
      link_compra: "https://link.amazon/B0htWPFv2",
      gatilho: { ressecamento: 10, antiidade: 6 }
  },
  {
      id: "p40",
      nome: "Protetor Solar FotoUltra Spot Prevent ISDIN",
      categoria: "protetor",
      imagem_url: "produtos/protsolar-spotprevent-isdin.jpg",
      link_compra: "https://link.amazon/B0hU2nst3",
      gatilho: { manchas: 10, antiidade: 7 }
  }
  ]
};