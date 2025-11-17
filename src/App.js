import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeSection, setActiveSection] = useState("home");
  const [checkoutMessage, setCheckoutMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // Tambah item
  const handleAddToCart = (menu) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.name === menu.name);
      if (found) {
        return prev.map((item) =>
          item.name === menu.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...menu, qty: 1 }];
    });
  };

  // Hapus item
  const handleRemoveItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  // Checkout → clear + popup
  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    setCheckoutMessage("Pesanan sedang diproses 🍰");

    // hapus semua item
    setCartItems([]);

    setTimeout(() => setCheckoutMessage(""), 3000);
  };

  return (
    <ParallaxProvider>
      {/* Popup pesan checkout */}
      {checkoutMessage && (
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            padding: "12px 18px",
            background: "linear-gradient(90deg,#E24E1B,#FA842B)",
            color: "white",
            borderRadius: 14,
            fontWeight: 700,
            zIndex: 9999,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          }}
        >
          {checkoutMessage}
        </div>
      )}

      <Navbar
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main style={{ marginTop: 80 }}>
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection />
        <MenuSection onAddToCart={handleAddToCart} />
        <ContactSection />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}