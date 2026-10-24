import RegisterForm from "@/components/auth/register-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <main className="w-full max-w-md">
      <Card className="gap-6 py-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            <h1>Create account</h1>
          </CardTitle>

          <CardDescription>
            Register to start managing your files securely.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  );
}
