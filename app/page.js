import { redirect } from "next/navigation";
import { DEFAULT_CURRENCY } from "@/lib/currencies";

export default function Home() {
  redirect(`/${DEFAULT_CURRENCY}`);
}
