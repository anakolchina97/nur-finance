import { Inter } from "@next/font/google";
import Container from "@/components/Container";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
