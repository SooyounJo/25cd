import styles from "@/styles/Home.module.css";

export default function AboutContent() {
  return (
    <section className={styles.aboutContent}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.contentSection}>
            <h2>우리의 비전</h2>
            <p>
              TechCorp는 기술의 힘으로 더 나은 미래를 만들어가는 것을 비전으로 합니다. 
              우리는 혁신적인 솔루션을 통해 고객의 성공을 돕고, 사회에 긍정적인 변화를 만들어갑니다.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2>우리의 미션</h2>
            <p>
              최첨단 기술과 창의적인 아이디어를 결합하여 고객에게 최고의 가치를 제공합니다. 
              우리는 지속적인 혁신과 품질 향상을 통해 업계를 선도하는 기업이 되고자 합니다.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2>핵심 가치</h2>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h4>혁신</h4>
                <p>끊임없는 연구개발과 새로운 아이디어로 미래를 준비합니다.</p>
              </div>
              <div className={styles.valueItem}>
                <h4>품질</h4>
                <p>최고 수준의 품질과 서비스를 제공하기 위해 노력합니다.</p>
              </div>
              <div className={styles.valueItem}>
                <h4>신뢰</h4>
                <p>고객과의 약속을 지키고 투명한 소통을 추구합니다.</p>
              </div>
              <div className={styles.valueItem}>
                <h4>협력</h4>
                <p>팀워크와 협력을 통해 더 큰 성과를 만들어갑니다.</p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2>회사 연혁</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <h4>회사 설립</h4>
                  <p>TechCorp가 설립되어 기술 혁신의 여정을 시작했습니다.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2021</div>
                <div className={styles.timelineContent}>
                  <h4>첫 번째 프로젝트 성공</h4>
                  <p>대규모 디지털 전환 프로젝트를 성공적으로 완료했습니다.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2022</div>
                <div className={styles.timelineContent}>
                  <h4>기술 혁신상 수상</h4>
                  <p>업계 최고의 기술 혁신상을 수상하며 인정받았습니다.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2023</div>
                <div className={styles.timelineContent}>
                  <h4>글로벌 진출</h4>
                  <p>해외 시장 진출을 통해 글로벌 기업으로 성장했습니다.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2024</div>
                <div className={styles.timelineContent}>
                  <h4>미래 기술 연구소 설립</h4>
                  <p>차세대 기술 연구를 위한 전용 연구소를 설립했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
