

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Component from "@/components/login-btn";
import CheckOwnerButton from "@/components/checkButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     
      <main className={`${styles.main} ${inter.className}`}>
       <h1> HOLA GITHUB</h1>
       <Component/>
       <CheckOwnerButton/>
      </main>
    </>
  );
}
