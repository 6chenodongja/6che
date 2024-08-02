'use server';

import nodemailer from 'nodemailer';
 
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_KEY,
  },
});

export const sendEmail = async (prevState: any, formData: FormData) => {
  try {
    const { name, email, subject } = Object.fromEntries(formData);
 
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // 보내는 이메일
      to: `${email}`, // 받는 이메일
      subject: `온코디: ${name}님 온코디에서 게시물 공유가 되었습니다!)`,
      html: `<p>${subject}</p>`,
    });
  } catch (error) {
    console.error(error);
  }
};