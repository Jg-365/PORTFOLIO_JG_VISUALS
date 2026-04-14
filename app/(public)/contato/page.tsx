export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-6 py-20">
      <h1 className="text-4xl font-semibold">Contato</h1>
      <form className="glass space-y-4 rounded-3xl p-8">
        <input className="w-full rounded-xl border border-white/10 bg-white/5 p-3" placeholder="Nome" />
        <input className="w-full rounded-xl border border-white/10 bg-white/5 p-3" placeholder="Email" />
        <textarea className="h-36 w-full rounded-xl border border-white/10 bg-white/5 p-3" placeholder="Conte sobre seu projeto" />
        <button className="rounded-xl bg-white px-6 py-3 text-black">Iniciar conversa</button>
      </form>
    </section>
  );
}
