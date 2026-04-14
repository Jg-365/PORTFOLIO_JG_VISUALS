import { ProjectInput } from "@/lib/schemas/project";

export const mockProjects: ProjectInput[] = [
  {
    id: "1f6e7a8f-7dbe-4ad4-a2f5-2fca1ad67211",
    slug: "aether-identity",
    title: "Aether Identity System",
    subtitle: "Sistema visual para marca tecnológica premium",
    cover_image: "",
    gallery_images: [],
    short_description: "Direção de arte com estética editorial e profundidade digital.",
    full_description: "Projeto completo de posicionamento visual, narrativa e design interativo para uma marca de inovação.",
    challenge: "Traduzir tecnologia em desejo de marca.",
    solution: "Construímos uma identidade modular, premium e cinemática.",
    creative_process: "Pesquisa, estratégia verbal, moodboards, prototipação e refinamento visual.",
    tools: ["Figma", "After Effects", "Blender"],
    category: "Branding",
    tags: ["premium", "identity", "tech"],
    featured: true,
    published: true,
    year: 2025,
    client: "Aether Labs",
    external_url: "",
    order_index: 1
  },
  {
    id: "733f3697-a08f-40e3-9729-4f5f6f0bb0ea",
    slug: "noctis-web-experience",
    title: "Noctis Web Experience",
    subtitle: "Landing imersiva com sensação de filme",
    cover_image: "",
    gallery_images: [],
    short_description: "Composição de layers, movimento sutil e narrativa sensorial.",
    full_description: "Experiência web de alto impacto para lançamento de produto criativo.",
    challenge: "Alto impacto sem perda de performance.",
    solution: "Arquitetura enxuta com motion progressivo e lazy loading.",
    creative_process: "Exploração de direção de arte + protótipos em framer motion.",
    tools: ["Next.js", "GSAP", "Framer Motion"],
    category: "Web Design",
    tags: ["immersive", "motion", "editorial"],
    featured: true,
    published: true,
    year: 2026,
    client: "Noctis",
    external_url: "",
    order_index: 2
  }
];
