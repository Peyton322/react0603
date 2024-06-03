export default function Numbers(){
    const [number,setNumber] = useState(10);
    return(
        <>
            {(number<10)&&(<button onClick={()=>{setNumber(number+1)}}>加1</button>)}
            {(number>0)&&(<button onClick={()=>{setNumber(number-1)}}>減1</button>)}
            

        </>
    )
}