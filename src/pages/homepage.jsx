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

  return (
    <>
      <div className="text-outline text-center font-bold text-4xl text-black dark:text-white text-outline mr-28">
        Hoş Geldiniz 2


      </div>

      <div className="mt-8"></div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <a
            href="#"
            class="text-left font-bold text-2xl text-gray-900 dark:text-white ml-4 text-primary-600 hover:underline dark:text-primary-500"
          >
            Ofis
          </a>
        </div>
        <div>
          <button
            className="flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleToggle("senaryoolustur")}
          >
            {isOpen.senaryoolustur ? "Sayfayı düzenle" : "Sayfayı düzenle"}
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

      <div className="flex flex-row">
        <div className="basis-1/2">
          {/* Kart 1 */}

          <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-4 opacity-95">
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
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Aydınlatma
                  </h5>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              </a>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Işıklandırma veya perde sistemini kontrol edin.
              </p>
              <div className=" space-x-8">
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleToggle("isik")}
                >
                  {isOpen.isik ? "Işıkları aç" : "Işıkları kapat"}
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
                  onClick={() => handleToggle("perde")}
                >
                  {isOpen.perde ? "Perdeleri aç" : "Perdeleri kapat"}
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
          <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-4 opacity-95">
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
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Senaryolar
                  </h5>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-4 opacity-95">
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
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    İklimlendirme
                  </h5>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                İhtiyacınıza göre klimayı veya nemlendiriciyi çalıştırın.
              </p>

              <div className=" space-x-6">
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleToggle("klima")}
                >
                  {isOpen.klima ? "Klimayı aç" : "Klimayı kapat"}
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
                  onClick={() => handleToggle("nemlendirici")}
                >
                  {isOpen.nemlendirici
                    ? "Nemlendiriciyi aç"
                    : "Nemlendiriciyi kapat"}
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
          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-4 opacity-95">
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
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Enerji Tüketimi
                  </h5>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
