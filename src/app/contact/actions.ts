
'use server';

import { sendContactEmail, type ContactFormData } from '@/ai/flows/send-contact-email-flow';

export async function handleFormSubmission(
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const result = await sendContactEmail(formData);
    return result;
  } catch (error) {
    console.error('Error in handleFormSubmission:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
