import "./FAQ.css";
import { Arrow } from "../assets";
import { useState } from "react";

function FAQ() {
  const [faq, setFaq] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
  });
  return (
    <div className="FAQBox">
      <h1 className="FAQBox-Title">Frequently Asked Questions</h1>
      <p className="FAQBox-Para">
        Here are some of our FAQs. If you have any other questions you&apos;d
        like answered please feel free to email us.
      </p>
      <ul className="FAQBox-Questions">
        <li>
          <div className="FAQBox-Questions-Head">
            <p className="FAQBox-Questions-Head-Question">What is Bookmark?</p>
            <button
              className={
                faq.faq1
                  ? "FAQBox-Questions-Head-Btn active"
                  : "FAQBox-Questions-Head-Btn"
              }
              aria-label="answer"
              onClick={() => setFaq((prev) => ({ ...prev, faq1: !prev.faq1 }))}
            >
              <img src={Arrow} alt="" />
            </button>
          </div>
          {faq.faq1 && (
            <p className="FAQBox-Questions-Answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          )}
        </li>
        <li>
          <div className="FAQBox-Questions-Head">
            <p className="FAQBox-Questions-Head-Question">
              How can I request a new browser?
            </p>
            <button
              className={
                faq.faq2
                  ? "FAQBox-Questions-Head-Btn active"
                  : "FAQBox-Questions-Head-Btn"
              }
              aria-label="answer"
              onClick={() => setFaq((prev) => ({ ...prev, faq2: !prev.faq2 }))}
            >
              <img src={Arrow} alt="" />
            </button>
          </div>
          {faq.faq2 && (
            <p className="FAQBox-Questions-Answer">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          )}
        </li>
        <li>
          <div className="FAQBox-Questions-Head">
            <p className="FAQBox-Questions-Head-Question">
              Is there a mobile app?
            </p>
            <button
              className={
                faq.faq3
                  ? "FAQBox-Questions-Head-Btn active"
                  : "FAQBox-Questions-Head-Btn"
              }
              aria-label="answer"
              onClick={() => setFaq((prev) => ({ ...prev, faq1: !prev.faq3 }))}
            >
              <img src={Arrow} alt="" />
            </button>
          </div>
          {faq.faq3 && (
            <p className="FAQBox-Questions-Answer">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          )}
        </li>
        <li>
          <div className="FAQBox-Questions-Head">
            <p className="FAQBox-Questions-Head-Question">
              What about other Chromium browsers?
            </p>
            <button
              className={
                faq.faq4
                  ? "FAQBox-Questions-Head-Btn active"
                  : "FAQBox-Questions-Head-Btn"
              }
              aria-label="answer"
              onClick={() => setFaq((prev) => ({ ...prev, faq1: !prev.faq4 }))}
            >
              <img src={Arrow} alt="" />
            </button>
          </div>
          {faq.faq4 && (
            <p className="FAQBox-Questions-Answer">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          )}
        </li>
      </ul>
      <button className="FAQBox-Btn">more info</button>
    </div>
  );
}
export default FAQ;
