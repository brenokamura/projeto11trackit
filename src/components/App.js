import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import GlobalStyle from "../assets/GlobalStyles";
import Habits from "./Habits";
import Header from "./header/Header";
import Home from "./Home";
import Register from "./Register";
import Today from "./Today";
import History from "./History";

export default function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<History />} />
                    </Routes>
            </BrowserRouter>
        </UserContextProvider>
    )
}