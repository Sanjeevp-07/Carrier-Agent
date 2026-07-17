import { useLocation } from "react-router-dom";

export default function usePageTitle() {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/":
      return "Dashboard";

    case "/profile":
      return "Profile";

    case "/browser":
      return "Browser";

    case "/applications":
      return "Applications";

    case "/settings":
      return "Settings";

    default:
      return "Career Agent";
  }
}