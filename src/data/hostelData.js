export const propertyImage =
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1800&q=88'

export const navigationItems = [
  { label: 'Overview', icon: 'grid', target: 'overview' },
  { label: 'Rooms', icon: 'bed', target: 'rooms' },
  { label: 'Residents', icon: 'users', target: 'residents' },
  { label: 'Reports', icon: 'chart', target: 'reports' },
]

export const arrivals = [
  { name: 'Maya Chen', room: 'Room 204 · Bed A', date: 'Today, 10:30 AM', initials: 'MC', color: 'mint' },
  { name: 'Leo Martins', room: 'Room 108 · Bed C', date: 'Today, 12:15 PM', initials: 'LM', color: 'peach' },
  { name: 'Amina Yusuf', room: 'Room 312 · Bed B', date: 'Tomorrow, 9:00 AM', initials: 'AY', color: 'blue' },
]

export const rooms = [
  { name: 'Room 101', type: '4-bed dorm', occupied: 3, total: 4, status: '1 bed free' },
  { name: 'Room 204', type: '6-bed dorm', occupied: 6, total: 6, status: 'Full' },
  { name: 'Room 312', type: 'Private twin', occupied: 1, total: 2, status: '1 bed free' },
  { name: 'Room 408', type: '4-bed dorm', occupied: 2, total: 4, status: '2 beds free' },
]

export const activities = [
  { title: 'Room 204 cleaned', detail: 'Housekeeping · 9:42 AM', status: 'Complete', icon: 'check', color: 'green' },
  { title: 'Key replacement requested', detail: 'Guest request · 9:18 AM', status: 'Open', icon: 'key', color: 'peach' },
  { title: 'New reservation received', detail: 'Booking · 8:56 AM', status: 'New', icon: 'users', color: 'blue' },
]