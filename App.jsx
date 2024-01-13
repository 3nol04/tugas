import React,{useEffect,useState} from "react";

const Input = ()=>{
  const [nama,setNama]=useState('');
    const handleSetNama=(event)=>{
    setNama(event.target.value)
    };
    const Btn=()=>{
        alert('hallo '+(nama))
    }
  return(
    <div>
        <input type="text" value={nama} onChange={handleSetNama}/>
        <button onClick={Btn} >Click here</button>
      <lu>
        <li>React</li>
        <li>Tri Setianto</li>
        <li>2327250036</li>
        <li><a href="https://github.com/3nol04/tugas/blob/main/App.jsx">MyGithub </a></li>
      </lu>
    </div>
  )
}
  const NameCard = (props)=>{
    const umur = 2024 - props.lahir

  return(
    <div>
        <h3> Name : {props.nama}</h3>
        <h3> Umur : {umur} Tahun</h3>
    </div>
  );
}

const Count=()=> {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title=`${count} count`;
  },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
    </div>
  );
}
const Clr = ()=>{
const [color,setColor]=useState("blue");
const clik = color =>{
  setColor(color)
}
useEffect(()=>{
  document.body.style.backgroundColor = color
},[color])
return(
  <div>
    <button onClick={()=>clik("yellow","white")}>Change color</button>
  </div>
)
}

const App=()=> {

  return(
    <div>
      <h1>Quiz</h1>
      <Count></Count>
      <NameCard nama="M tri Setanto"lahir="2004"></NameCard>
      <p>Hallo Nama saya M tri Setanto</p>
      <Clr></Clr>
      <Input></Input>
    </div>
  );
}

export default App