import { FC, useState } from 'react'
import { IJob } from '@/app/data/job/job.interface'
import { fromatDate } from '@/app/utils/format-date'

import styles from './Experience.module.scss'
import HorizontalLine from '../horizontal-line/HorizontalLine'

interface IJobItem {
  job: IJob
}

const Experience: FC<IJobItem> = ({ job }) => {
  const [read, setRead] = useState(false)

  return (
    <>
      <div className={styles.item}>
        <div className={styles.data} onClick={() => job.desc.length > 0 && setRead(!read)}>
          {fromatDate(job.data_start) + ' — ' + fromatDate(job.data_end)}
        </div>
        <div className={styles.company} onClick={() => setRead(!read)}>
          <div className={styles.name}>{job.job_name}</div>
          <div className={styles.job_title}>{job.job_title}</div>
        </div>
        <div className={`${styles.description} ${!read ? '' : styles.read}`}>
          <ul>
            {job.desc.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </div>
        {job.desc.length > 0 && (
          <div className={styles.btn} onClick={() => setRead(!read)}>
            {!read ? 'Watch' : 'Close'}
          </div>
        )}
      </div>
      <HorizontalLine />
    </>
  )
}
export default Experience
