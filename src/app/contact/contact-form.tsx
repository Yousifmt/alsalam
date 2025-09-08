"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchemaEn, contactFormSchemaAr, type ContactFormData } from "./schema";
import { handleFormSubmission } from "./actions";
import { useLanguage } from "@/components/lang-context";

import { Button } from "@/components/ui/button";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const { isArabic } = useLanguage();
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();

  const t = isArabic
    ? {
        title: "أرسل رسالة",
        desc: "سنعاود التواصل معك في أقرب وقت ممكن.",
        fullName: "الاسم الكامل",
        phone: "رقم الهاتف",
        nationality: "الجنسية",
        major: "التخصص",
        course: "الدورة المهتم بها",
        coursePlaceholder: "اختر دورة",
        message: "الرسالة",
        messagePlaceholder: "اكتب رسالتك...",
        send: "إرسال",
        success: "تم الإرسال!",
        successDesc: "تم استلام رسالتك بنجاح.",
        error: "خطأ",
        errorDesc: "حدث خطأ غير متوقع.",
        examples: { name: "أحمد", nat: "مثال: بحريني", maj: "مثال: علوم الحاسوب" },
        courses: [
          { value: "CompTIA Security+", label: "CompTIA Security+" },
          { value: "CompTIA A+", label: "CompTIA A+" },
          { value: "Other", label: "أخرى" },
        ],
      }
    : {
        title: "Send a Message",
        desc: "We'll get back to you as soon as possible.",
        fullName: "Full Name",
        phone: "Phone Number",
        nationality: "Nationality",
        major: "Major",
        course: "Course of Interest",
        coursePlaceholder: "Select a course",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message",
        success: "Message Sent!",
        successDesc: "Your message has been received.",
        error: "Error",
        errorDesc: "An unexpected error occurred.",
        examples: { name: "Ahmed", nat: "e.g. Bahraini", maj: "e.g. Computer Science" },
        courses: [
          { value: "CompTIA Security+", label: "CompTIA Security+" },
          { value: "CompTIA A+", label: "CompTIA A+" },
          { value: "Other", label: "Other" },
        ],
      };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(isArabic ? contactFormSchemaAr : contactFormSchemaEn),
    defaultValues: {
      fullName: "",
      phone: "+973",
      nationality: "",
      major: "",
      courseOfInterest: "CompTIA Security+",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    startTransition(async () => {
      const result = await handleFormSubmission(data);
      if (result.success) {
        toast({ title: t.success, description: result.message || t.successDesc });
        form.reset();
      } else {
        toast({ title: t.error, description: result.message || t.errorDesc, variant: "destructive" });
      }
    });
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg" dir={isArabic ? "rtl" : "ltr"}>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">{t.title}</CardTitle>
        <CardDescription>{t.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.fullName}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.examples.name} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.phone}</FormLabel>
                    <FormControl>
                      <Input placeholder="+973" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.nationality}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.examples.nat} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="major"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.major}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.examples.maj} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="courseOfInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.course}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t.coursePlaceholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {t.courses.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.message}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t.messagePlaceholder} className="resize-none h-32" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t.send}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
