// Content1.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import './content1.css'; 
import '../../../app/globals.css';

const Content1 = () => {
  useEffect(() => {
    gsap.set("nav", { y: -100 });
    gsap.set(".letter-wrapper", { y: 400 });
    gsap.set(".item-copy-wrapper p", { y: 50 });

    gsap.defaults({ duration: 1, ease: "power3.out" });
    const tl = gsap.timeline({ paused: true, delay: 0.5 });

    tl.to(".letter-wrapper", {
      y: 0,
      stagger: 0.1,
    })
      .to(".header-item-1", {
        left: "12vw",
      })
      .to(
        ".header-item-2",
        {
          right: "8vw",
        },
        "<"
      )
      .to(
        ".item-main .item-img img",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
        "<"
      )
      .to(".header-item-1", {
        left: 0,
        scale: 1,
      })
      .to(
        ".header-item-2",
        {
          right: 0,
          scale: 1,
        },
        "<"
      )
      .to(
        ".item-main .item-img img",
        {
          scale: 1,
        },
        "<"
      )
      .to(
        ".item-side .item-img",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          stagger: 0.1,
        },
        "<"
      )
      .to(
        ".header",
        {
          bottom: "0",
        },
        "<"
      )
      .to(
        ".item-copy-wrapper p",
        {
          y: 0,
          stagger: 0.05,
        },
        "<"
      )
      .to(
        "nav",
        {
          y: 0,
        },
        "<"
      );

    tl.play();
  }, []);

  return (
    <div>
   

      <div className="container">
        <div className="items">
          <div className="items-col">
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>User Research</p>
                </div>
                <div className="item-copy-wrapper">
  <p><a href="https://www.figma.com/board/kgqsnLBSc9rZV0R2wZnZ6y/Layla---UX-Research?node-id=0-1&t=1qBckWAisXDBpi6v-1"> Link</a></p>
</div>
              </div>
              <div className="item-img">
                <img src="../images/content11.jpg" alt="" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>User Flow</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Link)</p>
                </div>
              </div>
              <div className="item-img">
                <img src="../images/content12.jpg" alt="" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Wireframe</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Link)</p>
                </div>
              </div>
              <div className="item-img">
                <img src="../images/content13.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="items-col">
            <div className="item-main">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>App Design</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Link)</p>
                </div>
              </div>
              <div className="item-img">
                <img src="../images/content14.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="items-col">
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Web Design</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Link)</p>
                </div>
              </div>
              <div className="item-img">
                <img src="../images/content15.jpg" alt="" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Prototyping</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Link)</p>
                </div>
              </div>
              <div className="item-img">
                <img src="../images/content16.jpg" alt="" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Usability Testing</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Link)</p>
                </div>
              </div>
              <div className="item-img">
                <img src="../images/content17.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="header-item header-item-1">
            <div className="letter">
              <div className="letter-wrapper">L</div>
            </div>
            <div className="letter">
              <div className="letter-wrapper">a</div>
            </div>
            <div className="letter">
              <div className="letter-wrapper">y</div>
            </div>
     
          </div>
          <div className="header-item header-item-2">
            <div className="letter">
              <div className="letter-wrapper">L</div>
            </div>
            <div className="letter">
              <div className="letter-wrapper">a</div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
