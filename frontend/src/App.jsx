import { FrappeProvider } from "frappe-react-sdk";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./helpers/scroll-top";
function App() {
  return (
    <div className="App">
      <FrappeProvider
        siteName={import.meta.env.VITE_SITE_NAME}
        socketPort={import.meta.env.VITE_SOCKET_PORT}
      >
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="ev-car-preloader-wrapper">
                <div className="ev-car-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ScrollToTop>
      </FrappeProvider>
    </div>
  );
}

export default App;
