import { Metadata } from "next"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-dark-bg text-dark-text">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <main className="min-h-[calc(100vh-64px)]">
        {props.children}
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}
