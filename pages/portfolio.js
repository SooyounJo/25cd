import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import PageHeader from "@/components/portfolio/PageHeader";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import Skills from "@/components/portfolio/Skills";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Portfolio() {
  const portfolioItems = [
    {
      imageSrc: "/2d/pro1.png",
      imageAlt: "브랜드 아이덴티티 디자인 프로젝트",
      title: "브랜드 아이덴티티 디자인",
      description: "모던하고 미니멀한 브랜드 아이덴티티를 통한 시각적 커뮤니케이션",
      tags: ["Branding", "Logo Design"]
    },
    {
      imageSrc: "/2d/pro2.png",
      imageAlt: "웹사이트 UI/UX 디자인 프로젝트",
      title: "웹사이트 UI/UX 디자인",
      description: "사용자 중심의 직관적인 인터페이스와 매끄러운 사용자 경험",
      tags: ["UI/UX", "Web Design"]
    },
    {
      imageSrc: "/2d/pro3.png",
      imageAlt: "패키지 디자인 프로젝트",
      title: "패키지 디자인",
      description: "제품의 가치를 전달하는 창의적이고 실용적인 패키지 솔루션",
      tags: ["Package Design", "Product"]
    },
    {
      imageSrc: null,
      imageAlt: "",
      title: "편집 디자인",
      description: "타이포그래피와 레이아웃을 통한 효과적인 정보 전달",
      tags: ["Editorial", "Typography"]
    },
    {
      imageSrc: null,
      imageAlt: "",
      title: "모바일 앱 디자인",
      description: "모바일 환경에 최적화된 인터페이스와 사용자 경험",
      tags: ["Mobile App", "Interface"]
    },
    {
      imageSrc: null,
      imageAlt: "",
      title: "일러스트레이션",
      description: "독창적인 스타일과 감성으로 표현하는 시각적 스토리텔링",
      tags: ["Illustration", "Art"]
    }
  ];

  return (
    <>
      <Head>
        <title>조수연 - 포트폴리오</title>
        <meta name="description" content="조수연의 디자인 포트폴리오입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navigation currentPage="portfolio" />

        <main className={styles.main}>
          <PageHeader 
            title="포트폴리오"
            subtitle="창의적인 디자인과 혁신적인 아이디어로 만든 작품들을 소개합니다."
          />

          <PortfolioContent portfolioItems={portfolioItems} />

          <Skills />
        </main>

        <Footer />
      </div>
    </>
  );
}