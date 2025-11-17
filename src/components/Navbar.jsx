import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiTrash2 } from "react-icons/fi";

export default function Navbar({
  cartItems,
  onRemoveItem,
  onCheckout,       
  activeSection,
  setActiveSection,
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const menuItems = [
    "Chocolate Lava Cake",
    "Strawberry Cheesecake",
    "Macarons Mix",
    "Croissant Butter",
    "Cinnamon Roll",
    "Tiramisu Slice",
    "Blueberry Muffin",
    "Éclair Chocolate",
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Search 
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    setSearchResults(
      menuItems.filter((m) => m.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // Scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
    setShowSearch(false);
    setShowCart(false);
  };

  // Search → scroll to product card
  const handleSearchSelect = (name) => {
    const target = document.querySelector(`[data-menu-name="${name}"]`);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Glow animation
      target.style.transition = "box-shadow 0.3s ease";
      target.style.boxShadow = "0 0 25px 6px rgba(250,132,43,0.6)";
      setTimeout(() => {
        target.style.boxShadow = "0 4px 14px rgba(242,130,50,0.15)";
      }, 1600);
    }
    setSearchQuery("");
    setShowSearch(false);
  };

  const glowActive = {
    color: "#E24E1B",
    filter: "drop-shadow(0 0 6px rgba(250,132,43,0.7))",
    fontSize: isMobile ? 24 : 23,
    cursor: "pointer",
  };

  const iconDefault = {
    fontSize: isMobile ? 24 : 23,
    color: "#333",
    cursor: "pointer",
    transition: "0.2s ease",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.35)",
        borderBottom: "1px solid rgba(255,255,255,0.25)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        zIndex: 1000,
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 22px",
          height: 72,
        }}
      >
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          style={{
            fontWeight: 800,
            fontSize: 28,
            color: "#E24E1B",
            cursor: "pointer",
            letterSpacing: 0.5,
            userSelect: "none",
          }}
        >
          Meltzy.
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            {["home", "about-us", "menu", "contact-us"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  color: activeSection === id ? "#E24E1B" : "#222",
                  transition: "0.2s ease",
                }}
              >
                {id.toUpperCase().replace("-", " ")}
              </button>
            ))}

            {/* SEARCH ICON */}
            <FiSearch
              onClick={() => {
                setShowSearch((s) => !s);
                setShowCart(false);
              }}
              style={showSearch ? glowActive : iconDefault}
            />

            {/* CART ICON */}
            <div style={{ position: "relative" }}>
              <FiShoppingCart
                onClick={() => {
                  setShowCart((s) => !s);
                  setShowSearch(false);
                }}
                style={showCart ? glowActive : iconDefault}
              />

              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    background: "#E24E1B",
                    color: "#fff",
                    fontSize: 11,
                    padding: "2px 5px",
                    borderRadius: "50%",
                    fontWeight: 700,
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        )}

        {/* MOBILE NAV */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <FiSearch
              onClick={() => {
                setShowSearch((s) => !s);
                setShowCart(false);
                setIsMenuOpen(false);
              }}
              style={showSearch ? glowActive : iconDefault}
            />

            <div style={{ position: "relative" }}>
              <FiShoppingCart
                onClick={() => {
                  setShowCart((s) => !s);
                  setShowSearch(false);
                  setIsMenuOpen(false);
                }}
                style={showCart ? glowActive : iconDefault}
              />

              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    background: "#E24E1B",
                    color: "#fff",
                    fontSize: 10,
                    borderRadius: "50%",
                    padding: "2px 5px",
                    fontWeight: 700,
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </div>

            <div
              onClick={() => {
                setIsMenuOpen((m) => !m);
                setShowSearch(false);
                setShowCart(false);
              }}
              style={{ fontSize: 28, cursor: "pointer", color: "#E24E1B" }}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            padding: "10px 0",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {["home", "about-us", "menu", "contact-us"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === id ? "#E24E1B" : "#222",
                fontSize: 17,
                padding: "12px 0",
                fontWeight: 600,
                width: "100%",
              }}
            >
              {id.toUpperCase().replace("-", " ")}
            </button>
          ))}
        </div>
      )}

      {/* SEARCH BAR */}
      {showSearch && (
        <div
          style={{
            padding: "12px 0",
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.5)",
            animation: "fadeIn 0.2s ease",
            textAlign: "center",
          }}
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari dessert..."
            style={{
              width: isMobile ? "88%" : "55%",
              maxWidth: 520,
              padding: "12px 16px",
              borderRadius: 18,
              border: "1px solid rgba(200,200,200,0.7)",
              fontSize: 15,
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(10px)",
            }}
          />

          {searchQuery && (
            <div
              style={{
                margin: "10px auto",
                width: isMobile ? "88%" : "55%",
                maxWidth: 520,
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: 10,
                boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              {searchResults.length > 0 ? (
                searchResults.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => handleSearchSelect(s)}
                    style={{
                      padding: "12px 14px",
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                    }}
                  >
                    {s}
                  </div>
                ))
              ) : (
                <div style={{ padding: 14, color: "#777" }}>Tidak ditemukan 😢</div>
              )}
            </div>
          )}
        </div>
      )}

      {/* CART POPUP */}
      {showCart && (
        <div
          style={{
            position: "absolute",
            right: isMobile ? 14 : 30,
            top: isMobile ? 70 : 80,
            width: isMobile ? "88%" : 320,
            padding: 14,
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(12px)",
            borderRadius: 16,
            boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
            maxHeight: "70vh",
            overflow: "auto",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <h4 style={{ color: "#E24E1B", marginBottom: 10 }}>Keranjang</h4>

          {cartItems.length === 0 ? (
            <p style={{ color: "#666" }}>Belum ada item</p>
          ) : (
            <>
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                    <div style={{ color: "#777", fontSize: 13 }}>
                      x{item.qty} — Rp{item.price.toLocaleString("id-ID")}
                    </div>
                  </div>

                  <FiTrash2
                    onClick={() => onRemoveItem(item.name)}
                    style={{ cursor: "pointer", color: "#E24E1B" }}
                  />
                </div>
              ))}

              <div style={{ textAlign: "right", marginTop: 10, fontWeight: 700 }}>
                Total: Rp
                {cartItems
                  .reduce((t, i) => t + i.price * i.qty, 0)
                  .toLocaleString("id-ID")}
              </div>

              {/* ★ CHECKOUT BUTTON TERHUBUNG KE App.jsx */}
              <button
                onClick={onCheckout}
                style={{
                  marginTop: 12,
                  width: "100%",
                  border: "none",
                  padding: "10px 0",
                  borderRadius: 10,
                  background: "#E24E1B",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </nav>
  );
}