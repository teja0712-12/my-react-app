import { Button, Container, Nav } from 'react-bootstrap'
import Icon from './Icon.jsx'
import { propertyImage } from '../data/hostelData.js'

function Brand({ light = false }) {
  return (
    <span className={`wordmark${light ? ' wordmark-light' : ''}`}>
      <span className="brand-mark"><Icon name="door" size={17} /></span>
      haven house
    </span>
  )
}

function HomePage({ onLogin }) {
  return (
    <main className="home-page">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Haven House home"><Brand /></a>
        <Nav className="home-nav" aria-label="Main navigation">
          <Nav.Link href="#story">Our approach</Nav.Link>
          <Nav.Link href="#snapshot">At a glance</Nav.Link>
        </Nav>
        <Button className="header-login" onClick={onLogin}>Log in <Icon name="arrow" size={15} /></Button>
      </header>

      <Container as="section" fluid className="home-hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><i className="eyebrow-dot" /> HOSTEL OPERATIONS, MADE HUMAN</span>
          <h1>A better stay starts <em>behind the scenes.</em></h1>
          <p>Keep your rooms, residents, and daily details in one calm place. More time for the people who make a hostel feel like home.</p>
          <div className="hero-actions">
            <Button className="primary-button" onClick={onLogin}>Open your workspace <Icon name="arrow" size={16} /></Button>
            <a className="subtle-link" href="#snapshot">Take a look around <span>↓</span></a>
          </div>
          <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span></div><span>Made for the people<br />behind every good stay.</span></div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src={propertyImage} alt="Warm shared hostel room with comfortable beds and natural light" />
          <div className="photo-label"><span className="photo-label-icon"><Icon name="check" size={16} /></span><span><strong>A little more room to breathe</strong><small>Everything in its right place</small></span></div>
          <div className="image-index">01 <span /> 04</div>
        </div>
        <span className="hero-side-note">A GOOD HOSTEL RUNS ON GOOD DETAILS</span>
      </Container>

      <Container as="section" fluid className="home-snapshot" id="snapshot">
        <div className="snapshot-heading"><span className="eyebrow">A CLEARER VIEW OF YOUR DAY</span><h2>Less juggling.<br />More welcoming.</h2></div>
        <div className="snapshot-stats">
          <article><span className="snapshot-number">42<span>/50</span></span><span className="snapshot-label">beds occupied</span></article>
          <article><span className="snapshot-number">08</span><span className="snapshot-label">arrivals today</span></article>
          <article><span className="snapshot-number">03</span><span className="snapshot-label">open requests</span></article>
          <Button className="snapshot-link" onClick={onLogin}>See the workspace <Icon name="arrow" size={15} /></Button>
        </div>
      </Container>

      <Container as="section" fluid className="home-story" id="story">
        <div className="story-image"><img src={propertyImage} alt="A comfortable shared space for hostel guests" /><span>Haven House · Portland, Oregon</span></div>
        <div className="story-copy"><span className="eyebrow">RUN A HOSTEL, NOT A SPREADSHEET</span><h2>Good hospitality<br />has a system.</h2><p>From the first check-in to the last room reset, the everyday work should feel clear. Haven House brings the moving pieces together so your team can focus on making people feel at home.</p><Button variant="link" className="text-button story-link" onClick={onLogin}>Step inside <Icon name="arrow" size={15} /></Button></div>
      </Container>

      <footer className="site-footer"><a className="wordmark" href="#home"><Brand /></a><span>Thoughtful stays start with thoughtful systems.</span><span>© 2026 Haven House</span></footer>
    </main>
  )
}

export default HomePage