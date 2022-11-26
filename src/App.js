import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import "./App.css";
import Layout from "./layout";

import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function App() {
  return (
    <div className="App">
      <WagmiConfig client={client}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pages.Home />} />
              <Route path="/create-channel" element={<Pages.CreateChannel />} />
              <Route
                path="/send-notification"
                element={<Pages.SendNotefication />}
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </WagmiConfig>
    </div>
  );
}

export default App;
