import Link from "next/link";
import { mockProjects } from "@/lib/data/mock-projects";

export function FeaturedProjectsSection() {
  const featured = mockProjects.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-6">
      <h2 className="text-3xl font-medium">Projetos em destaque</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project) => (
          <Link key={project.id} href={`/projetos/${project.slug}`} className="glass group rounded-3xl p-6 transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">{project.category}</p>
            <h3 className="mt-3 text-xl">{project.title}</h3>
            <p className="mt-3 text-sm text-white/70">{project.short_description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
