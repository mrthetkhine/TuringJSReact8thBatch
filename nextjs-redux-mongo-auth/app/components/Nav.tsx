"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/*<Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>*/}



            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active nav-link">
                        <Link
                            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>


                    <li className="nav-item nav-link">
                        <Link
                            className={`${styles.link} ${
                            pathname === "/movies" ? styles.active : ""
                        }`}
                            href="/movies"
                            >
                            Movies
                        </Link>
                    </li>
                </ul>

            </div>

    </nav>
  );
};
