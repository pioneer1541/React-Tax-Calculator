export default function Selection({label,options,onUserInput})
{
    let optionsList = [...options];
    function handleSelectionChange(event)
    {
        onUserInput(event.target.value)
    }
        return (
        <section>
            <label htmlFor={label}>{label}</label>
            <select name={label} id={label} onChange={handleSelectionChange}>
                {optionsList.map((option) => {
                    return <option key={option.value} value={option.value}>{option.selectionName}</option>
                })}
            </select>
        </section>
    )
}