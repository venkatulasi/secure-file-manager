"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  console.log("LoginForm renderin");
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password")
    console.log("Email",email)
    console.log("Password",password)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-10 rounded-md border px-3"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="h-10 rounded-md border px-3"
        />
      </div>
      <button
        type="submit"
        className="h-10 rounded-md bg-black px-4 text-sm font-medium text-white"
      >
        Sign in
      </button>
    </form>
  );
}
