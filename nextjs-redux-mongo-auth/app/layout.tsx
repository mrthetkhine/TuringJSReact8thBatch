import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import styles2 from './components/movie/movie.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@smastrom/react-rating/style.css'
interface Props {
  readonly children: ReactNode;
}
console.log('Style2 ',styles2.movieContainer);
console.log('Style ',styles.container);
export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />


            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span>Copyright by Turing Training Center </span>

            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
