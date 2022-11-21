import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors"
import {useState} from "react"



function App() {

  const getRandom=(array)=>{
    const randomIndex=Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  const[quote,setQuote]=useState(getRandom(quoteDB)) 
  const[color,setColor]=useState(getRandom(colors)) 

  const getNewValues=()=>{
    const newQuote=getRandom(quoteDB)
    const newColor=getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject={
    backgroundColor: color
  }

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox 
      quote={quote} 
      getNewValues={getNewValues}
      backgroundObject={backgroundObject} 
    />
    </div>
  )
}

export default App
