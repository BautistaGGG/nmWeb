import nicoApp from "../assets/plan_app.png";

export default function MuestraApp() {
  return (
    <section style={{background: "linear-gradient(to bottom, white 25%, black 0%, white 25%, white 47%, black 47%, black 0%)"}}>
      <h2 className="my-4 text-[28px] lg:text-3xl xl:text-[2.8rem] text-center italic font-extrabold text-black dark:text-white">
        DESCARGA TU PLAN EN CUALQUIER DISPOSITIVO
      </h2>
      <article className="flex flex-col lg:flex-row justify-center gap-6 py-8 px-4 lg:py-16 lg:px-6 mx-auto max-w-screen-xl ">
        <aside className="grid content-between">
          <div className="grid gap-4">
            <svg
              viewBox="0 0 63 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto h-10 lg:h-[72px] w-10 lg:w-20"
            >
              <path
                d="M61.3438 1.625V50.2493H42.5V19.5252C42.5 14.7778 44.4853 10.2247 48.0192 6.8678C51.5531 3.51087 56.3461 1.625 61.3438 1.625Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50.375 49.9824H61.3438V72.4244C61.3438 73.7707 60.7808 75.0618 59.7786 76.0138C58.7765 76.9658 57.4173 77.5005 56 77.5005H55.7188C54.3016 77.5005 52.9424 76.9658 51.9402 76.0138C50.9381 75.0618 50.375 73.7707 50.375 72.4244V49.9824Z"
                fill="black"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.375 77.4996C12.6593 77.4996 11.014 76.8522 9.80088 75.6998C8.58775 74.5475 7.90625 72.9845 7.90625 71.3548L10.7188 37.959H18.3124L21.1249 71.3548C21.1258 72.1847 20.9497 73.0062 20.6071 73.7697C20.2646 74.5332 19.7627 75.2229 19.132 75.7971C18.5012 76.3713 17.7545 76.8182 16.9369 77.1109C16.1193 77.4035 15.2478 77.5357 14.375 77.4996Z"
                fill="black"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.0313 25.9375C26.5752 28.8518 25.0321 31.5134 22.6833 33.4375C20.3344 35.3616 17.336 36.4201 14.2344 36.4201C11.1328 36.4201 8.1344 35.3616 5.78551 33.4375C3.43663 31.5134 1.89356 28.8518 1.4375 25.9375H27.0313Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.4375 3.76172V25.9366"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0938 3.76172V25.4022"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.0312 3.76172V25.9366"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-gris text-base lg:text-xl text-right font-semibold ml-auto ">
              Vas a saber qué comer en base a tu objetivo
            </p>
          </div>

          <div className="grid gap-4">
            <p className="text-gris text-base lg:text-xl text-right font-semibold ml-auto">
              Alimentación adecuada en función al plan elegido
            </p>
            <svg
              viewBox="0 0 83 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto h-10 lg:h-[72px] w-10 lg:w-20"
            >
              <path
                d="M9.16382 54.6875H72.7262V58.9062C72.7262 61.8899 71.541 64.7514 69.4312 66.8612C67.3214 68.971 64.4599 70.1562 61.4762 70.1562H20.4138C17.4301 70.1562 14.5686 68.971 12.4589 66.8612C10.3491 64.7514 9.16382 61.8899 9.16382 58.9062V54.6875Z"
                fill="#DDDDDD"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M65.1322 37.5314H72.4448C73.5763 37.4937 74.7037 37.684 75.7601 38.0911C76.8165 38.4982 77.7802 39.1137 78.5937 39.901C79.4072 40.6883 80.0539 41.6313 80.4954 42.6737C80.9369 43.7162 81.1641 44.8368 81.1635 45.9689C81.1635 48.2812 80.2449 50.4989 78.6098 52.134C76.9748 53.7691 74.7571 54.6877 72.4448 54.6877H9.44472C8.31262 54.6883 7.19205 54.4611 6.1496 54.0196C5.10714 53.5781 4.16412 52.9313 3.37684 52.1178C2.58955 51.3042 1.97402 50.3406 1.56692 49.2842C1.15983 48.2279 0.969485 47.1004 1.00722 45.9689C0.967935 44.8503 1.15938 43.7356 1.5695 42.6941C1.97962 41.6527 2.5997 40.7068 3.39117 39.9153C4.18263 39.1238 5.12848 38.5037 6.16994 38.0936C7.2114 37.6835 8.32611 37.4921 9.44472 37.5314H34.1948"
                fill="#DDDDDD"
              />
              <path
                d="M65.1322 37.5314H72.4448C73.5763 37.4937 74.7037 37.684 75.7601 38.0911C76.8165 38.4982 77.7802 39.1137 78.5937 39.901C79.4072 40.6883 80.0539 41.6313 80.4954 42.6737C80.9369 43.7162 81.1641 44.8368 81.1635 45.9689C81.1635 48.2812 80.2449 50.4989 78.6098 52.134C76.9748 53.7691 74.7571 54.6877 72.4448 54.6877H9.44472C8.31262 54.6883 7.19205 54.4611 6.1496 54.0196C5.10714 53.5781 4.16412 52.9313 3.37684 52.1178C2.58955 51.3042 1.97402 50.3406 1.56692 49.2842C1.15983 48.2279 0.969485 47.1004 1.00722 45.9689C0.967935 44.8503 1.15938 43.7356 1.5695 42.6941C1.97962 41.6527 2.5997 40.7068 3.39117 39.9153C4.18263 39.1238 5.12848 38.5037 6.16994 38.0936C7.2114 37.6835 8.32611 37.4921 9.44472 37.5314H34.1948"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M81.1637 31.9063C81.1425 33.39 80.536 34.8052 79.4762 35.8438C78.9832 36.3958 78.375 36.833 77.6947 37.1245C77.0144 37.4161 76.2784 37.5549 75.5387 37.5313H60.9137L51.3512 48.5L41.7887 37.5313H6.35122C5.62517 37.5323 4.90648 37.3853 4.2391 37.0994C3.57173 36.8134 2.9696 36.3944 2.46953 35.868C1.96946 35.3416 1.58194 34.7189 1.33056 34.0377C1.07917 33.3566 0.969191 32.6313 1.00741 31.9063C0.969191 31.1812 1.07917 30.456 1.33056 29.7748C1.58194 29.0937 1.96946 28.4709 2.46953 27.9445C2.9696 27.4181 3.57173 26.9992 4.2391 26.7132C4.90648 26.4272 5.62517 26.2802 6.35122 26.2813H75.5387C77.0305 26.2813 78.4613 26.8739 79.5162 27.9288C80.5711 28.9837 81.1637 30.4144 81.1637 31.9063Z"
                fill="white"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.3512 1.25H48.82C55.2349 1.25 61.3871 3.7983 65.9231 8.33434C70.4592 12.8704 73.0076 19.0226 73.0076 25.4375H9.16382C9.16382 19.0226 11.7121 12.8704 16.2481 8.33434C20.7841 3.7983 26.9363 1.25 33.3512 1.25Z"
                fill="#DDDDDD"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.1948 13.9062L28.5699 17.5625"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M55.5701 12.5L59.2263 16.4375"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38.6951 14.1875L42.6326 10.5312"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </aside>

        <img src={nicoApp} alt="nicoApp-mobile" />

        <aside className="grid content-between">
          <div className="grid gap-4">
            <svg
              viewBox="0 0 85 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 lg:h-[72px] w-10 lg:w-20"
            >
              <path
                d="M29.518 31.8188C38.394 31.8188 45.5894 24.9677 45.5894 16.5166C45.5894 8.06539 38.394 1.21436 29.518 1.21436C20.642 1.21436 13.4465 8.06539 13.4465 16.5166C13.4465 24.9677 20.642 31.8188 29.518 31.8188Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.5179 74.6648H0.589355V71.3467C0.640533 66.6813 1.93278 62.1041 4.34538 58.0434C6.75802 53.9824 10.2123 50.5699 14.3855 48.1247C18.5588 45.6794 23.3149 44.2812 28.2096 44.0606C28.646 44.0409 29.0822 44.0306 29.5179 44.0298C29.9537 44.0306 30.39 44.0409 30.8263 44.0606C35.721 44.2812 40.4771 45.6794 44.6504 48.1247C47.0502 49.5308 49.2122 51.2567 51.0751 53.2419"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M84.1608 50.1821L58.4465 80.7865L45.5894 71.6052"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-gris text-base lg:text-xl text-left font-semibold">
              Ejercicios explicados detalladamente en video
            </p>
          </div>

          <div className="grid gap-4">
            <p className="text-gris text-base lg:text-xl text-left font-semibold">
              Apoyo y disciplina constante son la clave para no perder el foco
            </p>
            <svg
              viewBox="0 0 78 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 lg:h-[72px] w-10 lg:w-20"
            >
              <path
                d="M41.0529 5.04027H42.0529H48.0931C49.2088 5.04027 50.1133 4.13582 50.1133 3.02013C50.1133 1.90445 49.2088 1 48.0931 1H39.0327H29.9723C28.8566 1 27.9522 1.90444 27.9522 3.02013C27.9522 4.13583 28.8566 5.04027 29.9723 5.04027H36.0126H37.0126V6.04027V12.8007V13.7264L36.0896 13.7977C16.6679 15.2985 1.375 31.5348 1.375 51.3422C1.375 72.1399 18.2349 89 39.0327 89C59.8305 89 76.6906 72.1399 76.6906 51.3422C76.6906 40.7693 72.3346 31.2157 65.3167 24.3747L64.5914 23.6677L65.3076 22.9515L71.1963 17.063L71.9034 17.7701L71.1963 17.063C72.2802 15.9792 72.2802 14.2221 71.1963 13.1384C70.1124 12.0545 68.3554 12.0545 67.2715 13.1383L61.2321 19.1777L41.0529 5.04027ZM41.0529 5.04027V6.04027M41.0529 5.04027V6.04027M41.0529 6.04027V12.8007V13.7264M41.0529 6.04027V13.7264M41.0529 13.7264L41.9758 13.7977M41.0529 13.7264L41.9758 13.7977M41.9758 13.7977C48.4382 14.297 54.4426 16.4274 59.5791 19.7781L60.3788 20.2998M41.9758 13.7977L60.3788 20.2998M60.3788 20.2998L60.9369 19.5251M60.3788 20.2998L60.9369 19.5251M60.9369 19.5251C61.0241 19.404 61.1221 19.2881 61.2312 19.1786L60.9369 19.5251ZM38.0327 51.3422V51.7564L38.3256 52.0493L56.3974 70.1211C51.836 74.3417 45.7362 76.9195 39.0327 76.9195C24.9068 76.9195 13.4555 65.4679 13.4555 51.3422C13.4555 37.5511 24.3703 26.3094 38.0327 25.7842V51.3422ZM39.0327 17.7247C20.4663 17.7247 5.41527 32.7757 5.41527 51.3422C5.41527 69.9084 20.4663 84.9597 39.0327 84.9597C57.599 84.9597 72.6503 69.9085 72.6503 51.3422C72.6503 32.7757 57.599 17.7247 39.0327 17.7247Z"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
        </aside>
      </article>
    </section>
  );
}
