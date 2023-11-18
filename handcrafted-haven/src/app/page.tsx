import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className=" p-3 m-5 bg-red-500">
      <div className="bg-red-500 text-center font-bold text-6xl">
        <p>
          Get started by editing&nbsp;
          <code className="bg-red-500">src/app/page.tsx</code>
        </p>
      </div>
    </main>
  )
}
