import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const rawData = {
      name: formData.get("name"),
    };

    if (!rawData.name) return "Please enter your name.";

    cookies().set("name", rawData.name as string);

    redirect(`/platform/start`);
  }

  return (
    <main className="min-h-screen p-24 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl font-medium leading-[1.2] tracking-tight">
          Greetings,
        </h1>
        <p className="text-5xl font-medium leading-[1.2] tracking-tight">
          Let us get started!
        </p>
      </div>
      <form action={handleSubmit}>
        <input
          required
          name="name"
          autoComplete="off"
          type="text"
          placeholder="What's your name?"
          className="border-b-2 text-5xl font-medium border-zinc-400/10 bg-transparent focus:border-zinc-400/50 outline-none text-zinc-500"
          autoFocus
        />
      </form>
    </main>
  );
}
