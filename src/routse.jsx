import { lazy } from 'react'

const M_HomePage = lazy(() => import('./view/M_HomePage'))
// const HomePage = lazy(() => import('./view/HomePage'))

const RouteList = [
  { exact: true, path: "/",    component: M_HomePage },
  // { exact: true, path: "/homepage",    component: HomePage },
]


export default RouteList