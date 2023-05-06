import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./context/UserContext.jsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
