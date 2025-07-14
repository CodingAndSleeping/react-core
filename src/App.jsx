import React from './react'

// const App = (
//   <div id='app'>
//     <span style='color: blue'>11</span>
//     <span style='color: blue'>22</span>
//   </div>
// )

function App() {
  return (
    <button id='app' onClick={() => console.log('click')}>
      <span style='color: blue'>11</span>
      <span style='color: blue'>22</span>
    </button>
  )
}

export default App
