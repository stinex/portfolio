import React, { FC } from 'react'

import { projects } from '@/app/data/projects/projects.data'
import ProjectItem from './project-item/ProjectItem'

import styles from './ListProjects.module.scss'

const ListProjects: FC = () => {
  return (
    <div className={styles.list_projects}>
      {projects.map((project) => {
        return <ProjectItem key={project.link} project={project} />
      })}
    </div>
  )
}
export default ListProjects
