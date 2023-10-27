import { useState } from 'react'
import './App.css'
import Questions from './component/Questions'
import queData from './data.js'

function App() {
  const [questions, setQuestion] = useState(queData);
  

  return (
    <div className='accordian'>
      <Questions questions={questions} />

    </div>
  )
}

export default App
