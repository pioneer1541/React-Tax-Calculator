export default function Result({ resultData }) {
    
    return (
        <table id='result'>
          <thead>
          <tr>
            <th>Income Type</th>
            <th>Income Before Tax</th>
            <th>Income After Tax</th>
            <th>Income Tax</th>
          </tr>
          </thead>
          <tbody className='center'>
            {resultData.map((result)=>{ return <tr key={result.incomeType}><td>{result.incomeType}</td><td>{result.incomeBeforeTax}</td><td>{result.incomeAfterTax}</td><td>{result.incomeTax}</td></tr> })}
          </tbody>
        </table>
    )

}