import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'

import styles from './Form.module.scss'
import { useRef, useState } from 'react'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().max(500),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export const From = () => {
  const form = useRef<HTMLFormElement>(null)
  const [send, setSend] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {

    if (form.current == null) return

    emailjs
      .sendForm(
        'service_ffwfp72',
        'template_yrofeke',
        form.current,
        'k4ctjskJKXe6Fu9Yg'
      )
      .then(() => {
        setSend('active')

        setTimeout(() => {
          setSend('success')
        }, 2500)
      })
  }

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {send === null ? (
        <>
          <h3 className={styles.title}>Just message me</h3>

          <div className={styles.div}>
            <input
              className={styles.input}
              {...register('name')}
              placeholder="Your Name"
            />
            <p className={styles.errors}>{errors.name?.message}</p>
          </div>

          <div className={styles.div}>
            <input
              className={styles.input}
              {...register('email')}
              placeholder="Your Email"
            />
            <p className={styles.errors}>{errors.email?.message}</p>
          </div>

          <div className={styles.div}>
            <textarea
              className={styles.textarea}
              placeholder="Write a comment..."
              {...register('message')}
            ></textarea>
            <p className={styles.errors}>{errors.message?.message}</p>
          </div>

          <button type="submit" className={styles.submit} value="Submit">
            submit
          </button>
        </>
      ) : (
        <>
          <div
            className={`${styles.send} ${
              send === 'active'
                ? styles.active
                : send === 'success'
                ? `${styles.active} ${styles.success}`
                : ''
            }`}
          ></div>
          <h5
            className={`${styles.title_thanks} ${
              send === 'success' ? styles.success : ''
            }`}
          >
            Thank you!
          </h5>
          <h6
            className={`${styles.sub_title_thanks} ${
              send === 'success' ? styles.success : ''
            }`}
          >
            I will answer you soon
          </h6>
        </>
      )}
    </form>
  )
}
