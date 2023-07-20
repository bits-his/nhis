import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import VerificationNew from '../components/VerificationNew'
import VerificationList from '../components/VerificationList'
import ViewPrincipal from '../components/ViewPrincipal'
import ExcelImporter from '../components/ExcelImporter'

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <VerificationList />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AppIndex /> },
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
      ],
    },
  ]);
  return element
}
export default AppNavigation
