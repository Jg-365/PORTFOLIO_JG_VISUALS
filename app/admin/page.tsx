import Link from "next/link";

export default function AdminPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Painel JGVisuals</h1>
      <div className="glass rounded-2xl p-6">
        <p className="text-white/75">Gerencie projetos, conteúdos principais e destaques visuais.</p>
        <Link href="/admin/projetos/novo" className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-black">
          Novo projeto
        </Link>
      </div>
    </section>
  );
}
