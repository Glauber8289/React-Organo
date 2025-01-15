import './ListaSuspensa.css'
const ListaSuspensa =(props)=>{
        console.log(props.itens)


        return(
            <div className='Lista-Suspensa'>
                <label>{props.label}</label>
                <select onChange={evento=>props.aoAlterar(evento.target.value)} required={props.required} value={props.value}>
                   {props.itens.map(item=><option key={item}>{item}</option>)}
                </select>
            </div>
        ) 
}
  export default ListaSuspensa