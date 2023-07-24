import { auth } from "@/auth";
import Login from "./login";
import Logout from "./logout";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <div>{`session: ${JSON.stringify(session, null, 2)}`}</div>
      <Login />
      <Logout />
    </main>
  );
}
