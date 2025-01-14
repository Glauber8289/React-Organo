import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'




const Formulario = () => {
   
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Designer',
        'Mobile',
        'Inovação e Gestão'

    ]

    const aoSalvar=(evento)=>{
        evento.preventDefault()
        console.log('Form foi submetido')
    }
   
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
             <CampoTexto obrigatorio={true} label="Nome"placeholder="Digite seu Nome"/>
             <CampoTexto obrigatorio={true} label="Cargo"placeholder="Digite seu Cargo"/>
             <CampoTexto obrigatorio={true} label="Imagem"placeholder="Digite o Endereço da Imagem"/>
             <ListaSuspensa obrigatorio={true} label="Time"itens= {times}/>
             <Botao >
                Criar Card

             </Botao>
            </form>
        </section>
    )

}
  export default Formulario