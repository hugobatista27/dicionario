import MainContext from './contexts/MainContext.js'


function App() {
  const ValueContexts: any = []
  return (
  <MainContext.Provider value={{ValueContexts}}>
    
  </MainContext.Provider>
  )
}

export default App
