import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import  Navbar  from "./navbar/navbar"
import Landing from "./landingpage/landing";


export const meta = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main>
      <Navbar/>
      <Landing/>
      
    </main>
  );
}
