import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import VerificationNew from '../components/VerificationNew'
// import VerificationList from '../components/VerificationList'
import ViewPrincipal from '../components/ViewPrincipal'
import ExcelImporter from '../components/ExcelImporter'
import Project from '../components/Project'
import Signin from '../components/Signin'
import Dashboard from '../components/Dashboard'
import VerificationList from '../components/VerificationList'

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Signin />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/verification-list",
            element: <VerificationList />,
        },
        {
            path: "/new-verification",
            element: <VerificationNew />,
        },
        {
          path: "/view-principal",
          element: <ViewPrincipal />,
        },
        {
          path: "/upload",
          element: <ExcelImporter />,
        },
        {
          path: "/create-new-list",
          element: <Project />,
        },
      ]
    }
  ])
  return element;
}
export default AppNavigation;
