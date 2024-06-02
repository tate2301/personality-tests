import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Start - Personality test",
};

export default function Start() {
  const name = cookies().get("name");

  if (!name?.value) return redirect("/");

  return (
    <main className="min-h-screen p-24 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl font-medium leading-[1.2] tracking-tight">
          Hi there, {name.value}.
        </h1>
        <p className="text-5xl font-medium text-zinc-500 leading-[1.2] tracking-tight">
          Start your personality test?
        </p>
      </div>
      <div>
        <Link href={"/platform/1"}>
          <button className="h-[48px] flex space-x-4 items-center rounded-full font-semibold bg-[#DBDBDB] py-2 px-6">
            Start test now
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </button>
        </Link>
      </div>
    </main>
  );
}
