import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import VerificationNew from '../components/VerificationNew'
import VerificationList from '../components/VerificationList'
import ViewPrincipal from '../components/ViewPrincipal'
import ExcelImporter from '../components/ExcelImporter'
import Project from '../components/Project'

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <AppIndex />,
      children: [
        { index: true, element: <VerificationList /> },
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
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
