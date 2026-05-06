import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL
})

const listPorfs = [
	'Eduardo', 'Rafael', 'Vanessa', 'Sameuel', 'Maria', 'Raquel', 'Lindalva', 'Raimundo José', 'Oscar', 'Mariane', 'Sônia', 'Milena', 'Ana Sofia', 'Maria Lua', 'Amora', 'Cyro', 'Paulo', 'Rogivam'
]

function Professores() {
	const modalRef = useRef()
	const nomeCadastrarRef = useRef()
	let nomeSalvarRef = useRef()
	let idSalvarRef = useRef()
	let profToEdit = useRef({id: null, body:{nome: null}})
	const [professores, setProfessores] = useState([])


	useEffect(()=>{
		updatePage()
	}, [])

	// CRUD - CREATE PROFESSORES
	async function postProfessores(body) {
		await api.post('/professores', body)
		updatePage()
	}
	// CRUD - GET PROFESSORES
	async function getProfessores() {
		await api.get('/professores').then((response)=>{
			setProfessores(response.data)
		})
	}
	// CRUD - DELETE PROFESSORES
	async function deleteProfessores(id) {
		await api.delete(`/professores/${id}`)
		updatePage()
	}
	// CRUD - UPDATE PROFESSORES
	async function updateProfessores(id, body) {
		await api.put(`/professores/${id}`, body)
		updatePage()
	}

	function updatePage() {
		api.get('/professores').then((response)=>{
			setProfessores(response.data)
		})
	}

	function handleSubmitCadastrar(e){
		e.preventDefault()
		const newProf = {
			nome: nomeCadastrarRef.current.value
		}
		postProfessores(newProf)
		nomeCadastrarRef.current.value = ""
	}

	async function handleSubmitSalvar(e) {
		e.preventDefault()
		const newProf = {
			nome: nomeSalvarRef.current.value
		}
		
		await api.put(`/professores/${idSalvarRef.current}`, newProf).then(()=>{
			updatePage()
		})
		modalRef.current.close()

	}
	

	function openModalEdit(id, nome) {
		nomeSalvarRef.current.value = nome
		idSalvarRef.current = id

		profToEdit.current = {id: id, nome: nome}		
		
		modalRef?.current.showModal()
	}

	return (
    <main className='professores'>
			<div className="container">
				<form className='formCadastrar' action="" onSubmit={handleSubmitCadastrar}>
					<h3>Cadastro de Professor</h3>
					<input ref={nomeCadastrarRef} type="text" placeholder="Nome" />
					<button type='submit'>Cadastrar</button>
      			</form>
				<div className="professores">
					{professores.map((prof)=>{
						return(
							<div key={prof._id} className="professor">
								<Link to={`/professor/${prof._id}`}><span className="nome">{prof.nome}</span></Link>
								<MdEdit className='icon' onClick={()=>{openModalEdit(prof._id, prof.nome)}}/>
								<MdDelete className='icon' onClick={()=>{deleteProfessores(prof._id)}}/>
							</div>
						)
					})}
				</div>

				<dialog ref={modalRef} className="modal" closedby='any'>
					<form className='formEditar' action="" onSubmit={handleSubmitSalvar}>
						<h3>Alterar Professor</h3>
						<input ref={nomeSalvarRef} type="text" placeholder="Nome" />
						<button>Salvar</button>
					</form>
				</dialog>

			</div>
    </main>
  	)
}

export default Professores
