import { Rating } from "react-simple-star-rating"
import { useState } from "react"
import "./Stars.css"

const Stars = () => {
  const [rating, setRating] = useState(100)
  const handleRating = (rate) => {
    setRating(rate)
  }
  return <Rating onClick={handleRating} ratingValue={rating} />
}

export default Stars
