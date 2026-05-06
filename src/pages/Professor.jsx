import Hero from '../assets/hero.png'
import { useParams } from 'react-router-dom'

function Professor() {
  const {id} = useParams()
  return (
    <main className="professor">
			<div className="container">
				<h1>Professor:</h1>
        <h3>${id}</h3>
        <img src={Hero} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti illum sequi nemo quis maiores magnam odio vel enim officiis recusandae, error pariatur temporibus quia autem, quaerat qui perferendis dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam maiores repudiandae ratione natus eum animi assumenda incidunt id deleniti, autem voluptatem, in praesentium recusandae? Omnis cumque dolor asperiores consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea minima rerum iusto impedit quisquam, molestiae repellat repudiandae quaerat, voluptatibus aperiam et, dolores saepe quam eos quos fuga. Voluptatibus, dicta?</p>
			</div>
    </main>
  )
}

export default Professor
