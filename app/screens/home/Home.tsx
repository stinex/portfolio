import { FC } from 'react'
import Image from 'next/image'

import { job } from '@/app/data/job/job.data'

import styles from './Home.module.scss'

import Layout from '@/app/layout/layout/Layout'
import Container from '@/app/components/container/Container'
import TitleScroll from '@/app/components/title-scroll/TextScroll'
import HorizontalLine from '@/app/components/horizontal-line/HorizontalLine'
import ListProjects from '@/app/components/list-projects/ListProjects'
import Experience from '@/app/components/experience/Experience'
import { socials } from '@/app/data/socials/social.data'
import { Skills } from '@/app/components/skills/Skills'
import { From } from '@/app/components/form/Form'

const Home: FC = () => {
  return (
    <Layout
      title="Portfolio"
      description="More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."
    >
      <div className={styles.wrapper}>
        <div className={styles.main_section}>
          <TitleScroll text="FRONTEND DEVELOPER &nbsp;" />
          <Container>
            <div className={styles.socials}>
              {socials.map((social) => {
                return (
                  <a
                    href={social.link}
                    key={social.name}
                    className={styles.social}
                  >
                    <Image src={social.img} alt={social.name} />
                  </a>
                )
              })}
            </div>
          </Container>
          {/* <Container>13212</Container> */}
        </div>
        <div className={styles.second_section} id="about">
          <Container>
            <HorizontalLine />
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.title}>
                  <span>A</span>
                  <span>B</span>
                  <span>O</span>
                  <span>U</span>
                  <span>T</span>
                  <span> </span>
                  <span>M</span>
                  <span>E</span>
                </div>
              </div>
              <div className={styles.block}>
                <p className={styles.description}>
                  Hello! My name is Vlad and I am a frontend developer with four
                  years of experience in commercial web development. During this
                  time, I have worked on websites of different scales, from
                  large online stores to landing pages.
                </p>
                <br />
                <p className={styles.description}>
                  I love writing code that efficiently solves the company's
                  problems. To do this, I am constantly improving my skills and
                  applying new technologies in projects.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.second_section} id="portfolio">
          <Container>
            <HorizontalLine />
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.title}>
                  <span>H</span>
                  <span>E</span>
                  <span>R</span>
                  <span>E</span>
                  <span> </span>
                  <span>A</span>
                  <span>R</span>
                  <span>E</span>
                  <br />
                  <span> </span>
                  <span>P</span>
                  <span>R</span>
                  <span>O</span>
                  <span>J</span>
                  <span>E</span>
                  <span>C</span>
                  <span>T</span>
                  <span>S</span>
                </div>
              </div>
              <div className={styles.block}>
                <ListProjects />
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.three_section} id="experience">
          <Container>
            <div className={styles.blocks}>
              <div className={styles.title}>
                <span>E</span>
                <span>X</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <span>I</span>
                <span>E</span>
                <span>N</span>
                <span>C</span>
                <span>E</span>
              </div>

              <div className={styles.experience}>
                <HorizontalLine />
                {job.map((item) => {
                  return <Experience key={item.job_name} job={item} />
                })}
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.four_section} id="skills">
          <Container>
            <div className={styles.blocks}>
              <div className={styles.title}>
                <span>S</span>
                <span>K</span>
                <span>I</span>
                <span>L</span>
                <span>L</span>
                <span>S</span>
              </div>
              <Skills />
            </div>
            <HorizontalLine />
          </Container>
        </div>
        <div className={styles.five_section} id="hire-me">
          <Container>
            <div className={styles.blocks}>
              <div className={styles.text}>
                <h2 className={styles.title}>When I work on a project, I:</h2>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    Finish it with pixel-perfect accuracy.
                  </li>
                  <li className={styles.li}>
                    Put in full effort whether working in the office or
                    remotely.
                  </li>
                  <li className={styles.li}>
                    Take responsibility for communication and task distribution
                    within small teams when required.
                  </li>
                  <li className={styles.li}>
                    Complete tasks on time and understand which tasks to
                    prioritize.
                  </li>
                  <li className={styles.li}>
                    Analyze tasks with interest, select the most advantageous
                    solutions to implement ideas.
                  </li>
                  <li className={styles.li}>
                    Quickly acquire necessary skills and successfully apply them
                    in practice.
                  </li>
                  <li className={styles.li}>
                    Am able to handle stress and quickly switch attention
                    between different tasks.
                  </li>
                  <li className={styles.li}>
                    Am always ready to listen to the opinions of other team
                    member.
                  </li>
                </ul>
                <p className={styles.p}>
                  <span>
                    I have developed a disciplined approach to individual tasks
                    and teamwork. If you are looking for an experienced frontend
                    developer, you have come to the right page.
                  </span>
                  <span className={styles.weight}> Just message me.</span>
                </p>
              </div>
              <div className={styles.form}>
                <From />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}
export default Home
