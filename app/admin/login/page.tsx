"use client";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createBrowserSupabaseClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : "Login realizado com sucesso.");
  };

  return (
    <div className="mx-auto max-w-md py-20">
      <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-8">
        <h1 className="text-2xl font-medium">Acesso Admin</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 p-3" placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 p-3" placeholder="Senha" />
        <button className="w-full rounded-lg bg-white p-3 text-black">Entrar</button>
        {message ? <p className="text-sm text-white/70">{message}</p> : null}
      </form>
    </div>
  );
}
