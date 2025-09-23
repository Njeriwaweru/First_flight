import Button from './components/button/Button'
import './App.css'

function App() {
  
  const handleClick = (btnLabel) => {
    alert(`${btnLabel} button clicked!`)
  }

  return (
    <>
      <div className='buttons'>
        <Button 
          mode="primary"
          label="Submit"
          onClick={() => handleClick("Submit")}
        />
        <Button
          mode="secondary"
          label="Cancel"
          onClick={() => handleClick("Cancel")}
        />
      </div>
    </>
  )
}

export default App
