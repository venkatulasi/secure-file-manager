import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex w-full max-w-md flex-col gap-6 rounded-xl border p-8 shadow-sm">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-gray-600">Sign in to your account.</p>
      </div>
      <LoginForm />
    </main>
  );
}
