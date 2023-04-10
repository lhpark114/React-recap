export default function Food({image, name, price}) {
  return (
    <div className='straweberry'>
      <img
        className='photo'
        src={image}
        alt='food'
        />
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}