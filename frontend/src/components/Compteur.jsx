import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <input type="button" value="+1" onClick={() => setCount(count + 1)} />
      <input type="button" value="-1" onClick={() => setCount(count - 1)} />
    </div>
  )
}

export default Counter
