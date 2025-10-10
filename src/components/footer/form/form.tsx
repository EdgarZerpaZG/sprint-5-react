import { useForm } from 'react-hook-form';
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from './../../../_App.module.scss'

export default function Form() {

  const FormSchema = z.object({
    email: z
      .string()
      .email("Invalid email. Email must be a valid email address")
  });

  type IFormInput = z.infer<typeof FormSchema>;


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(FormSchema)
  });


  const onSubmit = (data: IFormInput) => {
    console.log(data)
  };


  return (
    <>
        <div className="container px-4 mx-auto relative z-10">
          <form onSubmit={handleSubmit(onSubmit)} className={`${styles["form-group"]}`}>
              <input {...register('email')} type="email" name="email" id="form-email" placeholder="Enter your email address" required />
              <button type="button" className={`${styles["btn-red"]}`} onClick={handleSubmit(onSubmit)}>Contact Us</button>
              {errors?.email?.message && (
              <p className="text-red-700 mb-4">
                  {errors.email.message}
              </p>
              )}
          </form>
        </div>
    </>
  )
}