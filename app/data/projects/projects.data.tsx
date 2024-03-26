import { IProject } from './projects.interface'

import ImageProductOne from '@/app/assets/images/3.png'
import ImageProductTwo from '@/app/assets/images/4.png'
import ImageProductThree from '@/app/assets/images/1.png'
import ImageProductFour from '@/app/assets/images/2.png'
import ImageProductFive from '@/app/assets/images/5.png'
import ImageProductSix from '@/app/assets/images/6.png'



export const projects: IProject[] = [
  {
    name: 'Elevating Business Websites Through Audit, Strategyand Development',
    link: 'https://milehighwillow.com/',
    stack: ['react', 'next.js', 'typescript', 'tailwind', 'cms hygraph'],
    img: ImageProductFive,
  },
  {
    name: 'GRAND BUSINESS EVENT',
    link: 'https://www.gbeforce.com/',
    stack: ['react', 'next.js', 'typescript', 'tailwind', 'kommo crm'],
    img: ImageProductSix,
  },
  {
    name: '“МеталлДеталь” | Website for Trade & Production Company',
    link: 'https://detal-74.ru',
    stack: [
      'html',
      'react',
      'javascript',
      'next.js',
      'scss modules',
      'cms hygraph',
      'node.js',
      'nodemailer',
    ],
    img: ImageProductOne,
  },
  {
    name: 'Fujiiryoki | Website for a Japanese massage chair company',
    link: 'https://fujiiryoki.ru',
    stack: ['html', 'react', 'javascript', 'next.js', 'emaljs', 'scss'],
    img: ImageProductTwo,
  },
  {
    name: 'Ergonova | Online store of massage equipment',
    link: 'https://ergonova.ru',
    stack: ['html', 'angularjs', 'javascript', 'less'],
    img: ImageProductThree,
  },
  {
    name: 'MWT | Online store of goods for health & outdoor activities',
    link: 'https://mwt.ru',
    stack: ['html', 'angularjs', 'javascript', 'less'],
    img: ImageProductFour,
  },
]
