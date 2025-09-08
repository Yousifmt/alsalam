import { z } from "zod";

const baseShape = {
  fullName: z.string().min(2),
  phone: z.string().min(5),
  nationality: z.string().min(2),
  major: z.string().min(2),
  courseOfInterest: z.string(),
  message: z.string().min(10),
};

export const contactFormSchemaEn = z.object({
  fullName: baseShape.fullName.min(2, { message: "Name must be at least 2 characters." }),
  phone: baseShape.phone.min(5, { message: "Please enter a valid phone number." }),
  nationality: baseShape.nationality.min(2, { message: "Nationality must be at least 2 characters." }),
  major: baseShape.major.min(2, { message: "Major must be at least 2 characters." }),
  courseOfInterest: baseShape.courseOfInterest,
  message: baseShape.message.min(10, { message: "Message must be at least 10 characters." }),
});

export const contactFormSchemaAr = z.object({
  fullName: baseShape.fullName.min(2, { message: "يجب ألا يقل الاسم عن حرفين." }),
  phone: baseShape.phone.min(5, { message: "يرجى إدخال رقم هاتف صالح." }),
  nationality: baseShape.nationality.min(2, { message: "يجب ألا تقل الجنسية عن حرفين." }),
  major: baseShape.major.min(2, { message: "يجب ألا يقل التخصص عن حرفين." }),
  courseOfInterest: baseShape.courseOfInterest,
  message: baseShape.message.min(10, { message: "يجب ألا تقل الرسالة عن 10 أحرف." }),
});

export type ContactFormData = z.infer<typeof contactFormSchemaEn>;
