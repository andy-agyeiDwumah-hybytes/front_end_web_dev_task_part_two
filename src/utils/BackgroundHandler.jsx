// React
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const routeClasses = {
  "/": "home",
  "/hello": "hello",
  "/profilecard": "profile",
  "/list": "list",
  "/button": "button",
  "/parentchild": "parent-child",
  "/counter": "counter",
  "/form": "form",
  "/quiz": "quiz",
  "/todolistform": "todolistform",
  "/timer": "timer",
  "/fetchdata": "fetchdata",
};

// Style body background on mount
// Update body background when URL location changes
export default function BackgroundHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    const bodyClass = routeClasses[pathname];
    document.body.className = bodyClass;

    return () => {
      document.body.className = ""; // Reset class on unmount
    };
  }, [pathname]);

  return <><Outlet /></>;
}
