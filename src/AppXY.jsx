import React, {useState} from 'react';
import './AppXY.css'

export default function AppXY() {
  const [position, setPosition] = useState({x:0, y:0, z:0});

  return (
    <div className='container'
      onPointerMove={(e)=>{
        //console.log(e.clientX, e.clientY);
        //setPosition({x:e.clientX, y:e.clientY});
        // 만약 수평으로만 이동이 가능하도록 하려면? - y유지, x만 업데이트
        setPosition((prev)=>({...prev, x:e.clientX }));
      }}>
      <div 
        className='pointer' 
        style={{transform: `translate(${position.x}px, ${position.y}px)`}}/>
    </div>
  );
}