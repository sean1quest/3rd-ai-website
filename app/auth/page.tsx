"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function AuthPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? "/";

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
      router.push(from);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      {/* Logo */}
      <div className="mb-10">
        <Image src="/logo.png" alt="3rd-AI" width={140} height={40} style={{ width: "140px", height: "auto" }} />
      </div>

      {/* Card */}
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Private Access
        </p>
        <h1 className="mb-6 text-2xl font-semibold text-white">
          Enter password to continue
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoFocus
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-400/60"
          />

          {error && (
            <p className="text-sm text-red-400">Incorrect password. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-cyan-400 py-3 text-base font-semibold text-black transition-all hover:scale-[1.02] disabled:opacity-60"
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
