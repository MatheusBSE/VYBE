
import { useState } from 'react'

function App() {
  const [user, setUser] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const handleLogin = () => {
    if (user.toLowerCase() === 'creator') {
      setIsAdmin(true)
      setIsLogged(true)
    } else if (user) {
      setIsLogged(true)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #5b21b6, #000)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '400px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold' }}>VYBE 🌐</h1>
        {!isLogged ? (
          <div style={{ marginTop: '1rem' }}>
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.5rem', width: '100%', marginBottom: '1rem' }}
            />
            <button onClick={handleLogin} style={{ width: '100%', padding: '0.75rem', backgroundColor: '#6d28d9', color: 'white', borderRadius: '0.5rem' }}>
              Entrar na VYBE
            </button>
          </div>
        ) : isAdmin ? (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ fontSize: '1.25rem' }}>Bem-vindo, <strong>{user}</strong> 👑</p>
            <p style={{ fontSize: '0.875rem' }}>Acesso ao Painel do Criador liberado</p>
            <button style={{ width: '100%', marginTop: '1rem', padding: '0.75rem', backgroundColor: 'green', color: 'white', borderRadius: '0.5rem' }}>
              Acessar Painel
            </button>
            <button onClick={() => setIsLogged(false)} style={{ marginTop: '0.5rem', backgroundColor: 'red', color: 'white', padding: '0.5rem', borderRadius: '0.5rem' }}>
              Sair
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ fontSize: '1.25rem' }}>Bem-vindo(a), <strong>{user}</strong> 👋</p>
            <p>Seu universo social está prestes a começar...</p>
            <button onClick={() => setIsLogged(false)} style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white', padding: '0.5rem', borderRadius: '0.5rem' }}>
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
