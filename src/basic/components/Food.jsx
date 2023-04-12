import FoodPic from "./FoodPic";


export default function Food({ image, name, price, isNew}) {
  return (
    <div className='strawberry'>
      <FoodPic image={image} isNew={isNew}/>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}