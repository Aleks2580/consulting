import styles from "./cases.module.css"


const casesData = [
  { id: 1, name: 'Case 1', description: 'Description for Case 1' },
  { id: 2, name: 'Case 2', description: 'Description for Case 2' },
  { id: 3, name: 'Case 3', description: 'Description for Case 3' },
  { id: 4, name: 'Case 4', description: 'Description for Case 3' },
  { id: 5, name: 'Case 5', description: 'Description for Case 3' },
  { id: 6, name: 'Case 3', description: 'Description for Case 3' },
  { id: 7, name: 'Case 3', description: 'Description for Case 3' },
  { id: 8, name: 'Case 3', description: 'Description for Case 3' },
];

export default function Cases() {
  return (
    <section className={styles.cases_section}>
    <h2 className={styles.section_title}>Cases</h2>
    <div className={styles.cases_grid}>
      {casesData.map((caseItem) => (
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
    
  )
}
