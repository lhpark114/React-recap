import React from 'react';

export default function AppWrap() {
 return (
   <div>
    <Navbar>
      <Avatar image='https://sakura.co/wp-content/uploads/2022/12/sakuraco_white-strawberry-thumbnail.png'
        name='Strawberry'
        size={200}/>
      <p> Hello </p>
    </Navbar>
   </div>
 );
}


function Navbar({children}) {
  return(
    <header style = {{ backgroundColor: 'yellow'}}>
      {children}
    </header>
  );
}

function Avatar ( {image, name, size}) {
  return(
    <div>
      <img 
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{borderRadius:'50%'}}
        />
    </div>
  )
}