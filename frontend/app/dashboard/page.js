import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import DashboardPage from "@/app/_components/UI/DashboardPage";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  if (!token) {
    redirect("/login?error=unauthenticated");
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);

    return <DashboardPage />;
  } catch (err) {
    redirect("/login?error=invalid_token");
  }
}
