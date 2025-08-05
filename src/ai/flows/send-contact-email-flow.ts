
'use server';
/**
 * @fileOverview A flow for sending a contact form submission email.
 *
 * - sendContactEmail - A function that handles sending the email.
 * - ContactFormData - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import 'dotenv/config';


const ContactFormDataSchema = z.object({
  fullName: z.string().describe('The full name of the person submitting the form.'),
  phone: z.string().describe('The phone number of the person.'),
  nationality: z.string().describe('The nationality of the person.'),
  major: z.string().describe('The major of the person.'),
  courseOfInterest: z.string().describe('The course of interest of the person.'),
  message: z.string().describe('The message content from the form.'),
});

export type ContactFormData = z.infer<typeof ContactFormDataSchema>;

const EmailResponseSchema = z.object({
  success: z.boolean().describe('Whether the email was sent successfully.'),
  message: z.string().describe('A message to return to the user.'),
});

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormDataSchema,
    outputSchema: EmailResponseSchema,
  },
  async (input) => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM,
        to: 'yousifmanhal123456@gmail.com',
        subject: `New Contact Form Submission from ${input.fullName}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Full Name:</strong> ${input.fullName}</p>
          <p><strong>Phone:</strong> ${input.phone}</p>
          <p><strong>Nationality:</strong> ${input.nationality}</p>
          <p><strong>Major:</strong> ${input.major}</p>
          <p><strong>Course of Interest:</strong> ${input.courseOfInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you shortly.',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      };
    }
  }
);


export async function sendContactEmail(
  input: ContactFormData
): Promise<z.infer<typeof EmailResponseSchema>> {
  return await sendContactEmailFlow(input);
}
