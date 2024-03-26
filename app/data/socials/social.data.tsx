import { ISocials } from './social.interface'
import Facebook from '@/app/assets/images/icon-facebook.svg'
import Telegram from '@/app/assets/images/icon-telegram.svg'
import Linkedin from '@/app/assets/images/icon-linkedin.svg'
import Instagram from '@/app/assets/images/icon-instagram.svg'
import GitHub from '@/app/assets/images/icon-github.svg'

export const socials: ISocials[] = [
  {
    name: 'telegram',
    link: 'https://t.me/vladislav_27',
    img: Telegram,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/vlad-aparin-dev',
    img: Linkedin,
  },
  {
    name: 'gitHub',
    link: 'https://github.com/stinex',
    img: GitHub,
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/vlad_aparin',
    img: Instagram,
  },
  {
    name: 'facebook',
    link: 'https://fb.com/aparin.vladislav27',
    img: Facebook,
  },
]
