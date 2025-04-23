import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <header className="w-full flex justify-between items-center py-4 px-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Revz AI</h1>
        <nav className="space-x-4">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-4">Revz AI</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
          Your AI Revenue Manager. No dashboards, no analysis paralysis — just smart pricing and performance insights.
        </p>
        <Link
          href=\"/dashboard\"
          className=\"bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition\"
        >
          Start Optimizing Now →
        </Link>
      </main>
    </div>
  )
}
