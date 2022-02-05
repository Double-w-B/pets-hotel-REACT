import React, { useRef } from "react";
import iconBone from "../icons/bone.png";
import { useGlobalContext } from "../context/context";
import { necessariesLinks } from "../data/Data";

const NecessaryInfo = () => {
  const {
    setShowLinksH,
    showLinksH,
    handleClick,
    scrollPosition,
    checkLocation,
  } = useGlobalContext();

  const necSec = useRef();

React.useEffect(() => {
  checkLocation(necSec, "necessary-info");
});

  React.useEffect(() => {
    let necSecH = necSec.current.getBoundingClientRect().y;
    scrollPosition > necSecH * 8.5 && setShowLinksH(true);;
  }, [scrollPosition, setShowLinksH]);

  return (
    <section id="necessary-info" ref={necSec} onClick={handleClick}>
      <div className="info-heading">
        <h2>Check-in necessaries</h2>
      </div>

      <div className="info-stuff">
        <ul>
          {necessariesLinks.map((link, index) => {
            const { txt, spanTxt } = link;

            return (
              <li
                key={index}
                className={showLinksH ? `li${index + 1} show-links`: ""}
              >
                <img src={iconBone} alt="icon" className="no-select" />
                <p>
                  {txt} {spanTxt && <span>({spanTxt})</span>}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default NecessaryInfo;
