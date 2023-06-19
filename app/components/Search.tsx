"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center gap-2 md:max-w-6xl">
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-full rounded-lg p-2 text-black"
      />
      <button
        type="submit"
        className="rounded-lg bg-slate-300 p-2 duration-150 hover:bg-slate-400">
        🚀
      </button>
    </form>
  );
}
