export const FooterContact = () => {
  return (
    <footer className="pb-7">
      <div className="mt-8 flex w-full items-center justify-center border-t border-bgGray p-2 pt-8 text-center text-textSecondary">
        <p className="mr-auto">Leonel Matias Saliol</p>

        <a
          className=" cursor-pointer text-gray-500"
          href="https://www.linkedin.com/in/leonel-saliol"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-7 w-9 fill-textSecondary hover:fill-v2yellow"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>

        <a href="https://github.com/LeoSaliol" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 fill-textSecondary hover:fill-v2green"
            viewBox="0 0 64 64"
          >
            <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};
