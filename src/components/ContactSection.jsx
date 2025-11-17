import React from "react";

export default function ContactSection() {
  return (
    <section id="contact-us" data-aos="fade-up" style={{ background: "#faf8f6", padding: "50px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", padding: "0 18px" }}>
        <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 14, color: "#E24E1B" }}>Contact Us</h2>
        <div style={{ fontSize: 16.5, maxWidth: 640, margin: "0 auto 20px", color: "#333" }}>
          Ada pertanyaan, saran, atau ingin order? Hubungi kami lewat email atau telepon — kami siap membantu.
        </div>
        <div style={{ fontSize: 16, color: "#C6A37A", fontWeight: 700 }}>
          📧 <a href="mailto:Meltzy@gmail.com" style={{ color: "#C6A37A", textDecoration: "none" }}>Meltzy@gmail.com</a>
          &nbsp; | &nbsp; 📞 0812-1234-5678
          <br />
          📍 Jl. Durian No. 24A, Bandung
        </div>
      </div>
    </section>
  );
}