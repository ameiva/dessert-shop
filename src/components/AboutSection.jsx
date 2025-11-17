import React from "react";
import mainImg from "../assets/dessert.png";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="100"
      style={{
        background: "#fff",
        padding: "90px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* glow */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "8%",
          width: 220,
          height: 220,
          background: "radial-gradient(circle, rgba(250,132,43,0.18), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          right: "12%",
          width: 160,
          height: 160,
          background: "radial-gradient(circle, rgba(226,78,27,0.16), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
          padding: "0 18px",
        }}
      >
        <div
          data-aos="fade-right"
          style={{
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={mainImg}
            alt="Delicious dessert"
            style={{
              width: "100%",
              maxWidth: 420,
              objectFit: "contain",
              borderRadius: 18,
              filter: "drop-shadow(0 12px 30px rgba(250,132,43,0.18))",
              transition: "transform 0.5s ease, filter 0.5s ease",
            }}
            className="dessert-img"
          />
          {/* glossy overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "55%",
              height: "40%",
              background: "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0))",
              pointerEvents: "none",
              borderRadius: 12,
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Teks kanan */}
        <div data-aos="fade-left" style={{ flex: "1 1 420px", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              marginBottom: 18,
              background: "linear-gradient(90deg,#E24E1B,#FF8C42,#E24E1B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shineText 6s linear infinite",
            }}
          >
            About Us
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "#444",
              marginBottom: 20,
              maxWidth: 520,
            }}
          >
            <strong style={{ color: "#E24E1B" }}>Meltzy</strong> menghadirkan dessert dan pastry buatan tangan
            yang lembut dan lezat — dibuat dari bahan-bahan premium untuk memberikan pengalaman manis yang tak
            terlupakan. Setiap gigitan membawa rasa hangat, kenangan manis, dan sedikit kemewahan di setiap momen✨
          </p>

          <div style={{ display: "flex", gap: 36, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: 26, margin: 0, color: "#E24E1B", fontWeight: 800 }}>3+</h3>
              <div style={{ fontSize: 14, color: "#666" }}>Years of Experience</div>
            </div>

            <div>
              <h3 style={{ fontSize: 26, margin: 0, color: "#E24E1B", fontWeight: 800 }}>8</h3>
              <div style={{ fontSize: 14, color: "#666" }}>Best Foods</div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes shineText {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          .dessert-img:hover {
            transform: scale(1.04);
            filter: drop-shadow(0 20px 48px rgba(226,78,27,0.22));
          }
          @media (max-width: 920px) {
            section#about-us { padding: 60px 12px; text-align: center; }
            .dessert-img { max-width: 280px; margin: 0 auto 18px; }
          }
        `}
      </style>
    </section>
  );
}