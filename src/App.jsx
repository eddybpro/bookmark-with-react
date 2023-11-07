import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ExtensionCard from "./components/ExtensionCard";
import FAQ from "./components/FAQ";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { data } from "./extensionData";
import { featuresData } from "./featuresData";

function App() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <Header />
      <main>
        <div className="FeaturesWrapper">
          <div className="FeaturesWrapper-FirstPart">
            <h1 className="FeaturesWrapper-FirstPart-Title">features</h1>
            <p className="FeaturesWrapper-FirstPart-Para">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="FeaturesWrapper-BtnsBox">
            <button
              className={
                slide == 0
                  ? "FeaturesWrapper-BtnsBox-Btn active"
                  : "FeaturesWrapper-BtnsBox-Btn"
              }
              onClick={() => setSlide(0)}
            >
              simple bookmarking
            </button>
            <button
              className={
                slide == 1
                  ? "FeaturesWrapper-BtnsBox-Btn active"
                  : "FeaturesWrapper-BtnsBox-Btn"
              }
              onClick={() => setSlide(1)}
            >
              speedy searching
            </button>
            <button
              className={
                slide == 2
                  ? "FeaturesWrapper-BtnsBox-Btn active"
                  : "FeaturesWrapper-BtnsBox-Btn"
              }
              onClick={() => setSlide(2)}
            >
              easy sharing
            </button>
          </div>
          <div className="FeaturesWrapper-FeaturesBox">
            {featuresData.map((feature, idx) => (
              <div
                key={idx}
                className={slide == idx ? "slide active" : "slide"}
              >
                <Feature data={feature} />
              </div>
            ))}
          </div>
        </div>

        <div className="ExtensionWrapper">
          <div className="ExtensionWrapper-FirstPart">
            <h1 className="ExtensionWrapper-FirstPart-Title">
              Download the extension
            </h1>
            <p className="ExtensionWrapper-FirstPart-Para">
              We&apos;ve got more browsers in the pipeline. Please do let us
              know if you&apos;ve got a favourite you&apos;d like us to
              prioritize.
            </p>
          </div>
          <div className="ExtensionWrapper-ExtensionBox">
            {data.map((extension, idx) => (
              <ExtensionCard key={idx} data={extension} />
            ))}
          </div>
        </div>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
