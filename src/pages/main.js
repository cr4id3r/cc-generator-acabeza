import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VisaComponent } from "./cards/visa";
import { MasterCardComponent } from "./cards/mastercard";
import { AXComponent } from "./cards/ax";

export default function CCGeneratorApp() {
    return (
        <div className="app_wrapper">
            <Router>
                <Header />
                <div className="content_wrapper">
                    <Routes>
                        <Route path="/" element={<VisaComponent />} />
                        <Route path="/visa" element={<VisaComponent />} />
                        <Route path="/mastercard" element={<MasterCardComponent />} />
                        <Route path="/ax" element={<AXComponent />} />
                        <Route path="*" element={<VisaComponent />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}
