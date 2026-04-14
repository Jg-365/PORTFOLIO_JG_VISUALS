import { ProjectForm } from "@/components/admin/project-form";

export default function EditProjectPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Editar projeto</h1>
      <ProjectForm mode="edit" />
    </section>
  );
}
