import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Test() {
  return (
    <main className="min-h-screen p-24 max-w-5xl mx-auto">
      <div className="mb-24 flex flex-col gap-16">
        <div className="max-w-3xl bg-white/90 rounded-2xl overflow-hidden shadow">
          <div className="h-[56px] px-6 pb-0 bg-zinc-900/5 flex items-center justify-between">
            <p className="text-zinc-500 font-medium">
              <span className="text-[#121212] font-semibold">Question 1</span>{" "}
              of 5
            </p>
            <Link href={"/platform/start"} className="font-semibold">
              Restart session
            </Link>
          </div>
          <div className="p-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight leaidng-[1.2rem] mb-1">
                What is your favorite color?
              </h1>
              <p className="text-lg text-zinc-500 text-balance">
                Be honest in your response. This will help us to better
                understand your personality.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <button className="h-[48px] aspect-square rounded-full font-semibold bg-[#DBDBDB] border border-white/50">
            <ArrowLeftIcon className="w-6 h-6 mx-auto" />
          </button>
          <button className="h-[48px] rounded-full font-semibold bg-white/80 py-2 px-6 flex items-center">
            Next question <ArrowRightIcon className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>
    </main>
  );
}
