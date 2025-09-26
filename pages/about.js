import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/about/Navigation";
import Footer from "@/components/about/Footer";
import PageHeader from "@/components/about/PageHeader";
import AboutContent from "@/components/about/AboutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>회사소개 - TechCorp</title>
        <meta name="description" content="TechCorp의 비전, 미션, 그리고 팀에 대해 알아보세요." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navigation currentPage="about" />

        <main className={styles.main}>
          <PageHeader 
            title="회사소개"
            subtitle="혁신적인 기술로 세상을 변화시키는 TechCorp를 소개합니다."
          />

          <AboutContent />
        </main>

        <Footer />
      </div>
    </>
  );
}
