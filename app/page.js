'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const nav = () => {
    router.push('/dashboard');
  }

  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGRhcmslMjBiZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center bg-no-repeat text-white h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-teal-500 via-sky-400 to-blue-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Smart AI Interviews
              <span className="sm:block mt-3"> Perfect Skills & Assess Talent </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Empower your interview process with our AI-driven platform. Students can practice and refine their skills, while HR professionals can evaluate candidates efficiently and effectively.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/dashboard"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
