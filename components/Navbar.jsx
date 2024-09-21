"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#2d3436", // Dark background color
          color: "#ffffff", // White text color
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
        }}
      >
        {/* Logo */}
        <div
          className="navbar-logo"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          QuantaNews
        </div>

        {/* Links */}
        <ul
          className="navbar-links"
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link href="/" style={{ textDecoration: "none", color: "#ffffff" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/world"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              World
            </Link>
          </li>
          <li>
            <Link
              href="/business"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              href="/sports"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              href="/entertainment"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
              href="/games"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              href="/music"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Music
            </Link>
          </li>
        </ul>

        {/* Search Box and Result */}
        <div
          className="navbar-search"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search for more topics"
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              outline: "none",
              backgroundColor: "#ffffff", // White background for input
              color: "#333", // Dark text for input
            }}
          />
          <div
            className="navbar-result"
            style={{
              fontSize: "14px",
              color: "#ffffff", // White text color for the result count
            }}
          >
            Result found: 0
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
