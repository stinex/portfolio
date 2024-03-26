import { FC } from 'react'

import { ISkills } from '@/app/data/skills/skills.inteface'

import styles from './SkillItem.module.scss'

export const SkillItem: FC<ISkills> = ({ name }) => {
  return <span className={styles.item}>{name}</span>
}
