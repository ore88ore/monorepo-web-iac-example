"use client";
import { useState } from "react";

export function UuidClient({ initialUuid }: { initialUuid: string }) {
  const [currentUuid, setCurrentUuid] = useState(initialUuid);
  const [loading, setLoading] = useState(false);
  const handleRegenerate = async () => {
    setLoading(true);
    const res = await fetch("/api/generate-uuid");
    const data = await res.json();
    setCurrentUuid(data.uuid);
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-xl font-bold text-black dark:text-black p-10 rounded-xl shadow-lg bg-white/90 dark:bg-black/70 border-2 border-blue-200 dark:border-blue-700 transition-all flex flex-col items-center gap-4">
        <span>生成したIDは</span>
        <span className="text-blue-700 dark:text-blue-400 text-4xl font-mono font-extrabold select-all break-all tracking-wide">
          {currentUuid}
        </span>
        <span>です</span>
      </div>
      <button
        className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
        onClick={handleRegenerate}
        disabled={loading}
      >
        {loading ? "再生成中..." : "IDを再生成"}
      </button>
    </div>
  );
}
