import React,{useState} from 'react';
import './App.css';

function App() {
  const [hori,setHori] = useState(10)
  const [veri,setVeri] = useState(10)
  const [blur,setBlur] = useState(10)
  const [color,setColor] = useState('grey')
  const [checkOn,setCheckOn] = useState(false)
  return (
    <div className="App">
     <div className="controls">
      <label>Horizantol length</label>
      <input type="range"  min="-200" max="200" value={hori} onChange={(e)=>setHori(e.target.value)} />
      <label>Vertical  length</label>
      <input type="range"  min="-200" max="200" value={veri} onChange={(e)=>setVeri(e.target.value)} />
      <label>Blur</label>
      <input type="range"  min="0" max="200" value={blur} onChange={(e)=>setBlur(e.target.value)} />
      <label>color</label>
      <input type="color" id='clr' value={color} onChange={(e)=>setColor(e.target.value)} />
    <br/> <br />
    
      <div className='switch'>
          <label>
           Outline
           <input type="checkbox" checked={checkOn} onChange={()=>setCheckOn(!checkOn)}/>
           <span className="lever"></span>
           inset
          </label>
          </div>   
    </div>
     <div className='output'>
      <div className='box' style={{boxShadow:`${checkOn?"inset":" "} ${hori}px ${veri}px ${blur}px ${color} `}}>
              <p>box-Shadow: {hori}px {veri}px {blur}px {color} </p>

        
      </div>
     </div>
    </div>
  );
}

export default App;
