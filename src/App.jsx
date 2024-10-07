import { useState } from 'react'
import Header from './Components/Navbar/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='bg-indigo-600 w-full h-screen'></div>
    </>
  )
}

export default App
