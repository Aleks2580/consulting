import styles from "./services.module.css";

const servicesData = [
  { id: 1, name: "Market Analysis", description: "In-depth market research and analysis to identify growth opportunities and emerging trends." },
  { id: 2, name: "Strategy Development", description: "Custom strategy formulation to help clients achieve sustainable competitive advantage." },
  { id: 3, name: "Operational Improvement", description: "Enhanced operational strategies to streamline processes and increase efficiency." },
  { id: 4, name: "Risk Management", description: "Comprehensive risk assessment and mitigation plans to safeguard business interests." },
  { id: 5, name: "Change Management", description: "Guided strategies and frameworks to manage organizational change smoothly and effectively." },
  { id: 6, name: "Digital Transformation", description: "Digital strategies to leverage technology for improved business performance and innovation." },
  { id: 7, name: "Financial Advisory", description: "Expert financial planning and analysis to optimize investment and increase returns." },
  { id: 8, name: "Regulatory Compliance", description: "Strategic compliance solutions to meet industry standards and regulatory requirements." },
];
export default function Cases() {
  return (
    <section className={styles.services_section}>
      <h2 className={styles.section_title}>Our Services</h2>
      <p className={styles.section_text}>
        We collaborate with a diverse clientele, from leading
        global firms to up-and-coming industry entrants. Our
        team is committed to providing valuable insights and customized
        strategies to meet the unique needs of each client.
      </p>
      <div className={styles.services_grid}>
        {servicesData.map((caseItem) => (
          <div key={caseItem.id} className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
                <h3>{caseItem.name}</h3>
              </div>
              <div className={styles.flip_card_back}>
                <p>{caseItem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
