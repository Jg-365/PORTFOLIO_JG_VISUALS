import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em]">JGVisuals</Link>
        <nav className="flex gap-6 text-sm text-white/70">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
