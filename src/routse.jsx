import { lazy } from 'react'

const HomePage = lazy(() => import('./view/HomePage'))
const M_HomePage = lazy(() => import('./view/M_HomePage'))

const RouteList = [
  { exact: true, path: "/homepage",    component: HomePage },
  { exact: true, path: "/",    component: M_HomePage }
]


export default RouteList