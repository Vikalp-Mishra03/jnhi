import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('orange')
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex justify-center bottom-12 flex-wrap inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white px-2 py-1 rounded-3xl gap-2'>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>Red</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'black' }} onClick={() => setColor('black')}>Black</button>
          <button className='flex flex-wrap outline-none shadow-lg text-black px-4 py-2 rounded-3xl' style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>Yellow</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'blue' }} onClick={() => setColor('blue')}>Blue</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'olive' }} onClick={() => setColor('olive')}>Olive</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'grey' }} onClick={() => setColor('grey')}>Grey</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'purple' }} onClick={() => setColor('purple')}>Purple</button>
          <button className='flex flex-wrap outline-none shadow-lg text-black px-4 py-2 rounded-3xl' style={{ backgroundColor: 'lavender' }} onClick={() => setColor('lavender')}>Lavender</button>
          <button className='flex flex-wrap outline-none shadow-lg text-black px-4 py-2 rounded-3xl' style={{ backgroundColor: 'aqua' }} onClick={() => setColor('aqua')}>Aqua</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'brown' }} onClick={() => setColor('brown')}>Brown</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</button>
          <button className='flex flex-wrap outline-none shadow-lg text-white px-4 py-2 rounded-3xl' style={{ backgroundColor: 'hotPink' }} onClick={() => setColor('')}>Hot Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
