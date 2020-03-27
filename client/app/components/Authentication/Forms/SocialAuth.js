import React from "react";

const SocialAuth = () => {
  return (
    <div className="social-auth">
      <div className="social facebook">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          class="svg-inline--fa fa-facebook-f fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>
      </div>
      <div className="social google">
        <svg
          version="1.1"
          id="Livello_1"
          xmlnsGraph="http://ns.adobe.com/Graphs/1.0/"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 533.5 544.3"
          xmlSpace="preserve"
        >
          <metadata>
            <sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/">
              <slices />
              <sliceSourceBounds
                bottomLeftOrigin="true"
                height="544.3"
                width="533.5"
                x="0.1"
                y="110.1"
              />
            </sfw>
          </metadata>
          <g>
            <path
              class="st0"
              d="M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7   C503.9,431.2,533.5,361.2,533.5,278.4z"
            />
            <path
              class="st1"
              d="M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3   H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z"
            />
            <path
              class="st2"
              d="M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z"
            />
            <path
              class="st3"
              d="M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150   l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z"
            />
          </g>
        </svg>
      </div>
      <div className="social steam">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="steam-symbol"
          class="svg-inline--fa fa-steam-symbol fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SocialAuth;
