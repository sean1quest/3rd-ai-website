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
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <div className="mb-10">
        <Image src="/logo.png" alt="3rd-AI" width={140} height={40} style={{ width: "140px", height: "auto" }} />
      </div>
      <div clas Name="w-full m      <div clas Name="w-full m      <div10 bg      <div clas Name="w-full m      <die="mb-      <div clas Name=ld uppercase      <div clas Name="w-full m             <div clas Name="w-full m      <div c <h1 c      <div clas Name="w-full m      <diext-wh      <div clas Name="w-full m      <div clas N    </h1>
        <form onSubmit=        <form onSubmit=        <form onSubmit   <        <form o   type="        <form onSubm  value={password}
                                           targe                                                                 targe        autoFocus
            className="w-full rounded-xl   rder border-white/10 bg-black/40 px-4 p           it            clasxt-sla            className="nsition- olors focus:bord            className="w-full rounded-xl   rder border-white/10 bg-black/40 pxext-sm text-r            className="w-fulPlease try again.</p>
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
