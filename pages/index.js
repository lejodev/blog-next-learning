import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      Hello dude
      <h1>
        <Link href="/posts/first-post">Posts</Link>
        <Image
          src="/images/profile.jpg"
          width={144}
          height={144}
          alt="userName"
        />
      </h1>
    </div>
  );
}
