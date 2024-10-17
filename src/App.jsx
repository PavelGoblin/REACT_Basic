import React from 'react'

function App() {
  return (
   /*
   method=1
   <div>
     <div className='main'></div>
     <h1>hey</h1>
   </div>
  method=2
  <>
  <div className='main'></div>
  <h1>hey</h1>
  </>
   */
  //now tailwind part
  <div className="w-full h-screen bg-zinc-900 p-4">
    <div className="w-44  h-32 rounded-xl bg-red-600 p-3 text-white">
      <h3>hello guys,how are you?</h3>
    </div>
  </div>
  )
}

export default App