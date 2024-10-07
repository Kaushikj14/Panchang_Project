import { useState } from 'react'
import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import Card from './Components/Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='bg-indigo-600 w-full h-screen'>
      
        <div className="flex justify-center items-center h-full">
          <Card />
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App
