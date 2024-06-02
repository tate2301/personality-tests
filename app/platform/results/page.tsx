import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Test() {
  const name = cookies().get("name");

  if (!name?.value) return redirect("/");

  return (
    <main className="min-h-screen p-24 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl font-medium leading-[1.2] tracking-tight">
          Hey {name.value}
        </h1>
        <p className="text-5xl font-medium leading-[1.2] tracking-tight text-zinc-500 text-balance">
          We are analyzing your answers, please wait a moment
        </p>
      </div>
    </main>
  );
}
