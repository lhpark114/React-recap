import './App.css'
import Food from './components/Food'

export default function FoodTown() {
  const handleClick = (event) => {
      console.log(event);
      alert('Button is clicked!');
      };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <Food 
        image='https://sakura.co/wp-content/uploads/2022/12/sakuraco_white-strawberry-thumbnail.png'
        name='Strawberry'
        price='$10'
        isNew={false}
        />
      <Food
image='https://cdn.shopify.com/s/files/1/1294/9917/products/southfloridamangoesmiamifruit_600x.jpg?v=1623113750'
        name='Mango'
        price='$1.99'
        isNew={true}
        />
      <Food 
image='https://www.simplyrecipes.com/thmb/aa85xO4SfFDtQDZhYyj_YIIWpvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chocolate-Babka-Lead-3-1d4173b0d85f4c0aaada9dc75c11f25a.jpg'
        name='Babka'
        price='$7.99'
        isNew={false}
        />
  </>
  )  
}
