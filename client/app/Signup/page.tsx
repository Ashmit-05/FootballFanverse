import { ProfileForm } from '@/components/custom/SignupForm'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const page = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>FootballFanverse</CardTitle>
        <CardDescription>Best merchandise at best price for fans of the beautiful game</CardDescription>
      </CardHeader>
      <CardContent>
        <ProfileForm />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Signup with Google</Button>
        <Button>Already have an account? Log In</Button>
      </CardFooter>
    </Card>
  )
}

export default page
