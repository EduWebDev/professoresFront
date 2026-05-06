function Home() {
  return (
    <main className="home">
			<div className="container">
				Home

        <button popovertarget="meu-modal">Abrir Popover</button>
				<div id="meu-modal" popover='auto' class="estilo-modal">
					<p>Este popover fecha sozinho ao clicar fora ou ESC!</p>
				</div>
			</div>
    </main>
  )
}

export default Home
