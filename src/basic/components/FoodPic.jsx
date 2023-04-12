export default function FoodPic({image, isNew}) {
  return (
    <div className="foodpic">
      <img
        className='photo'
        src={image}
        alt='food'
        />
      {isNew && <span className='sale'>Sale</span>}
    </div>
  )
}