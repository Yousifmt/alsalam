
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "./schema";
import { handleFormSubmission } from "./actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = ["CompTIA Security+", "CompTIA A+", "Other"];

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
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
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    });
  }

  return (
     <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Send a Message</CardTitle>
        <CardDescription>We'll get back to you as soon as possible.</CardDescription>
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
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ahmed" {...field} />
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
                    <FormLabel>Phone Number</FormLabel>
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
                      <FormLabel>Nationality</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Bahraini" {...field} />
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
                      <FormLabel>Major</FormLabel>
                      <FormControl>
                          <Input placeholder="e.g. Computer Science" {...field} />
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
                <FormLabel>Course of Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {courses.map(course => (
                        <SelectItem key={course} value={course}>{course}</SelectItem>
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      className="resize-none h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
