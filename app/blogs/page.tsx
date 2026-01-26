import { Suspense } from "react"
import { BlogsContent } from "./blogs-content"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export default function Blogs() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <BlogsContent />
      </Suspense>
      <Footer />
    </>
  )
}
