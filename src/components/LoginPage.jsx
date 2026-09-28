import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import Icon from './Icon.jsx'
import { propertyImage } from '../data/hostelData.js'

function LoginPage({ username, password, error, loading, onUsernameChange, onPasswordChange, onSubmit, onBack }) {
  return (
    <main className="login-page">
      <section className="login-visual" style={{ backgroundImage: `url(${propertyImage})` }}>
        <button className="wordmark wordmark-light" onClick={onBack} type="button" aria-label="Haven House home">
          <span className="brand-mark"><Icon name="door" size={17} /></span> haven house
        </button>
        <div className="visual-caption"><span className="eyebrow light-eyebrow">A PLACE TO LAND</span><p>Good stays happen<br />when the details feel easy.</p><span className="photo-credit">Shared spaces, made welcoming.</span></div>
        <div className="image-shade" />
      </section>

      <section className="login-panel">
        <button className="back-link" type="button" onClick={onBack}><span aria-hidden="true">←</span> Back to home</button>
        <div className="login-form-wrap">
          <span className="eyebrow">HAVEN HOUSE PORTAL</span>
          <h1>Welcome back.</h1>
          <p className="form-intro">Sign in to manage your hostel, residents, and rooms.</p>

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username or email</Form.Label>
              <Form.Control type="text" autoComplete="username" placeholder="Enter your username or email" value={username} onChange={(event) => onUsernameChange(event.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <div className="password-label"><Form.Label>Password</Form.Label><span>Demo access</span></div>
              <Form.Control type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => onPasswordChange(event.target.value)} required />
            </Form.Group>
            {error && <Alert variant="danger" className="login-alert" role="alert">{error}</Alert>}
            <Button className="primary-button sign-in-button" type="submit" disabled={loading}>
              {loading ? <>Signing in <Spinner animation="border" size="sm" /></> : <>Sign in <Icon name="arrow" size={16} /></>}
            </Button>
          </Form>

          <button className="demo-account" type="button" onClick={() => { onUsernameChange('admin'); onPasswordChange('welcome123') }}>
            <span className="demo-icon"><Icon name="key" size={16} /></span>
            <span><strong>Demo login details</strong><small>Username: admin · Password: welcome123</small></span>
            <span className="demo-arrow">→</span>
          </button>
          <p className="demo-note"><Icon name="lock" size={13} /> Front-end demo only. No real account is created.</p>
        </div>
        <span className="login-footer">© 2026 Haven House · Hostel operations</span>
      </section>
    </main>
  )
}

export default LoginPage