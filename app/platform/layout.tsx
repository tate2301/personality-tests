import { AnswersContextProvider } from "@/context/AnswersContext";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const name = cookies().get("name");

  if (!name?.value) return redirect("/");

  return (
    <AnswersContextProvider name={name.value}>
      {children}
    </AnswersContextProvider>
  );
}
