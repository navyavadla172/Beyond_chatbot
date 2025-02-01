import Link from "next/link"
import RegistrationForm from "./components/RegistrationForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Chatbot Setup</h1>
      <RegistrationForm />
      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </main>
  )
}

