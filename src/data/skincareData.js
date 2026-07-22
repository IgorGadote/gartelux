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
      imagem_url: "/produtos/cerave-geldelimpeza.jpg",
      link_compra: "https://www.amazon.com.br/CeraVe-Limpeza-Facial-Hialurônico-Niacinamida/dp/B07XP6N3BC/ref=sr_1_3?__mk_pt_BR=ÅMÅŽÕÑ&crid=1WWJCO0ZTLDTB&dib=eyJ2IjoiMSJ9.u9UdRA9dD94BIV1y3o4Z5fBwmroy1IwyX2nI7VNPx2F4EhK4Cu1GL0ooZRWJPuHKlrDI4pRKtjxJv9G2oQid0QQYZIqoRfG_1hR4QKk0m1YYT873NFUaMCRSfkRXkFvr7TjtpmKOoLFBuYhmPOdVDe88Q8KLhiC_9CCvZ722ATTGmoZj3uHItjrm2bXRTJZQqIRqMFcoX3J3qpXBy1RYdQmG7_hGgX2hEBFOrlVskP0AgRQpY5sdGuMku7lH8T6uw898du6wHNbAiSXVbjyhoFSsiInV55Ylo1db-wCx-pM.lJ8MMa1C8HQTlIMmcD9fKUSECkpbTy7xZHIUl4D2gJs&dib_tag=se&keywords=Gel%2Bde%2BLimpeza%2BCeraVe%2B(Pele%2BNormal%2Ba%2BOleosa)&qid=1784683182&sprefix=isdin%2Caps%2C305&sr=8-3&th=1",
      gatilho: { oleosidade: 8 }
    },
    {
      id: "p2",
      nome: "Loção de Limpeza Hidratante CeraVe",
      imagem_url: "/produtos/cerave-hidrat.jpg",
      link_compra: "https://www.amazon.com.br/CeraVe-Hidratante-Hialurônico-Niacinamida-Textura/dp/B096XPFVLL/ref=sr_1_12?__mk_pt_BR=ÅMÅŽÕÑ&crid=4IEXHT0LZ7ER&dib=eyJ2IjoiMSJ9.6HbUC0sRfmJm5fwO-7zpJujsJ6jyhG6W9PdblB5NNPe081HMpphoOyiCkfLJquf7UFY35qd4LNq6RLoeNQR_7WjalVHAXnm_itBXJkbnl0dHTnKFPF6DapwhJdhlI2Mf-u-yGDyMzG_J-SqBxok4IeeRVTiR_y8m3-lsVV2gd6bHGIRxj34fdAU_1F3XWp1NkKOQ-ACFqw0oPxmH351NevGdSIKF7932g1waBGu8dmmlw18O4jfk7F2vaR9AXvk0xyHqUwsoULRzfz3-mS4XCUEMivckb4UACiXNLSdcVcY.JukR5a95U1Dt2YlLyp363qAnbzsItiKKlafzyaEa2VA&dib_tag=se&keywords=Loção+de+Limpeza+Hidratante+CeraVe&qid=1784685246&sprefix=protetor+solar+eucerin+pigment+control%2Caps%2C253&sr=8-12",
      gatilho: { ressecamento: 8 }
    },
    {
      id: "p3",
      nome: "Sabonete Líquido Actine (Darrow)",
      imagem_url: "produtos/sabliquido-actine-darrow.jpg",
      link_compra: "https://www.amazon.com.br/Actine-Sabonete-Liquido-140-DARROW/dp/B079VSCS12/ref=sr_1_3?__mk_pt_BR=ÅMÅŽÕÑ&crid=3EJEC8DQYOY0V&dib=eyJ2IjoiMSJ9.6nAc5lzWFgC6zkp0O2kcJT6VENf8me8M0Lj77dxaGfty031cdoY70YiZpILgRlhSmmd42XrRdu_QHQw8ZKqWJnA44V_r-u3DE6ox1DH4T_riRMGAxhnDO5MMoW8JlSmtuPaB31BUtOs0L4SybbyUweXnDlFg8ShTLecPGwcUZ5K-1WDaNWAcqI-9jiG_qC0rJGfcfnKCIrRi3pFklcBOu1XUX-RGB6sloJbQMyXtw06Nj09EMDROARnN9ZdlQz22z3DKhcL5FUI3gYDFHYD3gNwfN5eDVknUZf14qHkZpOs.Mb8Tvy3RaDXyvJNWYm9NnXciQX3v53jOndhIqbp0H3o&dib_tag=se&keywords=Sabonete+Líquido+Actine+%28Darrow%29&qid=1784685329&sprefix=loção+de+limpeza+hidratante+cerave%2Caps%2C229&sr=8-3&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9I",
      gatilho: { acne: 7, oleosidade: 7 }
    },
    {
      id: "p4",
      nome: "Cetaphil Loção de Limpeza (Pele Sensível)",
      imagem_url: "produtos/locdelimpeza-cetaphil.jpg",
      link_compra: "https://www.amazon.com.br/Cetaphil-Loção-Limpeza-Facial-300ml/dp/B079VWY2QZ/ref=sr_1_7?__mk_pt_BR=ÅMÅŽÕÑ&crid=QSUTIQ4O02S6&dib=eyJ2IjoiMSJ9.DR-xX1ECAj4IIegRIW3HJqBR7zW3uajHRIjv301d46_LexZqAW4EHOfp4Xwrs2ExBPQCrTQO13P46p2x018LlzyuZe9BgU6enX4jGvnuEjsGkmzD8CVMpCQQ3Cnuq-E6r-s0T1d3DBYbKum-3tQogDOyDXpJMTn5f8qCk3VPQhJqBi7ZunDynpPGXqAAfPukdrxCSijWJJtDqzygvOvX8OJ59ZvakyIc1nOFRpoklL-y42v-wMoPLDnYnJU3IZ0IpXD7JFcrRf5_6vI-WqJd0AssLErS3LePjUwDzmVIShY.H89mBVWskK-OutFh11PlAjn8HWd_-44dvVYTBy_02-o&dib_tag=se&keywords=Cetaphil%2BLoção%2Bde%2BLimpeza%2B(Pele%2BSensível)&qid=1784685471&sprefix=cetaphil%2Bloção%2Bde%2Blimpeza%2Bpele%2Bsensível%2B%2Caps%2C203&sr=8-7&th=1",
      gatilho: { sensibilidade: 8 }
    },

    // --- TRATAMENTO (SÉRUNS E ÁCIDOS) ---
    {
      id: "p5",
      nome: "Sérum Ácido Salicílico Principia",
      imagem_url: "/produtos/se-acd-salicilico.jpg",
      link_compra: "https://www.amazon.com.br/Mix-01-Niacinamida-Glicólico-Tranexâmico-Salicílico/dp/B0939SHBP8/ref=sr_1_4_mod_primary_new?__mk_pt_BR=ÅMÅŽÕÑ&crid=X6PSHR16H86F&dib=eyJ2IjoiMSJ9.Zvc7QanKJVuMdA84o-FZIlSCb8HcEE1cu3-Yp81PKWDqLjdYmofsa84NKqjCC25llOa0QswDII4riKKcX2YXuSFyYs370BoxtuspGfJy34Z_oBhZefpfEAXFm89GpTx_Z5nK0pKgsuCDP3RsFTRERR0fZOAdVH9aileMBE8-Uz1KqHeQzDndeFRHQWWPqRUsE0jqBuSXDvwbPX0XHlZSaRml3tR7K59oLyGVh7OyVWwZF5QvWp8TxpxKRumPkJ7QPVlLVUTTaB1blywIyc3vbt1HzrXsrf8Y_SDym3VhWwY.k8sHRyvPoxmwfsGGBcEwwX7OrY9v29EBY_39gvUfMlg&dib_tag=se&keywords=serum+niacinamida+principia&qid=1784685806&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=sérum+niacinamida+principia%2Caps%2C202&sr=8-4",
      gatilho: { acne: 10 }
    },
    {
      id: "p6",
      nome: "Sérum Niacinamida Principia",
      imagem_url: "produtos/se-niacinamida-principia.jpg",
      link_compra: "https://www.amazon.com.br/Sérum-Nc-10-Principia-Niacinamida-Zinco/dp/B08R7RSJFX/ref=sr_1_3?__mk_pt_BR=ÅMÅŽÕÑ&crid=X6PSHR16H86F&dib=eyJ2IjoiMSJ9.Zvc7QanKJVuMdA84o-FZIlSCb8HcEE1cu3-Yp81PKWDqLjdYmofsa84NKqjCC25llOa0QswDII4riKKcX2YXuSFyYs370BoxtuspGfJy34Z_oBhZefpfEAXFm89GpTx_Z5nK0pKgsuCDP3RsFTRERR0fZOAdVH9aileMBE8-Uz1KqHeQzDndeFRHQWWPqRUsE0jqBuSXDvwbPX0XHlZSaRml3tR7K59oLyGVh7OyVWwZF5QvWp8TxpxKRumPkJ7QPVlLVUTTaB1blywIyc3vbt1HzrXsrf8Y_SDym3VhWwY.k8sHRyvPoxmwfsGGBcEwwX7OrY9v29EBY_39gvUfMlg&dib_tag=se&keywords=serum+niacinamida+principia&qid=1784685702&sprefix=sérum+niacinamida+principia%2Caps%2C202&sr=8-3",
      gatilho: { manchas: 5, oleosidade: 4 }
    },
    {
      id: "p7",
      nome: "Sérum Revitalift Ácido Hialurônico (L'Oréal)",
      imagem_url: "produtos/se-revitalift-acdhialuronico.jpg",
      link_compra: "https://www.amazon.com.br/Facial-Revitalift-Hialurônico-LOréal-Paris/dp/B08HXPQYPR/ref=sr_1_6?__mk_pt_BR=ÅMÅŽÕÑ&crid=1D79RF52WTDWW&dib=eyJ2IjoiMSJ9.T76FuDnXoKjNz3_hkIrRPCjjKt8Bqz6NgRUMhCLLXyX8yWZJlHpNIL36Jf2B0eFHncixlNUX-4B58WDj_CmRCK3sOc-unc40jJxb-73l-DoGI7lDdMAIeHW2_eKCuu8G15KMJgIwpDl2LFWrjeVzBs9Kt6YfDFSbEeKFKyaQrf2pQAufeuPHfyagcqQZlf6gascoHzzBop5P4Q9P_qX4H6T8GPAnZkzXo0E8udVSXQnFAclHybBW4hgk23eGhwc9XSUON2z_hrtIxwpDVJLElqHJelP3ecVMXbUOlD6zE6w.38DcUwkWvpqZfh6AFXMB-GvQhwA-2JZDk_csjyQpw5I&dib_tag=se&keywords=Sérum+Revitalift+Ácido+Hialurônico+%28L%27Oréal%29&qid=1784686188&sprefix=serum+niacinamida+principia%2Caps%2C277&sr=8-6",
      gatilho: { ressecamento: 5, antiidade: 5 }
    },
    {
      id: "p8",
      nome: "Sérum Retinol Puro (L'Oréal)",
      imagem_url: "produtos/se-retinolpuro-loreal.jpg",
      link_compra: "https://www.amazon.com.br/Antirrugas-LOréal-Paris-Revitalift-Retinol/dp/B0B46TH84S/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=3K7VKTNIW0HQB&dib=eyJ2IjoiMSJ9.XGAiN1_D1akbIRE-9b72oQ97p8ps11MUqQ64daCrVMIqZnm6bJass1C-HLcQ1ZiZlIaUgK-4M2K7X5jRkllMNdv2PNtAwKe28rhhG6qMIZnfGp1KOpO1KKuLe8XmCj8cYp4NnQu-TB_Kvh1BAbbdpYd7LKzG59PYWsVf7sa-T_U_3m5P_Gjd-HmkwSvItISbBh9ul8Wj3MnO_ekPU1EMmImhLi7bOkqX8xXFcdMe8edXuyVyF-Bbl8-TuHTwbTauR8HrFj5lW6_X4fpLAYY4nIYdJJrHeNiqYh_oivi9CwA.DfFE5GhPx5G0hHCnpKMWFTUdHJORe7weduizbM820lY&dib_tag=se&keywords=serum%2Bretinol%2Bpuro%2B(l%27oréal)&qid=1784686344&sprefix=sérum%2Bretinol%2Bpuro%2Bl%27oréal%2B%2Caps%2C224&sr=8-2&th=1",
      gatilho: { antiidade: 10 }
    },
    {
      id: "p9",
      nome: "Vitamina C 10 Principia",
      imagem_url: "produtos/se-vitC.jpg",
      link_compra: "https://www.amazon.com.br/Principia-Sérum-Vitamina-C-10/dp/B09WC8Q5H3/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=18AYHYVVJ19FV&dib=eyJ2IjoiMSJ9.df6ipcpbfO0ifQ4dDYywc6DgG9Jat86PoRTZcd8L50QjrlLV-m2727HTnIxJncqmOJuenEl4aQO1-UZTl2PNjfRBFq3ETm43FNDy1aYzhTrwb6PP6eUZg4F_ntCdqWAiCps4gBxRjoDENMKaMugqYKEFVYoafardIsLLSMxLBrBALGP3ioV4Z2GP7CMoj8i90a9UMnvNgH7WVWjVBE_lqHjp0SBbNym_q8FqlO34b_RvSW-bti9TSHsOIkvGr_EROSyK8Y3sTPhbrfZrgcvYKtaXY4bhPWLFGhnJ2TUNcv8.Ah6K7KyGZ_VfFKX63eC5FkmHPpDR0_yWq012yNSd2zE&dib_tag=se&keywords=Vitamina+C+10+Tracta&qid=1784686480&sprefix=serum+retinol+puro+l%27oréal+%2Caps%2C212&sr=8-1",
      gatilho: { manchas: 8 }
    },
    {
      id: "p10",
      nome: "Ácido Glicólico Creamy",
      imagem_url: "produtos/acd-glicolico-creamy.jpg",
      link_compra: "https://www.amazon.com.br/Creamy-Ácido-Glicólico/dp/B098FG3M3V/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=1HN6C1AEJSSZ9&dib=eyJ2IjoiMSJ9.F-S4PaVXhRw9h7S5xQ_rU7crCL3ATG7BeuSodn_SqOee24sfq9psnPBlV2ttDbbQv5eG6CQqSPh1bcebe9OZJoG4stioaWca1TfnrytdEY24rHCVYmS7XyKm_ZyIjJZUpwE_IG5pIDjiA6_yVrz8WvpoiFcz8oEJ5A_QDvJvgvu6aMcohk58v8hipvvH8q-L1JShM-KZs5YBgL5sd8VnAsK_Z3xIlqbKIJRxpU8tRHiLIk8vKZ29jkjc3aBcwaPG3Jl5SQDGeSxxulfpG1OYw39iJT13VhFnq9GYK-KCg84.2Kfk1iYe1WWMADRVX40PR44ccWdsgpv2kWOy9CcdfnY&dib_tag=se&keywords=Ácido+Glicólico+Creamy&qid=1784686616&sprefix=ácido+glicólico+creamy%2Caps%2C214&sr=8-2",
      gatilho: { textura: 10 }
    },
    {
      id: "p11",
      nome: "Ácido Mandélico Creamy",
      imagem_url: "produtos/acd-mandelico-creamy.jpg",
      link_compra: "https://www.amazon.com.br/Creamy-Ácido-Mandélico-30g/dp/B098CF44X7/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=1YVNSK8Z7YE86&dib=eyJ2IjoiMSJ9.L5o05TmxhSQ8sWU2CCWGNOo4CAfJL9TxI01Y6wz_65Ktw-IYAGseZ0-YP4j5IA-xwkZzdmDmtjTAOBnNs2byy6mERcnxUR0UHsKj9TG5R9GNCGGK8EFyZFyU3JdlnvycHO0JScdksjJFHGoeWspMMh2aA-70uZBBYqoDF1P13hAQQfzoKjxF29AcaJaPWus9AHtb9VIod-UKi8iTPLgU3qoHZ8IL9euS6tkh8bY73-hZ0SEPR1vMxrTPHwdWrwTcpiTL8A7ovpSv71IKBPT-PxL3hEhy54eZ3iwhC1FwDms.OzS3dxzLUJJVDmKAA2wZThlxWd-feKpx_oN2PKRzyoA&dib_tag=se&keywords=Ácido+mandelico+Creamy&qid=1784686715&sprefix=ácido+mandelic+creamy%2Caps%2C196&sr=8-2",
      gatilho: { manchas: 8, sensibilidade: 6 }
    },

    // --- HIDRATAÇÃO E REPARAÇÃO ---
    {
      id: "p12",
      nome: "Hidratante Neutrogena Hydro Boost Water Gel",
      imagem_url: "produtos/hidrat-hydroboostwatergel-neutrogena.jpg",
      link_compra: "https://www.amazon.com.br/Hidratante-Facial-Neutrogena-Hydro-Boost/dp/B06XQ27YLL/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=S1AR7P7226TR&dib=eyJ2IjoiMSJ9.ESf2tM8UGFct0Bo9RfOWs2oIG-HdE3Z6TrSvhnW2IG7kUEvdnY-YTRoFZzceUG5PEKckY1UY04FSbQrG0MSQCYqJ4ZatfVqqQ9XRWvM2TEHZzeS7kW6zX97jhw-Nzx4ZLRUSSzgLcYmiHLPIkiM_hFrelABYSiEEp-PeP-Wsh6W0ZoQR_FsuA6gjhUhHB4AIaKuYPw9knH9WlLCPCAR51Q_ygjvO2VYuartcH9L4eY8WfmUj2iiXi2sF6Wa5HIGQQMpFPBcdZMbpOurEIBhC3Ov51RoK9pMogg8EiTBq9Sg.ImFcqHQszqsl7QPGljIRmrTf9kG73Sx5jBz3Bqbq9Ik&dib_tag=se&keywords=Hidratante%2BNeutrogena%2BHydro%2BBoost%2BWater%2BGel&qid=1784686776&sprefix=hidratante%2Bneutrogena%2Bhydro%2Bboost%2Bwater%2Bgel%2Caps%2C214&sr=8-2&th=1",
      gatilho: { oleosidade: 5, ressecamento: 5 }
    },
    {
      id: "p13",
      nome: "Creme Hidratante CeraVe",
      imagem_url: "produtos/cremehidrat-cerave.jpg",
      link_compra: "https://www.amazon.com.br/Hidratante-Facial-CeraVe-Water-Hialurônico/dp/B0GV1JNJ3S/ref=sr_1_9?__mk_pt_BR=ÅMÅŽÕÑ&crid=37JYDMDOYWTGA&dib=eyJ2IjoiMSJ9.YguzOQt2Pk_NaUAOHY176v2UQmjTaaxd-RsRikC8cle1R6Xt9uqHd4U-9wrsF_EYZPna5TPaiiNYYRNE0dnknnGTNPg-Nd--LEzDh4N2nSAT4Vedkeeg9qW1f7vrSMhfxzFJJ4ivpcvXexlsMDqfyqY690PpH0tTKo6mRmqX27EjiZBiryNPV8TfaHPd94uXFF0ztmuV5xdJK4H4hnObLDPKgMQE7Clj-heV6F_lZ33ETlunbyROvjMwVQtegVZmLWZ78_vjS7XJ8WlBRRNm8H9-e9eU6KUYaCDk6vIYIko.NZC0LyDcp02C3gJC6PSWbNhz93zGyvq4a72_dTuAII8&dib_tag=se&keywords=Creme+Hidratante+facial+CeraVe&qid=1784686899&sprefix=creme+hidratante+facial+cerave%2Caps%2C199&sr=8-9",
      gatilho: { ressecamento: 10 }
    },
    {
      id: "p14",
      nome: "Creme Hidratante Minéral 89 Vichy",
      imagem_url: "produtos/hidrat-mineral89-vichy.jpg",
      link_compra: "https://www.amazon.com.br/Hidratante-Hialuronico-Esqualano-Vitamina-Minerais/dp/B0C3SJ2RK5/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=2D9IIQB0ZFFJP&dib=eyJ2IjoiMSJ9.LfnggEPMOtKj6jAXxg0iE5nvlwrVwh13iszPxPvvcdM2cdGDqiZZUAmjUXfb4MBbUM2vOVOHEdMAlT_4rrG2u5wJGu6SYxXjrWWEvaCOJtk3cjZ33i7i1tdXQZQhkwXoOLn10mj8ANBORab64jnKp_ghgaNY27iMPQ7TUUKwkYolFzHvjGKyI6SYYCk1Lr_T7WzUH4ciSJNUqs-che6tyC6jdENdPsEbBr7K-FQ7fcrHTD0hLu8y6aqqCZXmxbUiCYLnt4lyt7ecCBUT6sHBuXzZ2u8x8e1_VDMs9-xdH8s.Z8vnUsKZ3s5pk7vHioj9SOCh9H00xwMTA8p13bBn5w8&dib_tag=se&keywords=Minéral+89+Vichy&qid=1784687011&sprefix=creme+hidratante+facial+cerave%2Caps%2C223&sr=8-2&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d",
      gatilho: { sensibilidade: 5, ressecamento: 4 }
    },
    {
      id: "p15",
      nome: "Cicaplast Baume B5 (La Roche-Posay)",
      imagem_url: "produtos/cicaplastbaumeb5-larocheposay.jpg",
      link_compra: "https://www.amazon.com.br/Roche-Posay-Cicaplast-Cuidado-Multirreparador-Calmante/dp/B072MK7BN2/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=3EZHVDV83QXVC&dib=eyJ2IjoiMSJ9.-IpYw543QVYt790VMq2QaPpupxO-71mG2f75YkWQQeVdfo-FViwihIQHIK5YO1ogpIh645y_uCJ4fO66VJdZ3FynA1o3h1UEw77NRpAgVjC2G_kNhcj0CJI4XdFCP0sQrko6vjf-b3mr0YPz2r9CYEBKUj8AXMlwEow7DIb_AbyHzTO1S_MlAbBmIKsNZ5pj2hWDjlKDwBiZaXxSWogdjI11-bPgR-tNY5KCClWQAIclNr9AtC3pCDbWKpLle8Ud0VhWFM5duwKTy26fq32peNk-SUWBzdhJBBhDzZG8-JE.Np_YUYIBpFtmEft1lQWLWbNnktf-96jHQTEEf-3lUc8&dib_tag=se&keywords=Cicaplast%2BBaume%2BB5%2B(La%2BRoche-Posay)&qid=1784687204&sprefix=cicaplast%2Bbaume%2Bb5%2Bla%2Broche-posay%2B%2Caps%2C207&sr=8-1&th=1",
      gatilho: { sensibilidade: 10 }
    },
    {
      id: "p16",
      nome: "Creme Reparador para os Olhos CeraVe",
      imagem_url: "produtos/cremereparador-paraolhos-cerave.jpg",
      link_compra: "https://www.amazon.com.br/CeraVe-Creme-Reparador-olhos-Hialurônico/dp/B00JJPMXDO/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=2QX167AIJ3DJ&dib=eyJ2IjoiMSJ9.8U5gxBuXH69gHp187wWa0eNubNgi8FBs-8CwWW1Dke1JkLQ6LBMob4fDWmhnl1xZ7_7N3J1vMdI7DTnHP-ozMzZ2WRdTuLjPPPicEVSvJb1TELXtj-RyzTZLT1qMGSojm2yB6dZ-y7b31BRAFFOdbyPis88DJDMVf1A8ZgaZr0bZ760xRabZeUiTcWjlJpBF0jNt7slmJeJsWF_mUYancvmQvxWcnDAwd18td2PbGJZCvlzpkpC-TFmyUua3myox0SNuiPFdnZxw4JiAUdiDrNdbP68IepqJND-OycOv7hY.aXjmTyShMVCQXWH0oMOvesgwglfzvX5SadaiNWvJ2fE&dib_tag=se&keywords=Creme%2BReparador%2Bpara%2Bos%2BOlhos%2BCeraVe&qid=1784687332&sprefix=creme%2Breparador%2Bpara%2Bos%2Bolhos%2Bcerave%2Caps%2C205&sr=8-2&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1",
      gatilho: { olheiras: 10 }
    },

    // --- PROTEÇÃO SOLAR ---
    {
      id: "p17",
      nome: "Protetor Solar Anthelios Airlicium (La Roche-Posay)",
      imagem_url: "produtos/protsolar-atheliosaircilium.jpg",
      link_compra: "https://www.amazon.com.br/Roche-Posay-Anthelios-Airlicium-Antioleosidade-Oleosidade/dp/B0BJ347WND/ref=sr_1_5?__mk_pt_BR=ÅMÅŽÕÑ&crid=25OQ4VJGV8RP4&dib=eyJ2IjoiMSJ9.kHdYE-dJWu9pFgv7CqLhCkOLVzhQrLMCD-36HT6z7fEwzcd9Y8i2aMh0yyHLv62VqQKzztY6NAbrn9kZ51n8uJnoAQaXuOyXGD5bs1TmDi_pTpuSyGk461em7TdgrPe4tszhfVKPy_M20qgHOBh22kYXTKdLNdI8FcA9rB4gTB-eSaIA2ir1s6sVTLTr3EEPMFv0SiHSWhAS6lP-ZX-pBaQ6gAl4pVE9V36ivF3MTkl-wvCIU2jHL_fsJkb4ukAc-KheEaIkcPFcW4fmpXECLuyyt2dKzSSKukOU0tpxN6U.6HlYKYqVcu1CiAKX65qvlXrOBBD_hB-QhRGzI5saTKw&dib_tag=se&keywords=Protetor+Solar+Anthelios+Airlicium+%28La+Roche-Posay%29&qid=1784684495&sprefix=protetor+solar+anthelios+airlicium+la+roche-posay+%2Caps%2C198&sr=8-5",
      gatilho: { oleosidade: 10 }
    },
    {
      id: "p18",
      nome: "Protetor Solar Bioré UV Aqua Rich",
      imagem_url: "produtos/protsolar-bioreuv-aquarich.jpg",
      link_compra: "https://www.amazon.com.br/Protetor-Solar-Bioré-Watery-Essence/dp/B0C1CDRVJC/ref=sr_1_6?__mk_pt_BR=ÅMÅŽÕÑ&crid=39T1VNROV76WW&dib=eyJ2IjoiMSJ9.q4CZ99BtU8DM76-nkGTuX-ppfFFleJtF8EXk0gkHehk-gmxxc4GTuKR-ffWYuj9pPuoPgVDbH2pBV-m_3e45cF8gBmzZgIu3MX0KF0Nf0ekE5DV-gLqooWYVnuVli354NPkh9ZQELUiwpoLo_sxwpM9waGKrtOuQKxZ1aGBmdo8pEhlpooGDxNhUcvw_4ntxTb_gpDM51Afnlj2zrftNcHlizophQFQlXw3cmaVDBnAcnIodJ3Lqb2g1SyynZOJdRvHI1Fj02en6T6YARfsr-XpbpOIUxAadMQlYNbImsOA.G7pMPP2tpdK6fo5011H3tQ1IDLJGiSY-8ayKSWYtN7Q&dib_tag=se&keywords=Protetor+Solar+Bioré+UV+Aqua+Rich&qid=1784684267&sprefix=protetor+solar+bioré+uv+aqua+rich%2Caps%2C204&sr=8-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      gatilho: { ressecamento: 7 }
    },
    {
      id: "p19",
      nome: "Protetor Solar ISDIN Fusion Water 50",
      imagem_url: "produtos/protsolar-fisionwater50-isdin.jpg",
      link_compra: "https://www.amazon.com.br/Fotoprotetor-Isdin-Fusion-Water-ISDIN/dp/B08F864LDD/ref=sr_1_7?__mk_pt_BR=ÅMÅŽÕÑ&crid=2E8QJLRWT57ZS&dib=eyJ2IjoiMSJ9.TddS9CJQn_hAbECb5J4PlwFAph08hAwgQGliDWA-UC_HU3mbLd6WDTEi9Bz1iDG6RKhj15_VDlkRQbajC9bj32e2kVMezzsg8v-gCGK83ToUrDAVsH7AYgoYpgy-nE5MMM3ecz_uDxuVjA5IbnezrAxWhLQwnvUudHA1YNzzDHhtj4E94oR_DYN15-FgofqpMMcL5SReYoaD76pBarRZKCEvVxqkrzVIC6FexMcf3zLbg2395f2IBdR5PpKAksH2wdWn0GdLgSXUxEsRVb-KzHfwaJzM15feGD6k0bTEB_w.NejTUi2z47GqzibRlI1FPH1G1T6G6uy__iW01DdW2_w&dib_tag=se&keywords=Protetor+Solar+ISDIN+Fusion+Water+50&qid=1784684842&sprefix=protetor+solar+isdin+fusion+water+50%2Caps%2C215&sr=8-7",
      gatilho: { sensibilidade: 4, oleosidade: 4 }
    },
    {
      id: "p20",
      nome: "Protetor Solar Eucerin Pigment Control",
      imagem_url: "produtos/protsolar-pigmentcontrol-eucerin.jpg",
      link_compra: "https://www.amazon.com.br/Eucerin-Pigment-Control-Fluido-Protetor/dp/B08128RCWK/ref=sr_1_1_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=Z42RZ5FO3Q0H&dib=eyJ2IjoiMSJ9.skNbZXBOgtyG3u_u_4CYJrpPKEf5z9zOw3rlSY6s4_dXlYaOwSfSH3KkCirxabUfnPS_U8QAnescq9UQ2kfGw3ps1GRTPYooTAB0pI_mK14ukMyHw1gQ__frtYPPCZZ_1I6WNf9vf0TCpn1IJ-XtcjsDHiBWQ7Y6mKv5m3iT159X5GRGF2sxV2OKP6iXYt7aBBgeZ0NY6L5fRwWJ0CWloaO8tmfzqAIxIOyYqFoKm-DKX7SWyDMjjC4HwxprI_QttU7QUk-WwNlQnfG1HbDdIqkLHAVKZxHzUc7UIxy4ZV0.YiKPXHd1JflM0Kq_qd6F33bhdQOkboDMmyiIFQZyoWg&dib_tag=se&keywords=Protetor+Solar+Eucerin+Pigment+Control&qid=1784685101&sprefix=protetor+solar+isdin+fusion+water+50%2Caps%2C274&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      gatilho: { manchas: 10 }
    }
  ]
};