import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useState } from 'react'

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0)
  const [salt, setSalt] = useState(1)

  const inclement = (salt: number) => {
    setCounter(counter + salt)
  }

  const declement = (salt: number) => {
    setCounter(counter - salt)
  }

  return (
    <div>
      <Head>
        <title>Contador</title>
        <meta name="description" content="Contador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
        <span className="text-6xl">{counter}</span>
        <div className="flex gap-4">
          <button
            onClick={() => declement(salt)}
            className="bg-red-500 text-white p-4"
          >
            Decrementar
          </button>
          <input
            type="number"
            value={salt}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSalt(Number(event.target.value))
            }
            className="text-xl w-16 text-center border-2 border-slate-600"
          />
          <button
            onClick={() => inclement(salt)}
            className="bg-green-500 text-white p-4"
          >
            Incrementar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
