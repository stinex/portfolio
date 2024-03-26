import { learning, skills, working } from '@/app/data/skills/skills.data'
import HorizontalLine from '../horizontal-line/HorizontalLine'
import { SkillItem } from './skill-item/SkillItem'

import styles from './Skills.module.scss'

export const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skills_wrapper}>
        <h4 className={styles.title}>My stack:</h4>
        <div className={styles.skills}>
          {skills.map((skill) => {
            return <SkillItem key={skill.name} name={skill.name} />
          })}
        </div>
      </div>
      <HorizontalLine />

      <div className={styles.skills_wrapper}>
        <h4 className={styles.title}>I worked with:</h4>
        <div className={styles.skills}>
          {working.map((skill) => {
            return <SkillItem key={skill.name} name={skill.name} />
          })}
        </div>
      </div>
      <HorizontalLine />

      <div className={styles.skills_wrapper}>
        <h4 className={styles.title}>I am learning:</h4>
        <div className={styles.skills}>
          {learning.map((skill) => {
            return <SkillItem key={skill.name} name={skill.name} />
          })}
        </div>
      </div>
    </div>
  )
}
