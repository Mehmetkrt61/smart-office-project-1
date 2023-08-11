import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState({
    isik: false,
    perde: false,
    klima: false,
    nemlendirici: false,
    ofisegiris: false,
    ofistencikis: false,
  });

  const [isEntered, setIsEntered] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const [button1Text, setButton1Text] = useState("Işıkları aç");
  const [button2Text, setButton2Text] = useState("Perdeyi aç");
  const [button3Text, setButton3Text] = useState("Klimayı aç");
  const [button4Text, setButton4Text] = useState("Nemlendiriciyi aç");

  const handleEnter = () => {
    setIsEntered((prevIsEntered) => !prevIsEntered);
    setIsExited(false); // Reset exit button state
  };

  const handleExit = () => {
    setIsExited((prevIsExited) => !prevIsExited);
    setIsEntered(false); // Reset enter button state
  };

  useEffect(() => {
    if (isWaiting) {
      setTimeout(() => {
        setIsWaiting(false);
        setIsOpen({
          ...isOpen,
          ofisegiris: false,
          ofistencikis: false,
        });
      }, 1000); // 500 miliseconds = 0.5 seconds
    }
  }, [isWaiting, isOpen]);

  const handleToggle = (control) => {
    // Eğer zaten beklemede değilse, düğmeye tıklandığında bekleme süresini başlat
    if (!isWaiting) {
      setIsOpen((prevIsOpen) => ({
        ...prevIsOpen,
        [control]: !prevIsOpen[control],
      }));
      setIsWaiting(true);
    }
  };

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Text(
        button1Text === "Işıkları aç" ? "Işıkları kapat" : "Işıkları aç"
      );
    } else if (buttonNumber === 2) {
      setButton2Text(
        button2Text === "Perdeyi aç" ? "Perdeyi kapat" : "Perdeyi aç"
      );
    } else if (buttonNumber === 3) {
      setButton3Text(
        button3Text === "Klimayı aç" ? "Klimayı kapat" : "Klimayı aç"
      );
    } else if (buttonNumber === 4) {
      setButton4Text(
        button4Text === "Nemlendiriciyi aç"
          ? "Nemlendiriciyi kapat"
          : "Nemlendiriciyi aç"
      );
    }
  };

  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsDarkTheme(newTheme === "dark");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isFirstIcon, setIsFirstIcon] = useState(true);
  const handleClick = () => {
    setIsFirstIcon((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="ml-96 flex justify-center text-outline font-bold text-4xl text-white dark:text-white text-outline">
          Hoş Geldiniz
        </p>
        <p className="flex justify-end">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:outline-none focus:ring-gray-600 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={toggleVisibility}
          >
            {isVisible ? "" : ""}
            Sayfayı düzenle
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            />
          </button>
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="mt-8"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <a
            href="#"
            class="text-left font-bold text-2xl text-gray-200 dark:text-white ml-4 text-primary-600 dark:text-primary-500"
          >
            Ofis
          </a>
        </div>

        <p className="mr-3">
          <button
            onClick={toggleDarkMode}
            className="w-6 h-6 text-gray-200 focus:outline-none"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-200"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-200"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </button>
        </p>
      </div>

      <div className="flex flex-row">
        <div className="basis-1/2">
          {/* Kart 1 */}
          <div
            className={`max-w-sm rounded-3xl shadow mb-6 mt-4 opacity-90 ${
              isDarkMode ? "dark:border-gray-700" : "border-gray-700"
            }  ${isDarkMode ? "bg-gray-200" : "bg-gray-800"}`}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>

            <div className="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5
                    className={` text-xl font-bold tracking-tight  ${
                      isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                    }  ${isDarkMode ? "text-gray-800" : "text-white"}`}
                  >
                    Aydınlatma
                  </h5>
                  <p>
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className={`w-6 h-6  mb-2 text-xl font-bold tracking-tight  ${
                            isDarkMode
                              ? "dark:border-gray-700"
                              : "border-gray-700"
                          } mb-6 mt-4 opacity-90 ${
                            isDarkMode ? "text-gray-800" : "text-white"
                          }`}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    )}
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className={`w-6 h-6  mb-2 text-xl font-bold tracking-tight  ${
                            isDarkMode
                              ? "dark:border-gray-700"
                              : "border-gray-700"
                          } mb-6 mt-4 opacity-90 ${
                            isDarkMode ? "text-gray-800" : "text-white"
                          }`}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    )}
                  </p>
                </div>
              </a>

              <p
                className={`mb-3 font-normal opacity-90 mt-4 ${
                  isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                } ${isDarkMode ? "text-black" : "text-white"}`}
              >
                Işıklandırma veya perde sistemini kontrol edin.
              </p>
              <div className=" space-x-8">
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleButtonClick(1)}
                  style={{
                    minWidth: "130px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {button1Text}

                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  />
                </button>

                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleButtonClick(2)}
                  style={{
                    minWidth: "137px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {button2Text}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Kart 2 */}
          <div
            className={`max-w-sm rounded-3xl shadow mb-6 mt-4 opacity-90 ${
              isDarkMode ? "dark:border-gray-700" : "border-gray-700"
            }  ${isDarkMode ? "bg-gray-200" : "bg-gray-800"}`}
          >
            {" "}
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5
                    className={` text-xl font-bold tracking-tight  ${
                      isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                    }  ${isDarkMode ? "text-gray-800" : "text-white"}`}
                  >
                    {" "}
                    Senaryolar
                  </h5>
                  <p>
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    )}
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    )}
                  </p>
                </div>
              </a>
              <p
                className={`mb-3 font-normal opacity-90 mt-4 ${
                  isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                } ${isDarkMode ? "text-black" : "text-white"}`}
              >
                {" "}
                Önceden ayarladığınız senaryoları çalıştırın.
              </p>

              <div className=" space-x-8">
                <button
                  className={
                    isOpen.ofisegiris
                      ? "bg-gray-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-2xl hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      : "bg-gray-400 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  }
                  onClick={() => handleToggle("ofisegiris")}
                >
                  {isOpen.ofisegiris ? "Ofise giriş" : "Ofise giriş"}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  />
                </button>

                <button
                  className={
                    isOpen.ofistencikis
                      ? "bg-gray-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-2xl hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      : "bg-gray-400 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  }
                  onClick={() => handleToggle("ofistencikis")}
                >
                  {isOpen.perde ? "Ofisten çıkış" : "Ofisten çıkış"}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Kart 3 */}
          <div
            className={`max-w-sm rounded-3xl shadow mb-6 mt-4 opacity-90 ${
              isDarkMode ? "dark:border-gray-700" : "border-gray-700"
            }  ${isDarkMode ? "bg-gray-200" : "bg-gray-800"}`}
          >
            {" "}
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5
                    className={` text-xl font-bold tracking-tight  ${
                      isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                    }  ${isDarkMode ? "text-gray-800" : "text-white"}`}
                  >
                    {" "}
                    İklimlendirme
                  </h5>
                  <p>
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    )}
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    )}
                  </p>
                </div>
              </a>
              <p
                className={`mb-3 font-normal opacity-90 mt-4 ${
                  isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                } ${isDarkMode ? "text-black" : "text-white"}`}
              >
                {" "}
                İhtiyacınıza göre klimayı veya nemlendiriciyi çalıştırın.
              </p>

              <div className=" space-x-6">
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleButtonClick(3)}
                  style={{
                    minWidth: "136px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {button3Text}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  />
                </button>

                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleButtonClick(4)}
                  style={{
                    minWidth: "181px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {button4Text}

                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2">
          {/* Kart 4 */}
          <div
            className={`max-w-md rounded-3xl shadow mb-6 mt-4 opacity-90 ${
              isDarkMode ? "dark:border-gray-700" : "border-gray-700"
            }  ${isDarkMode ? "bg-gray-200" : "bg-gray-800"}`}
          >
            {" "}
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5
                    className={` text-xl font-bold tracking-tight  ${
                      isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                    }  ${isDarkMode ? "text-gray-800" : "text-white"}`}
                  >
                    {" "}
                    Enerji Tüketimi
                  </h5>
                  <p>
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    )}
                    {isVisible && (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    )}
                  </p>
                </div>
              </a>
              <p
                className={`mb-3 font-normal opacity-90 mt-4 ${
                  isDarkMode ? "dark:border-gray-700" : "border-gray-700"
                } ${isDarkMode ? "text-black" : "text-white"}`}
              >
                {" "}
                Enerji tüketimini buradan takip edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
