import React from "react";

import LavaCake from "../assets/Chocolate.png";
import Cheesecake from "../assets/Cheesecake.png";
import Macarons from "../assets/Macarons.png";
import Croissant from "../assets/Croissant.png";
import Cinnamon from "../assets/Cinnamon.png";
import Tiramisu from "../assets/Tiramisu.png";
import Blueberry from "../assets/Blueberry.png";
import Eclair from "../assets/Éclair.png";

export default function MenuSection({ onAddToCart }) {
  const menus = [
    { name: "Chocolate Lava Cake", img: LavaCake, price: 28000 },
    { name: "Strawberry Cheesecake", img: Cheesecake, price: 32000 },
    { name: "Macarons Mix", img: Macarons, price: 27000 },
    { name: "Croissant Butter", img: Croissant, price: 19000 },
    { name: "Cinnamon Roll", img: Cinnamon, price: 21000 },
    { name: "Tiramisu Slice", img: Tiramisu, price: 29000 },
    { name: "Blueberry Muffin", img: Blueberry, price: 17000 },
    { name: "Éclair Chocolate", img: Eclair, price: 23000 },
  ];

  return (
    <div
      id="menu"
      data-aos="fade-up"
      style={{
        width: "100%",
        padding: "18px 0 70px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 18px",
        }}
      >
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(24px, 3.6vw, 34px)",
            color: "#111",
            marginBottom: 10,
            background: "linear-gradient(90deg,#E24E1B,#FA842B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Explore Our Desserts & Pastries
        </h2>

        <p
          style={{
            fontSize: 16.5,
            color: "#555",
            maxWidth: 680,
            margin: "0 auto 26px",
            lineHeight: 1.6,
          }}
        >
          Manjakan hari kamu dengan pilihan dessert dan pastry lembut, manis,
          dan fresh dari oven!
        </p>

        {/* GRID */}
        <div className="menu-grid">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="menu-card"
              data-menu-name={menu.name}
            >
              <div className="img-box">
                <img src={menu.img} alt={menu.name} />
              </div>

              <div className="menu-name">{menu.name}</div>

              <div className="menu-price">
                Rp{menu.price.toLocaleString("id-ID")},-
              </div>

              <button onClick={() => onAddToCart(menu)} className="add-btn">
                + Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .menu-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 24px;
            margin-top: 26px;
          }

          @media (max-width: 960px) {
            .menu-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 620px) {
            .menu-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          .menu-card {
            width: 100%;
            background: #fff;
            border-radius: 14px;
            padding: 14px;
            box-shadow: 0 8px 30px rgba(242,130,50,0.07);
            transition: transform .2s ease, box-shadow .2s ease;
            will-change: transform;
          }

          .menu-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 14px 38px rgba(250,132,43,0.20);
          }

          .img-box {
            width: 100%;
            height: 120px;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 10px;
          }

          .img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .menu-name {
            font-weight: 700;
            color: #333;
            font-size: 15px;
            margin-bottom: 6px;
          }

          .menu-price {
            font-weight: 600;
            color: #ce8a23;
            font-size: 14px;
            margin-bottom: 10px;
          }

          .add-btn {
            width: 100%;
            background: linear-gradient(90deg,#E24E1B,#FA842B);
            color: #fff;
            border: none;
            border-radius: 10px;
            padding: 10px 0;
            font-weight: 700;
            cursor: pointer;
            transition: opacity 0.2s ease;
          }

          .add-btn:hover {
            opacity: .92;
          }
        `}
      </style>
    </div>
  );
}