import React from 'react'
import Input from './components/Input'
import Result from './components/Result'
import Selection from './components/Selection'
import taxCalculator from './util/taxCalculator'


//An array for all types of wages, including 'Hourly', 'Weekly', 'Fortnightly',Monthly', 'Yearly'
const incomeTypes = [{ value: 'hourly', selectionName: 'Hourly' }, { value: 'weekly', selectionName: 'Weekly' },{value:'fortnightly',selectionName:'Fortnightly'}, { value: 'monthly', selectionName: 'Monthly' }, { value: 'yearly', selectionName: 'Yearly' }]


function App() {
  const [userInput, setUserInput] = React.useState({income:0,incomeType:'hourly'});

  function handleIncomeInput(incomeData) {
    setUserInput({income:incomeData,incomeType:userInput.incomeType})
  }

  function handleIncomeTypeInput(incomeTypeData) {
    setUserInput({income:userInput.income,incomeType:incomeTypeData})
    
  }

  const incomeData = taxCalculator(userInput.income,userInput.incomeType)


  return (
    <>
      <section id="user-input" className="input-group">
        <Input label="Before Tax Income" type="number" onUserInput={handleIncomeInput} ></Input>
        <Selection label="Income Type" options={incomeTypes} onUserInput={handleIncomeTypeInput} ></Selection>
      </section>
      <Result resultData={incomeData}></Result>

    </>
  )
}

export default App
