const points = ["Direção autoral", "Qualidade internacional", "Stack moderna e escalável", "Execução orientada a detalhe"];
export function DifferentialsSection() {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6">
      <h2 className="text-3xl font-medium">Diferenciais</h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {points.map((point) => (
          <li key={point} className="glass rounded-xl p-5 text-white/75">{point}</li>
        ))}
      </ul>
    </section>
  );
}
