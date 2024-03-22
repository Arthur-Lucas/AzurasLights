import "./App.css";
import video from "./images/bg-azura.mp4";
import svgLogo from "./images/Logo_Azura_Revert.svg";
import { gsap } from "gsap";
import TitleAzura from "./images/TitleAzura.svg";
import { useEffect } from "react";
import streamBG from "./images/streamBG.svg";
import Ellipse1 from "./images/Ellipse1.svg";
import Ellipse2 from "./images/Ellipse2.svg";
import Ellipse3 from "./images/Ellipse3.svg";
import Ellipse4 from "./images/Ellipse4.svg";

function App() {
  useEffect(() => {
    const appGrid = document.querySelector(".bg-grid");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;

    const Logo = document.querySelector(".LogoSection");
    const titleAzura = document.querySelector(".titleAzura");

    // Écoutez l'événement animationend sur le premier élément
    Logo.addEventListener("animationend", () => {
      // Activez l'animation du deuxième élément lorsque la première est terminée
      titleAzura.style.animationPlayState = "running";
    });

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let divWidth = 30;
    let divHeight = 30;

    let numDivsWidth = Math.floor(screenWidth / divWidth);

    let numDivsHeight = Math.floor(screenHeight / divHeight);
    // Calcul du nombre total de divs
    let numberOfDivs = numDivsWidth * numDivsHeight;
    numberOfDivs = numberOfDivs / 2;
    for (let i = 0; i < numberOfDivs; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.innerText = characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
      appGrid.appendChild(gridItem);
    }
  }, []);

  function scrollTo() {
    document.getElementById("streamSection").scrollIntoView();
  }

  function changeBackground(event) {
    // event.target.style.background;
    const container = event.currentTarget; // Get the container div
    const containerRect = container.getBoundingClientRect();
    let xRelativeToContainer = event.clientX - containerRect.left;
    let yRelativeToContainer = event.clientY - containerRect.top;

    let leftPositionPercent =
      100 - (xRelativeToContainer / containerRect.width) * 100;
    let topPositionPercent =
      100 - (yRelativeToContainer / containerRect.height) * 100;

    // gsap.set([event.target], { opacity: 0 });
    gsap.to(event.currentTarget, {
      background:
        "radial-gradient(circle at " +
        leftPositionPercent +
        "% " +
        topPositionPercent +
        "%" +
        ",rgba(90, 85, 146, 1), rgba(144, 167, 222, 1), rgba(255, 255, 255, 1) 35%)",
      duration: 5,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-grid"></div>
        <svg className="svg-defs">
          <defs>
            <clipPath id="logo">
              <path
                d="M188.9,23.53v-6.07h-41.5c12.52-5.18,24.43-13.36,39.4-6.26.71-2.64,1.21-4.52,1.89-7.09,29.71-5.59,60.07-5.45,89.85.26.42,2.22.76,4.03,1.26,6.71,13.9-6.48,25.38.84,37.4,5.7h-40.99v6.52c12.8,0,25.23,1.07,37.39-.25,17.51-1.9,31.38,4.98,45.33,14.08,18.14,11.84,33.99,26.17,48.53,41.96,11.09,12.04,20.07,25.71,28.32,39.91,12.17,20.95,19.95,43.5,25.34,66.92,4.93,21.43,5.59,43.38,4,65.1-2.32,31.7-11.09,61.93-26.19,90.03-7.97,14.83-17.29,28.82-28.34,41.69-18.58,21.64-40.08,39.49-64.89,53.57-22.36,12.7-46.36,20.72-71.37,25.83-19.73,4.03-39.92,4.42-59.84,2.9-31.35-2.39-61.28-10.95-89.13-25.82-15.01-8.01-29.14-17.38-42.18-28.47-20.58-17.51-37.86-37.73-51.55-60.95-12.41-21.07-20.79-43.75-26.35-67.59C.08,259.92-.84,237.3.64,214.76c1.7-25.82,8.16-50.79,18.73-74.58,9.28-20.91,21.11-40.13,36.05-57.51,18.42-21.42,39.97-38.75,64.14-53.43,12.29-7.46,24.78-5.08,37.36-5.61,10.43-.44,20.9-.09,31.99-.09ZM73.35,380.49c.53.09,1.05.19,1.58.28.83-6.06,1.31-12.19,2.55-18.17,4.6-22.29,19.79-37.56,41.37-41.25,16.55-2.83,33.29-2.5,49.7.56,12.75,2.38,25.14,6.64,38.15,10.19,7.76-24.86,15.79-50.57,23.81-76.26-9.89-11.19-19.55-22.12-29.31-33.17,7.93-8.64,15.57-16.96,23.51-25.61v-106.78l-.8-.04c-2.85,34.19-5.69,68.38-8.51,102.28-9.64,10.33-19.02,20.37-28.4,30.43,7.16,8.34,13.43,16.61,20.72,23.86,7,6.96,9.49,14.91,8.65,24.31-.79,8.83-2.98,17.18-8.58,24.47-23.15-10.64-47.12-15.17-72.09-14.33-25.65.86-52.3,22.07-57.02,47.25-3.19,17.06-3.65,34.63-5.32,51.97ZM258.79,333.53c25.73-12.64,52.47-15.03,79.89-13.25,21.71,1.41,38.74,13.9,45.51,34.55,2.71,8.26,3.67,17.09,5.24,24.69-.01.15.21-.82.14-1.78-1.06-15.43-1.37-30.96-3.42-46.26-3.29-24.52-30.09-48.85-54.16-50.11-19.95-1.04-39.53,1.3-58.48,7.84-5.58,1.92-11.06,4.12-16.58,6.18-5.82-8.56-8.19-17.8-8.21-27.62-.01-6.9,1.37-13.13,6.69-18.62,7.95-8.21,14.94-17.35,22.48-26.25-9.71-10.49-19.2-20.74-28.18-30.45-2.82-34.46-5.58-68.08-8.33-101.69-.24.02-.49.04-.73.06v106.43c7.68,8.43,15.3,16.78,23.18,25.43-9.79,11.16-19.42,22.14-29.09,33.18,8,25.82,15.94,51.44,24.07,77.68ZM384.15,155.28c-18.67,14.45-30.65,32.79-39.28,53.52-9.72,23.35-6.79,44.98,8.53,65.21,9.63,12.72,22.82,20.07,36.92,26.3,3.95,1.75,8.02,3.23,12.03,4.84-1.19-1.76-2.76-2.58-4.35-3.37-21.49-10.68-34.02-34-30.91-57.65,2.38-18.16,10.39-33.86,21.8-47.84,7.55-9.25,15.72-17.98,23.82-27.17-20.11-16.58-39.85-32.85-59.69-49.2-11.21,4.15-22.19,8.22-33.38,12.37-2.33-8.21-4.57-16.12-6.66-23.48h-33.91c-4.2,3.98-7.76,7.36-12.35,11.72,15.04-3.03,28.6-5.77,42.11-8.49,3.35,9.41,6.48,18.21,9.67,27.16,11.12-5.12,21.66-9.98,32.34-14.9,11,10.23,21.94,20.4,33.32,30.98ZM52.22,169.07c5.55,6.41,10.6,12.81,16.24,18.65,12.1,12.53,21.06,26.89,26.46,43.44,8.76,26.84-.68,53.73-23.99,68.31-2.83,1.77-5.87,3.22-8.82,4.82,17.51-6.02,34.75-12.61,46.92-27.47,12.94-15.79,19.63-33.5,15.08-54.18-3.22-14.65-9.71-28.02-18.36-40.04-7.11-9.89-15.71-18.72-23.97-28.4,10.19-9.49,21.12-19.68,32.08-29.89,10.72,4.95,21.26,9.82,32.23,14.89,3.27-9.13,6.47-18.07,9.72-27.17,13.77,2.79,27.09,5.5,40.41,8.2.12-.3.24-.59.36-.89-3.61-3.36-7.22-6.72-11.39-10.6h-33.57c-2.18,7.72-4.4,15.6-6.65,23.55-11.45-4.25-22.46-8.33-33.32-12.36-20,16.54-39.59,32.74-59.43,49.14ZM234.85,147.42V63.5c-1.9.12-3.42.22-5.05.33v83.6h5.05ZM344.15,81.5c-24.47-14.13-48.52-28.03-72.89-42.11-1.04,2.02-1.75,3.4-2.57,4.99,24.38,14.07,48.34,27.89,72.63,41.9,1.03-1.73,1.82-3.08,2.84-4.79ZM123.61,86.22c24.42-14.11,48.47-28.01,72.82-42.08-1.32-1.83-2.16-3-3.28-4.56-24.27,14.03-48.3,27.92-72.71,42.03,1.28,1.86,2.18,3.16,3.18,4.6ZM197.53,52.22c-17.93,17.87-35.39,35.28-53.77,53.59.96.92,2.16,2.07,2.71,2.6,18.49-18.34,36.13-35.84,53.97-53.53-.9-.83-1.95-1.79-2.9-2.66ZM185.67,29.69c-24.29,6.51-48.33,12.95-72.79,19.51,1.02,2.32,1.64,3.74,2.37,5.39,24.28-6.52,48.16-12.93,72.5-19.46-.8-2.09-1.36-3.56-2.08-5.44ZM203.36,139.11c6.48-24.2,12.89-48.14,19.42-72.52-2.16-.53-3.64-.89-5.36-1.31-6.52,24.39-12.89,48.2-19.35,72.34,1.93.54,3.29.93,5.29,1.49ZM266.71,137.62c-6.55-24.42-12.98-48.34-19.51-72.7-2.05.78-3.37,1.29-5.16,1.97,6.5,24.23,12.92,48.17,19.39,72.28,2-.58,3.25-.95,5.29-1.54ZM279,29.84c-.61,1.96-1.06,3.42-1.63,5.26,24.36,6.53,48.18,12.91,72.34,19.38.56-1.86,1-3.33,1.58-5.28-24.28-6.5-48.11-12.89-72.29-19.36ZM264.64,54.67c18,18.13,35.4,35.66,53,53.4.86-.94,1.83-1.99,2.49-2.71-17.73-17.73-35.21-35.2-53.24-53.23-.72.82-1.67,1.88-2.25,2.54ZM285.65,107.09c-9.86-17.08-19.44-33.69-29.27-50.72-1.75,1.21-3.01,2.08-4.48,3.09,9.41,16.25,18.56,32.03,27.59,47.63h6.15ZM208.35,56.39c-9.8,17-19.24,33.36-29.1,50.47,2.9-.36,4.67-.57,6.67-.82,8.91-15.43,17.83-30.88,26.91-46.61-1.52-1.03-2.69-1.82-4.48-3.04ZM345.53,88.76c13.34,7.68,26.18,15.08,39.33,22.65.98-1.77,1.73-3.13,2.68-4.84-13.22-7.64-26.06-15.07-39.14-22.62-1,1.67-1.73,2.9-2.87,4.81ZM80.11,111.22c13.1-7.56,25.84-14.92,38.99-22.51-1.09-1.77-1.9-3.08-2.85-4.62-13.13,7.6-25.89,14.97-39,22.56,1.06,1.68,1.89,3,2.87,4.56ZM296.21,136.2c7.77,13.41,15.14,26.13,22.68,39.15,1.72-1.14,3.03-2,4.49-2.97-7.54-13.05-14.9-25.77-22.48-38.89-1.64.94-2.99,1.72-4.7,2.71ZM163.89,133.41c-7.7,13.32-15.06,26.07-22.6,39.13,1.68.96,3.04,1.73,4.68,2.67,7.59-13.13,14.97-25.9,22.5-38.91-1.55-.97-2.75-1.73-4.57-2.88ZM171.07,131.76c2.6-4.57,4.87-8.56,7.44-13.08-2.27-.27-3.98-.48-5.75-.7-2.18,3.84-4.19,7.38-6.34,11.16,1.65.92,2.9,1.63,4.65,2.61ZM298.36,129.1c-2.25-3.88-4.29-7.4-6.4-11.04-1.83.2-3.4.36-5.73.61,2.59,4.57,4.91,8.65,7.45,13.12,1.73-1,3.08-1.78,4.68-2.69Z"
                style={{ fill: "#fff", strokeWidth: "0px" }}
              />
            </clipPath>
          </defs>
        </svg>
        <div className="header-content">
          <div className="LogoSection">
            <div className="sourceVideo">
              <video muted autoPlay loop autoFocus>
                <source src={video}></source>
              </video>
            </div>
            <span className="circle"></span>
          </div>
          <div className="titleAzura">
            <span className="topBarTitle"></span>
            <img src={TitleAzura}></img>
            <div className="downTitle">
              <span className="downBarTitle"></span>
              <button onClick={scrollTo}>Online</button>
              <span className="downBarTitle"></span>
            </div>
          </div>
        </div>
      </header>
      <section id="streamSection" className="stream-section">
        <div className="background-radiant" onMouseMove={changeBackground}>
          <div className="stream-blur">
            <div className="stream-box">
              <img className="ellipse-logo-animated Ellipse1" src={Ellipse1} />
              <img className="ellipse-logo-animated Ellipse2" src={Ellipse2} />
              <img className="ellipse-logo-animated Ellipse3" src={Ellipse3} />
              <img className="ellipse-logo-animated Ellipse4" src={Ellipse4} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
