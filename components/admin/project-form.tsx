"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, type ProjectInput } from "@/lib/schemas/project";

export function ProjectForm({ mode }: { mode: "create" | "edit" }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProjectInput>({
    resolver: zodResolver(projectSchema),
    defaultValues: { title: "", slug: "", subtitle: "", category: "Branding", tags: [], year: new Date().getFullYear(), tools: [], gallery_images: [], featured: false, published: true, order_index: 0 }
  });

  const onSubmit = async (values: ProjectInput) => {
    await fetch("/api/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    alert(mode === "create" ? "Projeto criado" : "Projeto atualizado");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-4 rounded-2xl p-6">
      <input {...register("title")} placeholder="Título" className="rounded-lg border border-white/10 bg-white/5 p-3" />
      <input {...register("slug")} placeholder="Slug" className="rounded-lg border border-white/10 bg-white/5 p-3" />
      <textarea {...register("short_description")} placeholder="Descrição curta" className="rounded-lg border border-white/10 bg-white/5 p-3" />
      <textarea {...register("full_description")} placeholder="Descrição completa" className="rounded-lg border border-white/10 bg-white/5 p-3" />
      <button disabled={isSubmitting} className="rounded-lg bg-white p-3 text-black">{mode === "create" ? "Criar" : "Salvar"}</button>
      {Object.keys(errors).length ? <p className="text-sm text-red-300">Valide os campos obrigatórios.</p> : null}
    </form>
  );
}
