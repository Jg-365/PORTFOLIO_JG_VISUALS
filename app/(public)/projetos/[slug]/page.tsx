import { notFound } from "next/navigation";
import { mockProjects } from "@/lib/data/mock-projects";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = mockProjects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">{project.category}</p>
        <h1 className="text-5xl font-semibold tracking-tight">{project.title}</h1>
        <p className="max-w-2xl text-lg text-white/70">{project.subtitle}</p>
      </header>
      <div className="glass rounded-3xl p-8">
        <p className="text-white/80">{project.full_description}</p>
      </div>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="glass rounded-2xl p-6"><h3>Desafio</h3><p className="text-sm text-white/70">{project.challenge}</p></div>
        <div className="glass rounded-2xl p-6"><h3>Solução</h3><p className="text-sm text-white/70">{project.solution}</p></div>
        <div className="glass rounded-2xl p-6"><h3>Processo</h3><p className="text-sm text-white/70">{project.creative_process}</p></div>
      </section>
    </article>
  );
}
