"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AuthPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <div className="mb-10">
        <Image src="/logo.png" alt="3rd-AI" width={140} height={40} style={{ width: "        <Image src="/logo.png"           <Ima           <Image src="/logox-w-sm rounded-2xl b        <Image src="/logo.png" [0.03] p-8">
        <p className="mb-1 text-sm        <p className="mb-1 text-sm 0.3em] text-cyan-400">
          Private Access
                                             -2                                             -2as                          </h1>                                             -me="space-y-4">
          <          <         pe          <             value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoFocus
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors         rd            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3text-r        Incorrect password. Pl            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors         rd            className="w-full rounded-xl border bord hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? "Checking..." : "Access Site"}
          </button>
        </form>
      </div>
      <p className="mt-8 text-xs text-slate-600">
        © 2026 3rd-AI Limited · Private Preview
      </p>
    </div>
  );
}
