import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Manjit",
    age:21
  }

  let newArr =[1,2,3]
  return (
    <>
      <div className=" bg-blue-500 mb-4">
        <h1 className="text-5xl font-bold text-white">
          Tailwind CSS is Working 🚀
        </h1>
      </div>
      <Card username="Manjit" btnText="click me"/>
      <Card username="Monu"  btnText="visit me"/>
      <Card />
    </>
  )
}

export default App
