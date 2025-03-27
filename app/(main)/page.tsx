import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import {cookies} from "next/headers";
import ToastMessage from "@/components/toast/Toast";



export default async function Home() {
    const errorMessage: string | undefined = (await cookies()).get("error-message")?.value;
    console.log(errorMessage)
  return (
    <>
        <Hero />
        <Categories />
        <ToastMessage message={errorMessage} />
    </>
  )
}
