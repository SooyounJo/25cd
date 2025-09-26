import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>TechCorp - 혁신적인 기술 솔루션</title>
        <meta name="description" content="최첨단 기술로 미래를 만들어가는 TechCorp입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navigation currentPage="home" />

        <main className={styles.main}>
          <Hero 
            title={
              <>
                미래를 위한<br />
                <span className={styles.accent}>혁신적인 기술</span>
              </>
            }
            description="최첨단 기술과 창의적인 아이디어로 세상을 변화시키는 TechCorp와 함께하세요."
            primaryButtonText="더 알아보기"
            primaryButtonLink="/about"
            secondaryButtonText="문의하기"
            secondaryButtonLink="/contact"
          />

          <section className={styles.features}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>우리의 강점</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <h3>혁신적인 기술</h3>
                  <p>최신 기술 트렌드를 선도하며 고객에게 최고의 솔루션을 제공합니다.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>전문적인 팀</h3>
                  <p>각 분야의 전문가들로 구성된 팀이 프로젝트를 성공적으로 완성합니다.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>신뢰성</h3>
                  <p>검증된 프로세스와 품질 관리를 통해 안정적인 서비스를 보장합니다.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
