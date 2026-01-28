import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'For Students' },
  { to: '/teachers', label: 'For Teachers' },
  { to: '/parents', label: 'For Parents' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-mark">AE</span>
          <div className="brand-copy">
            <span className="brand-text">AI Ethics Guide</span>
            <span className="brand-subtext">
              Responding to the rapid development of AI
            </span>
          </div>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
