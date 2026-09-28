import { useState } from 'react'
import { Badge, Button, Card, Col, Container, Nav, ProgressBar, Row } from 'react-bootstrap'
import Icon from './Icon.jsx'
import { activities, arrivals, navigationItems, propertyImage, rooms } from '../data/hostelData.js'

function MetricCard({ label, value, suffix, note, progress, tone = 'green' }) {
  return (
    <Card className="metric-card h-100">
      <Card.Body>
        <span className="metric-label">{label}</span>
        <div className="metric-number">{value}{suffix && <small>{suffix}</small>}<Badge className={`metric-note ${tone}`}>{note}</Badge></div>
        {progress !== undefined ? <ProgressBar now={progress} aria-label={`${progress}% occupancy`} /> : <div className="metric-foot"><span className={`metric-symbol ${tone}`}><Icon name={label.includes('BEDS') ? 'bed' : label.includes('REQUESTS') ? 'check' : 'arrow'} size={14} /></span>{label.includes('CHECK') ? '5 more expected' : label.includes('BEDS') ? 'Ready for guests' : '1 maintenance · 2 guest'}</div>}
        {progress !== undefined && <div className="metric-foot">42 of 50 beds</div>}
      </Card.Body>
    </Card>
  )
}

function DashboardPage({ user, onLogout }) {
  const [activeSection, setActiveSection] = useState('overview')
  const firstName = user.name.split(' ')[0]

  function navigate(event, item) {
    event.preventDefault()
    setActiveSection(item.target)
    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <a className="wordmark sidebar-brand" href="#overview"><span className="brand-mark"><Icon name="door" size={17} /></span> haven house</a>
        <span className="side-label">WORKSPACE</span>
        <Nav className="side-nav" aria-label="Dashboard sections">
          {navigationItems.map((item) => <Nav.Link className={activeSection === item.target ? 'side-link active' : 'side-link'} href={`#${item.target}`} key={item.target} onClick={(event) => navigate(event, item)}><Icon name={item.icon} size={17} />{item.label}{item.target === 'residents' && <Badge className="nav-count">3</Badge>}</Nav.Link>)}
        </Nav>
        <div className="sidebar-bottom">
          <div className="property-mini"><span className="property-dot" /><span><strong>Haven House</strong><small>Portland, Oregon</small></span><span className="mini-chevron">⌄</span></div>
          <div className="account-mini"><span className="avatar avatar-green">{user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><span className="account-copy"><strong>{user.name}</strong><small>{user.role}</small></span><Button className="logout-icon" variant="link" onClick={onLogout} aria-label="Log out" title="Log out"><Icon name="logout" size={16} /></Button></div>
        </div>
      </aside>

      <main className="dashboard-main" id="overview">
        <header className="dash-topbar"><div className="breadcrumb"><span>Workspace</span><span>/</span><strong>Overview</strong></div><div className="topbar-user"><span className="today-label">Monday, September 28, 2026</span><span className="avatar avatar-green">{firstName[0]}</span><Button variant="link" className="logout-button" onClick={onLogout}>Log out <Icon name="logout" size={15} /></Button></div></header>
        <Container fluid className="dashboard-content">
          <section className="welcome-row"><div><span className="eyebrow">MONDAY, SEPTEMBER 28</span><h1>Good morning, {firstName} <span className="wave">✳</span></h1><p>Here’s what’s happening at your hostel today.</p></div><Button variant="outline-secondary" className="outline-button" onClick={onLogout}>Sign out <Icon name="logout" size={15} /></Button></section>

          <Row className="g-3 stats-grid" aria-label="Hostel summary">
            <Col xs={6} xl={3}><MetricCard label="OCCUPANCY" value="84" suffix="%" note="↑ 6.2%" progress={84} /></Col>
            <Col xs={6} xl={3}><MetricCard label="CHECK-INS TODAY" value="08" note="3 arrived" tone="mint" /></Col>
            <Col xs={6} xl={3}><MetricCard label="AVAILABLE BEDS" value="08" note="4 rooms" tone="blue" /></Col>
            <Col xs={6} xl={3}><MetricCard label="OPEN REQUESTS" value="03" note="Needs attention" tone="peach" /></Col>
          </Row>

          <Row className="g-3 overview-grid">
            <Col lg={6}>
              <Card className="panel occupancy-panel h-100">
                <Card.Body>
                  <div className="panel-heading"><div><span className="eyebrow">AT A GLANCE</span><h2>Occupancy overview</h2></div><Button variant="link" className="text-button" onClick={(event) => navigate(event, navigationItems[1])}>View rooms <Icon name="arrow" size={14} /></Button></div>
                  <div className="occupancy-content"><div className="occupancy-number">84<span>%</span><small>overall occupancy</small></div><div className="occupancy-visual"><div className="donut"><div><strong>42</strong><span>of 50 beds</span></div></div><div className="legend"><span><i className="legend-dot occupied-dot" />Occupied <strong>42</strong></span><span><i className="legend-dot available-dot" />Available <strong>8</strong></span></div></div></div>
                  <div className="occupancy-footer"><span><i className="status-pulse" /> On track for this month</span><span>Updated just now</span></div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="panel arrivals-panel h-100" id="residents">
                <Card.Body><div className="panel-heading"><div><span className="eyebrow">THE NEXT 24 HOURS</span><h2>Upcoming arrivals <Badge className="heading-count">3</Badge></h2></div><Button variant="light" className="more-button" aria-label="More arrival options">···</Button></div>
                  <div className="arrival-list">{arrivals.map((arrival) => <div className="arrival-row" key={arrival.name}><span className={`avatar avatar-${arrival.color}`}>{arrival.initials}</span><span className="arrival-info"><strong>{arrival.name}</strong><small>{arrival.room}</small></span><span className="arrival-date">{arrival.date}</span></div>)}</div>
                  <a className="list-link" href="#residents">View all residents <Icon name="arrow" size={14} /></a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="panel rooms-panel" id="rooms"><Card.Body><div className="panel-heading"><div><span className="eyebrow">ROOMS & BEDS</span><h2>Room status</h2></div><span className="updated-label"><i className="status-pulse" /> Live availability</span></div><Row className="g-2 room-grid">{rooms.map((room) => <Col xs={6} md={3} key={room.name}><Card className="room-tile h-100"><Card.Body><div className="room-title"><span className="room-icon"><Icon name="bed" size={16} /></span><span className="room-status">{room.status}</span></div><h3>{room.name}</h3><p>{room.type}</p><div className="room-capacity"><span className="bed-dots">{Array.from({ length: room.total }, (_, index) => <i className={index < room.occupied ? 'filled' : ''} key={index} />)}</span><span>{room.occupied}/{room.total} occupied</span></div></Card.Body></Card></Col>)}</Row></Card.Body></Card>

          <Row className="g-3 bottom-grid" id="reports">
            <Col lg={7}><Card className="panel activity-panel h-100"><Card.Body><div className="panel-heading"><div><span className="eyebrow">THE LATEST</span><h2>Recent activity</h2></div><Button variant="light" className="more-button" aria-label="More activity options">···</Button></div>{activities.map((activity) => <div className="activity-row" key={activity.title}><span className={`activity-marker ${activity.color}-marker`}><Icon name={activity.icon} size={13} /></span><span><strong>{activity.title}</strong><small>{activity.detail}</small></span><Badge className={`activity-state ${activity.status === 'Open' ? 'pending-state' : ''}`}>{activity.status}</Badge></div>)}</Card.Body></Card></Col>
            <Col lg={5}><Card className="panel house-card h-100" style={{ backgroundImage: `linear-gradient(90deg, rgba(22, 47, 41, .92), rgba(22, 47, 41, .18)), url(${propertyImage})` }}><Card.Body><span className="eyebrow light-eyebrow">YOUR PLACE, IN GOOD SHAPE</span><h2>Small details.<br />Memorable stays.</h2><p>42 guests are calling Haven House home tonight.</p><div className="house-bottom"><span><i /> Everything is running smoothly</span><Icon name="arrow" size={16} /></div></Card.Body></Card></Col>
          </Row>
          <footer className="dashboard-footer"><span>Haven House · Portland, Oregon</span><span>Demo workspace · Front-end only</span></footer>
        </Container>
      </main>
    </div>
  )
}

export default DashboardPage