const services = ["Brand Systems", "Direction & Motion", "High-end Digital Experiences"];
export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6">
      <h2 className="text-3xl font-medium">Serviços</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((item) => (
          <div key={item} className="glass rounded-2xl p-6 text-white/80">{item}</div>
        ))}
      </div>
    </section>
  );
}
