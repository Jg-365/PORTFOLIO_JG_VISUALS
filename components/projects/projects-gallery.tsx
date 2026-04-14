"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { mockProjects } from "@/lib/data/mock-projects";

export function ProjectsGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => ["all", ...new Set(mockProjects.map((p) => p.category))], []);
  const filtered = mockProjects.filter((project) => {
    const searchHit = `${project.title} ${project.category} ${project.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    const catHit = category === "all" || project.category === category;
    return searchHit && catHit && project.published;
  });

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold">Galeria de projetos</h1>
      <div className="flex flex-wrap gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2" placeholder="Buscar por nome, categoria ou tag" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg border border-white/15 bg-black px-4 py-2">
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((project) => (
          <Link key={project.id} href={`/projetos/${project.slug}`} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-white/30">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">{project.category}</p>
            <h3 className="mt-2 text-xl">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70">{project.short_description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
