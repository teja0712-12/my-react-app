import { useState } from 'react'
import DashboardPage from './components/DashboardPage.jsx'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import './App.css'

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem('haven-house-user'))
  } catch {
    return null
  }
}

function App() {
  const [user, setUser] = useState(getSavedUser)
  const [page, setPage] = useState(() => (getSavedUser() ? 'dashboard' : 'home'))
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('welcome123')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/users.json')
      if (!response.ok) throw new Error('Could not load demo accounts.')
      const users = await response.json()
      const account = users.find((entry) => {
        const identity = username.trim().toLowerCase()
        return (entry.username.toLowerCase() === identity || entry.email.toLowerCase() === identity) && entry.password === password
      })

      if (!account) {
        setError('The username or password is incorrect.')
        return
      }

      const signedInUser = { name: account.name, email: account.email, role: account.role }
      localStorage.setItem('haven-house-user', JSON.stringify(signedInUser))
      setUser(signedInUser)
      setPage('dashboard')
    } catch {
      setError('Demo accounts could not be loaded. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem('haven-house-user')
    setUser(null)
    setPage('home')
  }

  if (page === 'login') {
    return (
      <LoginPage
        username={username}
        password={password}
        error={error}
        loading={loading}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
        onBack={() => setPage('home')}
      />
    )
  }

  if (page === 'dashboard' && user) {
    return <DashboardPage user={user} onLogout={handleLogout} />
  }

  return <HomePage onLogin={() => setPage('login')} />
}

export default App