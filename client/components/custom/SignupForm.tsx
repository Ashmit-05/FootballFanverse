"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  email : z.string().email(),
  password : z.string().min(8,{
    message : "Password must be atleast 8 characters",
  }).max(20),
  confirmPasword : z.string().min(8).max(20),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email : "example@abc.com",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="enter your email" {...field} />
              </FormControl>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="enter your password" {...field} />
              </FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="re-enter your password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}