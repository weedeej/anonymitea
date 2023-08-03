import Image from 'next/image'
import { Content } from './Content'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="p-4 w-full bg-slate-950">
        <h1 className="font-bold text-2xl text-white">Anonymi<span className="text-green-700">tea</span></h1>
      </header>
      <Content/>
    </main>
  )
}
