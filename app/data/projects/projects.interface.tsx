import { StaticImageData } from 'next/image'

export interface IProject {
  name: string
  link: string
  img: StaticImageData
  stack: string[]
}
