import { FC } from 'react'
import Image from 'next/image'

import { IProject } from '@/app/data/projects/projects.interface'

import styles from './ProjectItem.module.scss'

interface IProjectItem {
  project: IProject
}

const ProjectItem: FC<IProjectItem> = ({ project }) => {
  const setCursor = (e: any) => {
    if (window.innerWidth > 1024)
      document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
  }

  return (
    <a
      href={project.link}
      target="_blank"
      onMouseMove={(e) => setCursor(e)}
      className={styles.project}
    >
      <div className={styles.project_top}>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.stacks}>
          {project.stack.map((stack) => (
            <span key={stack} className={styles.stack}>
              {stack}
            </span>
          ))}
        </div>
        <div className={styles.cursor} id="cursor">
          <Image src={project.img} className={styles.img} alt={project.name} />
        </div>
      </div>

      <span className={styles.line}></span>
    </a>
  )
}
export default ProjectItem
