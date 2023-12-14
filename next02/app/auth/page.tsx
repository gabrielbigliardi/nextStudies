import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SigninWithGithub from "../components/SigninWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SigninForm from "../components/SigninForm";

export default async function AuthRoute() {

    const session = await getServerSession(authOptions)

    if(session) {
        redirect('/')
    }

    return (
        <div className="w-scree h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Plese sign in</CardTitle>
                    <CardDescription>To access the private page you have to authanticate</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SigninForm />

                        <SigninWithGithub />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
