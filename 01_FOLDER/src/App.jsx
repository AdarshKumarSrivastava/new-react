import React from 'react'
import Cards from './component/cards'
const App = () => {
  return (
    <div className='pp'>
      <Cards user='Adarsh'age={20} img='https://wallpaperaccess.com/full/43890.jpg' />
      <Cards user='Biceps' age={18}  img='https://img.freepik.com/premium-vector/night-landscape-background_126980-47.jpg?semt=ais_hybrid&w=740&q=80' />
    </div>
  )
}

export default App
