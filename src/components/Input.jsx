export default function Input({ label, type, onUserInput }) {
    function handleIncomeChange(event)
    {
        onUserInput(event.target.value)
    }
  return (
    <section>
        <label >{label}</label>
        <input type={type} step="100" defaultValue="0" onChange={handleIncomeChange}/>
      </section>
    
  )
}