import { ProjectSheetData } from "@/app/sheet";

export const projects: ProjectSheetData[] = [
  {
    year: "2023",
    title: "Unified sales engine",
    description:
      "Redesigned the end-to-end sales journey to bring clarity, consistency, and control to commercial operations. The project reduced human error, eliminated duplicated workflows, and gave the company a scalable foundation for pricing governance.",
    image: "/assets/img/work-one.png",
    caseStudy: {
      intro:
        "Redesigned the end-to-end sales journey to bring clarity, consistency, and control to commercial operations. The project reduced human error, eliminated duplicated workflows, and gave the company a scalable foundation for pricing governance.",
      meta: [
        { label: "Year", value: "2023" },
        { label: "My role", value: "Product Designer" },
        { label: "Segment", value: "HR" },
        { label: "Client", value: "Confidential" },
        { label: "Impact", value: "USD 700k/year" },
      ],
      coverImage: "/assets/img/work-one.png",
      sections: [
        {
          title: "Overview",
          body: [
            "This sales operation had to integrate multiple internal systems to configure deals, apply discounts, and generate proposals. Over time, rules became inconsistent, and the quoting flow was hard to audit.",
            "We rebuilt the experience around a single source of truth for pricing, with clearer steps, fewer exceptions, and guardrails that prevent invalid configurations.",
          ],
        },
        {
          title: "AS-IS",
          body: [
            "The quoting flow was spread across tools, with manual copy/paste and repeated validation. Small changes could break combinations, and there was no clear visibility of what impacted pricing.",
          ],
          bullets: [
            "Multiple handoffs between tools to assemble a quote.",
            "Frequent rework due to missing validations and duplicated steps.",
            "Lack of transparency on pricing logic and discount governance.",
          ],
          images: [
            {
              src: "/assets/img/work-one.png",
              alt: "Legacy quoting flow",
              caption: "Legacy flow (representative).",
            },
          ],
        },
        {
          title: "Initial research",
          body: [
            "We interviewed sales ops and account executives, mapped the end-to-end journey, and analyzed where errors were introduced. We also audited discount rules and product constraints used by different squads.",
          ],
        },
        {
          title: "Understanding how sales actually happened",
          body: [
            "Instead of following the documented process, teams were using shortcuts to meet deadlines. We designed for the real workflow, keeping compliance constraints but reducing friction for everyday quoting.",
          ],
          images: [
            {
              src: "/assets/img/work-one.png",
              alt: "Workflow mapping",
              caption: "Workflow mapping (representative).",
            },
          ],
        },
        {
          title: "Solution – Strategy driven by design",
          body: [
            "We introduced a guided configurator with progressive disclosure. Each step surfaces only relevant options, validates constraints early, and makes the pricing and discount logic explicit.",
            "We also created a governance layer to keep rules consistent across squads and allow changes without breaking existing quotes.",
          ],
          bullets: [
            "Guided configuration with early validations.",
            "Clear breakdown of price, discounts, and final totals.",
            "Reusable components to scale new products and add-ons.",
          ],
        },
        {
          title: "Conclusion",
          body: [
            "The redesign established a scalable foundation for pricing governance, reduced duplicated workflows, and increased confidence in proposal accuracy.",
          ],
        },
      ],
    },
  },
  {
    year: "2022",
    title: "Benefits configurator",
    description:
      "Built a modular product configurator to assemble plans, HR products, and add-ons faster, cutting quoting time and keeping teams aligned on available combinations.",
    image: "/assets/img/work-one.png",
  },
  {
    year: "2021",
    title: "Workforce insights hub",
    description:
      "Delivered an analytics hub to track engagement and performance trends, harmonizing metrics across squads and improving leadership reporting cadence.",
    image: "/assets/img/work-one.png",
  },
];
