import OrganizationSetupForm from "../components/OrganizationSetupForm"

export default function OrganizationSetup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Organization Setup</h1>
      <OrganizationSetupForm />
    </main>
  )
}

