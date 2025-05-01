// app/dashboard/page.js
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import DashboardPage from "@/app/_components/UI/DashboardPage"; // 👈 your existing UI component

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const token = cookies().get("jwt")?.value;

  if (!token) {
    redirect("/login?error=unauthenticated");
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    return <DashboardPage />;
  } catch (err) {
    redirect("/login?error=invalid_token");
  }
}
