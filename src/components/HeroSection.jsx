import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import mainDessert from "../assets/dessert.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection({ setActiveSection }) {
  const [typedText, setTypedText] = useState("");
  const textToType = "Taste the Happiness";

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    let i = 0;
    const typing = setInterval(() => {
      if (i < textToType.length) {
        setTypedText(textToType.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const handleViewMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      const yOffset = -80;
      const y =
        menuSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection("menu");
    }
  };

  return (
    <section
      id="home"
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #FFF3E1 0%, #FFE0CC 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "0 20px",
      }}
    >
      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(250,132,43,0.2), transparent 70%)",
          top: "40%",
          left: "15%",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      ></div>

      {/* Content Wrapper */}
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-content"
      >
        <Parallax speed={-10}>
          <div
            data-aos="fade-right"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            className="hero-left"
          >
            <div className="hero-image-mobile">
              <img
                src={mainDessert}
                alt="Dessert Collection"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 6px 18px rgba(250,132,43,0.4))",
                  animation: "float 6s ease-in-out infinite",
                  marginBottom: "20px",
                }}
              />
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 18,
                color: "#222",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #E24E1B, #FA842B, #FFD18F)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "block",
                }}
              >
                Sweetness Awaits
              </span>
              {typedText}
              <span
                style={{
                  color: "#E24E1B",
                  animation: "blink 1s infinite",
                }}
              >
                |
              </span>
            </h1>

            <p
              style={{
                fontSize: 17,
                color: "#555",
                marginBottom: 30,
                maxWidth: 450,
                lineHeight: 1.6,
              }}
            >
              Discover our handmade desserts, baked fresh daily with love.  
              A perfect treat for every sweet moment in life.
            </p>

            <button
              onClick={handleViewMenu}
              style={{
                background: "linear-gradient(90deg, #E24E1B, #FA842B)",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 6px 16px rgba(250,132,43,0.4)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow =
                  "0 8px 20px rgba(250,132,43,0.55)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 6px 16px rgba(250,132,43,0.4)";
              }}
            >
              View Menu 🍰
            </button>
          </div>
        </Parallax>

        <Parallax speed={5}>
          <div
            data-aos="fade-left"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hero-image-desktop"
          >
            <img
              src={mainDessert}
              alt="Dessert Collection"
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 6px 18px rgba(250,132,43,0.4))",
                animation: "float 6s ease-in-out infinite",
              }}
            />
          </div>
        </Parallax>
      </div>

      {/* Animations & Responsiveness */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
            100% { transform: translateY(0px); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          @media (max-width: 1024px) {
            .hero-content {
              flex-direction: column;
              text-align: center;
              gap: 30px;
              justify-content: center;
              align-items: center;
            }

            .hero-left {
              align-items: center !important;
              justify-content: center !important;
              text-align: center !important;
            }

            .hero-content h1 {
              font-size: clamp(30px, 6vw, 50px);
            }

            .hero-content p {
              margin: 0 auto 25px;
              max-width: 90%;
            }

            .hero-image-desktop {
              display: none !important;
            }

            .hero-image-mobile {
              display: block !important;
            }
          }

          @media (min-width: 1025px) {
            .hero-image-mobile {
              display: none !important;
            }
            .hero-image-desktop {
              display: flex !important;
            }
          }

          @media (max-width: 600px) {
            section#home {
              height: auto;
              padding: 60px 20px;
            }

            .hero-content h1 {
              font-size: clamp(26px, 7vw, 42px);
              line-height: 1.2;
            }

            .hero-content img {
              max-width: 240px !important;
            }

            button {
              font-size: 15px;
              padding: 10px 22px;
            }
          }
        `}
      </style>
    </section>
  );
}