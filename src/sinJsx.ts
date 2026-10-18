import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const titulo = createElement('h1', null, 'Hola mundo sin JSX')

const tarjeta = createElement(
  'article',
  { className: 'tarjeta' },
  createElement('h2', { className: 'tarjeta__avatar' }, 'AO'),
  createElement('p', { className: 'tarjeta__nombre' }, 'Adolfo Ortega'),
  createElement('p', { className: 'tarjeta__carrera' }, 'Ingeniería en Software'),
)

const pagina = createElement(
  'main',
  { className: 'pagina' },
  createElement('div', { className: 'saludo' }, titulo),
  createElement('section', { className: 'equipo' }, tarjeta),
)

createRoot(document.getElementById('root')!).render(pagina)
