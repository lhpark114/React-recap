import './App.css'

export default function App() {
  const name = 'chocolate';
  return (
    <>
    <h1 className='pink'>Hello!</h1>
      <h2>Bye!00</h2>
      <p>{name}</p>
      <ul>
        <li>Chocolate</li>
        <li>Strawberry</li>
        <li>Banana</li>
      </ul>
      <img 
        style={{width: '200px', height: '200px'}}
        src='https://www.agiftinside.com/images/view/565/565/false/img/single_products/AGI-ACD2037-main-2018-1000.jpg'
        alt='chocolatestrawberry'
        />
    </>
  )
}
