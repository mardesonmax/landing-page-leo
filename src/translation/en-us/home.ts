import { ptBR } from "../pt-br";

export const home: (typeof ptBR)["translation"]["home"] = {
  header: {
    logoAlt: "Leonardo",
    nav: {
      home: "Home",
      projects: "Projects",
      contactMe: "Contact me",
    },
  },
  hero: {
    avatarAlt: "Portrait of Léo",
    title: "Hi there, my name is Léo!",
    subtitle:
      "Product Designer based in Brazil, helping companies transform user experience into measurable business impact since 2016.",
    ctas: {
      contactMe: "Contact me",
      checkMyWork: "Check my work",
    },
    scrollHintAriaLabel: "Scroll to see more",
  },
  works: {
    title: "Selected work",
    projects: {
      "unified-sales-engine": {
        title: "Unified sales engine",
        description:
          "Redesigned the end-to-end sales journey to bring clarity, consistency, and control to commercial operations. The project reduced human error, eliminated duplicated workflows, and gave the company a scalable foundation for pricing governance.",
      },
      "benefits-configurator": {
        title: "Benefits configurator",
        description:
          "Built a modular product configurator to assemble plans, HR products, and add-ons faster, cutting quoting time and keeping teams aligned on available combinations.",
      },
      "unified-sales-engine-copy": {
        title: "Unified sales engine (copy)",
        description: "Draft/test version used to validate layout and content.",
      },
      "workforce-insights-hub": {
        title: "Workforce insights hub",
        description:
          "Delivered an analytics hub to track engagement and performance trends, harmonizing metrics across squads and improving leadership reporting cadence.",
      },
    },
  },
  contact: {
    title: "Let's talk about design?",
    cards: {
      email: { title: "E-mail" },
      phone: { title: "Phone / WhatsApp" },
      linkedin: { title: "LinkedIn" },
    },
  },
  caseStudies: {
    "unified-sales-engine": {
      hero: {
        title: "Unified sales engine",
        intro:
          "Redesigned the end-to-end sales journey to bring clarity, consistency, and control to commercial operations. The project reduced human error, eliminated duplicated workflows, and gave the company a scalable foundation for pricing governance.",
      },
      meta: {
        year: { label: "Year", value: "2023" },
        role: { label: "My role", value: "Product Designer" },
        segment: { label: "Segment", value: "HR" },
        client: { label: "Client", value: "Confidential" },
        impact: { label: "Impact", value: "US$ 700k/year" },
      },
      cover: { alt: "Unified sales engine cover" },
      sections: {
        overview: {
          title: "Overview",
          p1: "The sales operation of a large HR tech company relied on three internal softwares to configure deals, apply discounts and generate acceptance terms. These tools were originally created to support different sales scenarios, but over time they evolved separately, duplicating logic and introducing inconsistencies in how rules were applied.",
          p2: "The Unified Sales Engine project aimed to redesign this internal ecosystem by consolidating logic, improving operational workflows and preventing recurring revenue leakage identified in monthly commercial reports.",
          p3: "Based on data analysis, operational insights and stakeholder workshops, the project sought to create a more reliable, scalable and centralized sales experience. It also aimed to provide non-technical teams with the ability to manage products, pricing rules and sales permissions without requiring engineering intervention.",
          p4: "The outcome was a restructured product ecosystem composed of three new internal tools and one redesigned sales interface, aligned with business rules and operational workflows.",
        },
        asIs: {
          title: "AS-IS",
          p1: "The company’s sales team consisted of nearly 100 representatives divided into eight teams, each with its own targets, business logic and discount rules. To support this structure, three internal sales softwares (calculator) had been built over time:",
          l1: "A tool for upsell/cross-sell scenarios.",
          l2: "A tool for new client acquisition.",
          l3: "A tool for partner-driven deals.",
          p2: "Although each tool had a distinct purpose, they shared similarities, overlapped in functionality and could be accessed by any rep. There were no embedded constraints ensuring that the correct tool was used for the correct sales scenario.",
          p3: "As these tools grew independently, the organization began observing deviations between what internal pricing rules required and what the tools allowed. This mismatch created operational friction and measurable financial losses.",
          card: {
            title: "Using the software",
            caption: "Software previously used to execute sales transactions",
            steps: {
              p1: "Select the product - select the product that the client request. The product is hard coded, so the user may select one product that is no longer available",
              p2: "Select the amount of employees - This is the information that allows the software a calcular o preço da venda.",
              p3: "Discount - It might happen as a discount on the amount, on the 6 firsts months da mensalidade or in both options, wich is discount at the discount.",
              p4: "Discount at the setup fee - user set up how much the setup fee is",
              p5: "Identfy  the client - ID of the client is provided",
              p6: "Generate acceptance term - User generate a juridic term to the user to be sign by the client.",
            },
            imageAlt: "Software previously used to execute sales transactions",
          },
        },
        initialResearch: {
          title: "Initial research",
          p1: "The Discovery phase focused on three perspectives:",
          p2: "1. Data analysis: Understanding how often deals were configured below internal minimum prices, how implementation fees were removed and how much revenue leakage occurred.",
          p3: "2. Operational diagnostics: Mapping how many hours were spent updating three separate codebases every time a new campaign launched or a product changed.",
          p4: "3. User behavior analysis: Understanding where sales reps experienced confusion, where improvisation happened and where tools failed to guide compliant behavior.",
          p5: "This research helped clarify a systemic problem: critical business rules existed in documentation but were not enforced in the tools that structured daily operational work.",
          images: {
            acceptanceTerms: {
              caption: "Acceptance terms",
              alt: "Acceptance terms",
            },
            deliveryMetrics: {
              caption: "Delivery metrics",
              alt: "Delivery metrics",
              description:
                "Our product catalog was fully hard-coded, which meant that every new item or pricing update required manual work across design, QA and development. Nothing could be changed without engineering intervention. To understand the operational impact of this model, we measured how much time the team spent maintaining and updating products across the three calculators. The analysis made clear that even routine adjustments generated a disproportionate maintenance burden for the entire squad.",
              tasks: {
                addingNewProduct: "Adding new product",
                productEdits: "Product edits across the three calculators",
              },
            },
          },
        },
        understanding: {
          title: "Understanding how sales actually happened",
          p1: "To understand the problem beyond isolated complaints, I reconstructed the entire sales journey end-to-end. This work combined shadowing sessions with sales reps, analysis of their operational tools, and consolidation of informal rules that had never been translated into product logic. The result was a complete view of how a sale actually progressed, including the actions taken at each stage, the decisions reps had to make, and the friction they routinely navigated.",
          journeyAlt: "Sales journey map",
          p2: "By breaking the workflow into steps, actions, goals, pain points and opportunities, clear behavioral patterns emerged. Reps switched between calculators based on habit rather than rule. Eligibility checks that should have been automated were done manually. Pricing logic lived across spreadsheets, conversations and institutional memory instead of inside the product. Small inconsistencies at the beginning of the flow consistently amplified into operational misalignment later.",
        },
        panel: {
          title: "Connecting Behavior and Data",
          asideTitle: "Financial Leakage Breakdown (3-Month Period)",
          asideDescription:
            "Distribution of revenue lost through excessive discounts, waived implementation fees, and maintence. Amount R$ 936.180,00.",
          asideAlt: "Financial leakage breakdown chart",
          chartLegend: {
            waivedFees: "waived implementation fees (67.3%)",
            discounts: "below-floor product discounts (30.9%)",
            maintence: "Maintence (1.8%)",
          },
          p1: "The data revealed two parallel sources of loss: revenue leakage in sales and excessive operational cost in maintaining three separate tools.",
          p2: "Across the three-month analysis, deals approved below the minimum price and unbilled setup fees represented hundreds of thousands in missed revenue — a pattern that, when annualized, surpassed seven figures.",
          p3: "Operationally, maintaining the calculators demanded over 76 hours per update cycle, distributed across 8 developers, 2 QAs and 2 designers, multiplying effort every time a campaign or product changed. This recurring cost validated that the problem was not only financial leakage in sales, but also a structurally inefficient ecosystem that scaled poorly.",
          p4: "In just three months, the analysis revealed a significant concentration of financial losses coming from waived implementation fees and excessive discounts. The total amount lost reached R$ 936,180.00 (US$ 180,035). Applied over just one quarter, this corresponds to roughly R$ 312,060.00 (US$ 60,012) per month. If extrapolated over a full year under the same conditions, the loss would amount to R$ 3,744,720.00 (US$ 720,138).",
          p5: "These issues emerged because the system did not enforce minimum pricing rules for either products or setup fees. At the time, discounts were applied over the entire deal amount rather than per product, which not only allowed below-floor pricing but also undermined traceability and control.",
        },
        solution: {
          title: "Solution - Strategy drived by design",
          p1: "With the main operational issues identified, the team moved forward with a complete redesign of the internal sales system. Previously, product rules were hard-coded and discounts were applied on the total deal, which made it impossible to prevent sales below the product floor or track when implementation fees were being waived. To address this, a new Portfolio Manager was created, enabling commercial leadership to configure products, pricing rules, floors, ceilings and implementation fees directly through an interface, without engineering or QA involvement.",
          p2: "This structure ensures that discounts cannot go below the defined minimums and that implementation fees can no longer be removed without authorization, eliminating the sources of revenue leakage identified during discovery.",
          p3: "In parallel, the backend was refactored to support full traceability of negotiations. Each discount is now registered at the product level, and implementation fee behaviors are logged for auditing. The system also enforces eligibility rules, restricting sales reps to clients they are allowed to handle and preventing negotiation flows that do not comply with internal policies.",
          p4: "These changes consolidated duplicated logic, removed manual intervention, and established a controlled, consistent and financially safe sales operation.",
          images: {
            newSoftware: {
              caption:
                "New software – Adding a product and applying a discount",
              alt: "New software – Adding a product and applying a discount",
            },
            portfolioManager: {
              caption: "Portfólio manager - Adding a new product",
              alt: "Portfólio manager - Adding a new product",
            },
          },
        },
        conclusion: {
          title: "Conclusion",
          p1: "The redesign of the sales ecosystem demonstrated how operational complexity, scattered rules and duplicated logic can silently generate financial and organizational risk. By centralizing business rules, unifying the sales flow and enabling real-time control over discounts and eligibility, the new platform establishes a more predictable, auditable and scalable sales operation.",
        },
      },
    },
  },
};
