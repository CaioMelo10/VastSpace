import React from "react";
import facebook from "./facebook.svg";
import github from "./icons8-github.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.facebook.com/profile.php?id=100079153225796"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>

        <a
          href="https://github.com/CaioMelo10"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do github" />
        </a>
        
        <a
          href="https://www.instagram.com/caio_francisco.m/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>

      </div>
    </footer>
  );
}
