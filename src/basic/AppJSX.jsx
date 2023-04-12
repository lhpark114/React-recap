import './App.css'

export default function AppJSX() {
  const name = 'chocolate';
  const list = ['Melon', 'Mango', 'Apple']
  return (
    <>
    <h1 className='pink'>Hello! {`HAHAHA! ${name}`}</h1>
      <h2>Bye!00</h2>
      <p>{name}</p>
      <ul>
        <li>Chocolate</li>
        <li>Strawberry</li>
        <li>Banana</li>
      </ul>
      <ul>
        {list.map((item) => (
        <li>{item}</li>
    ))}
      </ul>
      <img 
        style={{width: '200px', height: '200px'}}
        src='https://www.agiftinside.com/images/view/565/565/false/img/single_products/AGI-ACD2037-main-2018-1000.jpg'
        alt='chocolatestrawberry'
        />
    </>
  )
}
