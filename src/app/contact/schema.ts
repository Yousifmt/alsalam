
import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  nationality: z.string().min(2, { message: "Nationality must be at least 2 characters." }),
  major: z.string().min(2, { message: "Major must be at least 2 characters." }),
  courseOfInterest: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});


export type ContactFormData = z.infer<typeof contactFormSchema>;
