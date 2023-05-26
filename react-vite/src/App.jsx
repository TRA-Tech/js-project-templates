import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Service1 from "./services/service1";
import WebSocketProvider from "./contexts/WebSocket/Provider";
import WebSocketContext from "./contexts/WebSocket/Context";

import ThemeProvider from "./theme";
import { StyledChart } from "./components/chart";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Router from "./routes";

const App = () => {
  useEffect(() => {
    Service1.Controller1.Action1().then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <WebSocketProvider>
          <ScrollToTop />
          <StyledChart />
          <WebSocketContext.Consumer>
            {() => <Router />}
          </WebSocketContext.Consumer>
        </WebSocketProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
