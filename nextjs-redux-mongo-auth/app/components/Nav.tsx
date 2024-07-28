"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";
import useAuth from "@/lib/features/auth/authHook";

export const Nav = () => {
  const pathname = usePathname();
  const loggedIn = useAuth();
  console.log('Nav render ',loggedIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    {
                        !loggedIn &&
                        <li className="nav-item nav-link">
                        <Link
                            className={`${styles.link} ${
                                pathname === "/login" ? styles.active : ""
                            }`}
                            href="/login"
                        >
                            Login
                        </Link>
                    </li>
                    }
                    {
                        loggedIn && <li className="nav-item nav-link">
                        <Link
                            className={`${styles.link} ${
                                pathname === "/logout" ? styles.active : ""
                            }`}
                            href="/logout"
                        >
                            Logout
                        </Link>
                    </li>
                    }
                    {
                        loggedIn && <li className="nav-item nav-link">
                            <Link
                                className={`${styles.link} ${
                                    pathname === "/movies" ? styles.active : ""
                                }`}
                                href="/movies"
                            >
                                Movies
                            </Link>
                        </li>
                    }
                </ul>

            </div>

    </nav>
  );
};
