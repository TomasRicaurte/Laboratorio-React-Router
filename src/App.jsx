import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { EventListPage } from "./pages/EventListPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { TicketPaymentPage } from "./pages/TicketPaymentPage";

export function AppRouter() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />
          <Route
            path="/events/:eventId/tickets/:priceId"
            element={<TicketPaymentPage />}
          />
        </Routes>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
