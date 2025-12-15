export const home = {
  header: {
    logoAlt: "Leonardo",
    nav: {
      home: "Início",
      projects: "Projetos",
      contactMe: "Fale comigo",
    },
  },
  hero: {
    avatarAlt: "Retrato do Léo",
    title: "Olá, meu nome é Léo!",
    subtitle:
      "Product Designer baseado no Brasil, ajudando empresas a transformar experiência do usuário em impacto de negócio mensurável desde 2016.",
    ctas: {
      contactMe: "Fale comigo",
      checkMyWork: "Ver meus trabalhos",
    },
    scrollHintAriaLabel: "Role para ver mais",
  },
  works: {
    title: "Trabalhos selecionados",
    projects: {
      "unified-sales-engine": {
        title: "Motor de vendas unificado",
        description:
          "Redesenho da jornada de vendas ponta a ponta para trazer clareza, consistência e controle para a operação comercial. O projeto reduziu erros humanos, eliminou fluxos duplicados e deu base escalável para governança de preços.",
      },
      "benefits-configurator": {
        title: "Configurador de benefícios",
        description:
          "Construí um configurador modular para montar planos, produtos de RH e add-ons mais rápido, reduzindo o tempo de cotação e mantendo os times alinhados nas combinações disponíveis.",
      },
      "unified-sales-engine-copy": {
        title: "Motor de vendas unificado (cópia)",
        description:
          "Versão de teste/rascunho do projeto para validação de layout e conteúdo no portfolio.",
      },
      "workforce-insights-hub": {
        title: "Hub de insights de workforce",
        description:
          "Entreguei um hub de analytics para acompanhar tendências de engajamento e performance, padronizando métricas entre squads e melhorando a cadência de report para liderança.",
      },
    },
  },
  contact: {
    title: "Vamos falar sobre design?",
    cards: {
      email: {
        title: "E-mail",
      },
      phone: {
        title: "Telefone / WhatsApp",
      },
      linkedin: {
        title: "LinkedIn",
      },
    },
  },
  caseStudies: {
    "unified-sales-engine": {
      hero: {
        title: "Motor de vendas unificado",
        intro:
          "Redesenho da jornada de vendas ponta a ponta para trazer clareza, consistência e controle para a operação comercial. O projeto reduziu erros humanos, eliminou fluxos duplicados e deu base escalável para governança de preços.",
      },
      meta: {
        year: { label: "Ano", value: "2023" },
        role: { label: "Meu papel", value: "Product Designer" },
        segment: { label: "Segmento", value: "HR" },
        client: { label: "Cliente", value: "Confidencial" },
        impact: { label: "Impacto", value: "US$ 700k/ano" },
      },
      cover: {
        alt: "Capa do motor de vendas unificado",
      },
      sections: {
        overview: {
          title: "Visão geral",
          p1: "A operação de vendas de uma grande empresa de HR tech dependia de três softwares internos para configurar propostas, aplicar descontos e gerar termos de aceite. Essas ferramentas foram criadas originalmente para suportar diferentes cenários de venda, mas ao longo do tempo evoluíram separadamente, duplicando lógica e introduzindo inconsistências em como as regras eram aplicadas.",
          p2: "O projeto Unified Sales Engine teve como objetivo redesenhar esse ecossistema interno consolidando lógica, melhorando fluxos operacionais e prevenindo vazamentos recorrentes de receita identificados em relatórios comerciais mensais.",
          p3: "Com base em análise de dados, insights operacionais e workshops com stakeholders, buscamos criar uma experiência de vendas mais confiável, escalável e centralizada. O trabalho também visou permitir que times não técnicos gerenciassem produtos, regras de preço e permissões de venda sem depender de engenharia.",
          p4: "O resultado foi um ecossistema reestruturado composto por três novas ferramentas internas e uma interface de vendas redesenhada, alinhadas às regras de negócio e aos fluxos operacionais.",
        },
        asIs: {
          title: "AS-IS",
          p1: "O time de vendas era composto por quase 100 representantes divididos em oito equipes, cada uma com suas próprias metas, lógicas de negócio e regras de desconto. Para suportar essa estrutura, três softwares internos de vendas (calculadoras) foram construídos ao longo do tempo:",
          l1: "Uma ferramenta para cenários de upsell/cross-sell.",
          l2: "Uma ferramenta para aquisição de novos clientes.",
          l3: "Uma ferramenta para deals via parceiros.",
          p2: "Embora cada ferramenta tivesse um propósito distinto, elas compartilhavam similaridades, sobrepunham funcionalidades e podiam ser acessadas por qualquer vendedor. Não havia restrições embutidas garantindo que a ferramenta correta fosse usada no cenário correto.",
          p3: "À medida que essas ferramentas cresceram de forma independente, a organização começou a observar desvios entre o que as regras internas de precificação exigiam e o que as ferramentas permitiam. Esse descompasso gerava atrito operacional e perdas financeiras mensuráveis.",
          card: {
            title: "Usando o software",
            caption:
              "Software anteriormente usado para executar transações de vendas",
            steps: {
              p1: "Selecionar o produto — escolher o produto solicitado pelo cliente. O produto é hardcoded, então o usuário pode selecionar um produto que não está mais disponível.",
              p2: "Selecionar a quantidade de funcionários — informação que permite ao software calcular o preço da venda.",
              p3: "Desconto — podia acontecer como desconto no valor, nos 6 primeiros meses da mensalidade ou em ambas as opções (desconto sobre desconto).",
              p4: "Desconto na taxa de setup — o usuário define quanto será a taxa de setup.",
              p5: "Identificar o cliente — o ID do cliente é informado.",
              p6: "Gerar termo de aceite — o usuário gera um termo jurídico para assinatura do cliente.",
            },
            imageAlt:
              "Software anteriormente usado para executar transações de vendas",
          },
        },
        initialResearch: {
          title: "Pesquisa inicial",
          p1: "A fase de Discovery focou em três perspectivas:",
          p2: "1. Análise de dados: entender com que frequência deals eram configurados abaixo do preço mínimo interno, como taxas de implementação eram removidas e quanto vazamento de receita ocorria.",
          p3: "2. Diagnóstico operacional: mapear quantas horas eram gastas atualizando três codebases separados sempre que uma nova campanha iniciava ou um produto mudava.",
          p4: "3. Análise de comportamento: entender onde reps se confundiam, onde improvisações aconteciam e onde as ferramentas falhavam em guiar um comportamento compliance.",
          p5: "Essa pesquisa ajudou a esclarecer um problema sistêmico: regras críticas de negócio existiam na documentação, mas não eram aplicadas nas ferramentas que estruturavam o trabalho operacional do dia a dia.",
          images: {
            acceptanceTerms: {
              caption: "Termos de aceite",
              alt: "Termos de aceite",
            },
            deliveryMetrics: {
              caption: "Métricas de entrega",
              alt: "Métricas de entrega",
              description:
                "Nosso catálogo de produtos era totalmente hard-coded, o que significava que cada novo item ou atualização de preço exigia trabalho manual em design, QA e desenvolvimento. Nada poderia ser alterado sem intervenção de engenharia. Para entender o impacto operacional desse modelo, medimos quanto tempo a equipe gastava mantendo e atualizando produtos nos três calculadores. A análise deixou claro que mesmo ajustes rotineiros geravam uma carga de manutenção desproporcional para toda a equipe.",
              tasks: {
                addingNewProduct: "Adicionar novo produto",
                productEdits: "Edições de produto nos três calculadores",
              },
            },
          },
        },
        understanding: {
          title: "Entendendo como as vendas realmente aconteciam",
          p1: "Para entender o problema além de reclamações isoladas, reconstruí toda a jornada de vendas de ponta a ponta. Esse trabalho combinou shadowing com reps, análise das ferramentas operacionais e consolidação de regras informais que nunca haviam sido traduzidas para lógica de produto. O resultado foi uma visão completa de como uma venda realmente progredia, incluindo ações em cada etapa, decisões que os reps precisavam tomar e fricções do dia a dia.",
          journeyAlt: "Mapa da jornada de vendas",
          p2: "Ao quebrar o fluxo em etapas, ações, objetivos, pontos de dor e oportunidades, padrões comportamentais ficaram claros. Reps alternavam entre calculadoras por hábito, e não por regra. Checagens de elegibilidade que deveriam ser automatizadas eram feitas manualmente. A lógica de preço vivia em planilhas, conversas e memória institucional, em vez de estar dentro do produto. Pequenas inconsistências no início do fluxo amplificavam-se em desalinhamentos operacionais mais adiante.",
        },
        panel: {
          title: "Conectando comportamento e dados",
          asideTitle: "Detalhamento do vazamento financeiro (3 meses)",
          asideDescription:
            "Distribuição de receita perdida por descontos excessivos, taxas de implementação dispensadas e manutenção. Total R$ 936.180,00.",
          asideAlt: "Gráfico de detalhamento do vazamento financeiro",
          chartLegend: {
            waivedFees: "taxas de implementação dispensadas (67,3%)",
            discounts: "descontos abaixo do piso de produto (30,9%)",
            maintence: "Manutenção (1.8%)",
          },
          p1: "Os dados revelaram duas fontes paralelas de perda: vazamento de receita nas vendas e custo operacional excessivo para manter três ferramentas separadas.",
          p2: "Ao longo da análise de três meses, deals aprovados abaixo do preço mínimo e taxas de setup não cobradas representaram centenas de milhares em receita perdida — um padrão que, anualizado, ultrapassava sete dígitos.",
          p3: "Operacionalmente, manter as calculadoras exigia mais de 76 horas por ciclo de atualização, distribuídas entre 8 devs, 2 QAs e 2 designers, multiplicando esforço sempre que uma campanha ou produto mudava. Esse custo recorrente validou que o problema não era apenas vazamento financeiro, mas também um ecossistema estruturalmente ineficiente que escalava mal.",
          p4: "Em apenas três meses, a análise revelou uma concentração significativa de perdas financeiras vindas de taxas de implementação dispensadas e descontos excessivos. A perda total chegou a R$ 936.180,00 (US$ 180.035). Isso equivale a cerca de R$ 312.060,00 (US$ 60.012) por mês. Extrapolando para um ano, a perda seria de R$ 3.744.720,00 (US$ 720.138).",
          p5: "Esses problemas surgiram porque o sistema não aplicava regras de preço mínimo para produtos nem para taxas de setup. Na época, descontos eram aplicados sobre o valor total do deal em vez de por produto, o que permitia preços abaixo do piso e enfraquecia rastreabilidade e controle.",
        },
        solution: {
          title: "Solução — estratégia guiada por design",
          p1: "Com os principais problemas operacionais identificados, o time avançou com um redesenho completo do sistema interno de vendas. Antes, regras de produto eram hardcoded e descontos eram aplicados no valor total do deal, tornando impossível impedir vendas abaixo do piso do produto ou rastrear quando taxas de implementação eram removidas. Para resolver isso, criamos um novo Portfolio Manager, permitindo que liderança comercial configurasse produtos, regras de preço, pisos, tetos e taxas de implementação diretamente por uma interface, sem engenharia ou QA.",
          p2: "Essa estrutura garante que descontos não possam ir abaixo dos mínimos definidos e que taxas de implementação não possam mais ser removidas sem autorização, eliminando as fontes de vazamento de receita identificadas durante o discovery.",
          p3: "Em paralelo, o backend foi refatorado para dar rastreabilidade completa das negociações. Cada desconto passa a ser registrado no nível do produto e comportamentos de taxa de implementação são logados para auditoria. O sistema também aplica regras de elegibilidade, restringindo reps aos clientes que podem atender e prevenindo fluxos de negociação que não estejam em conformidade com políticas internas.",
          p4: "Essas mudanças consolidaram lógica duplicada, removeram intervenção manual e estabeleceram uma operação de vendas controlada, consistente e financeiramente segura.",
          images: {
            newSoftware: {
              caption:
                "Novo software — adicionando um produto e aplicando desconto",
              alt: "Novo software — adicionando um produto e aplicando desconto",
            },
            portfolioManager: {
              caption: "Portfolio manager — adicionando um novo produto",
              alt: "Portfolio manager — adicionando um novo produto",
            },
          },
        },
        conclusion: {
          title: "Conclusão",
          p1: "O redesenho do ecossistema de vendas demonstrou como complexidade operacional, regras dispersas e lógica duplicada podem gerar risco financeiro e organizacional de forma silenciosa. Ao centralizar regras de negócio, unificar o fluxo de vendas e permitir controle em tempo real sobre descontos e elegibilidade, a nova plataforma estabelece uma operação de vendas mais previsível, auditável e escalável.",
        },
      },
    },
  },
};
