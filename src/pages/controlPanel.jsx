import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const KontrolPaneli = () => {
  const [isOpen, setIsOpen] = useState({
    senaryoolustur: false,
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

  const data = [
    {
      label: (
        <div>
          <div className="flex justify-between">
            <svg
              class=" w-6 h-6  text-gray-500 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
            <a> Parlaklık </a>
          </div>
        </div>
      ),
      value: "parlaklık",
      desc: (
        <div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Perde sistemini buradan kontrol edebilirsiniz.
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button>Parlaklık</button>
          </div>
        </div>
      ),
    },
    {
      label: (
        <div>
          <div className="flex justify-between">
            <svg
              class="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z" />{" "}
              <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" />
            </svg>
            <a> Işık Sıcaklığı </a>
          </div>
        </div>
      ),
      value: "ışık Sıcaklığı",
      desc: (
        <div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Işık sıcaklığını buradan kontrol edebilirsiniz.
          </p>

          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button>Işık sıcaklığı</button>
          </div>
        </div>
      ),
    },
    {
      label: (
        <div>
          <div className="flex justify-between">
            <svg
              class="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 110 110"
            >
              <path d="M10.64,61C12.85,63.55,18,70.4,18,78v8A12,12,0,0,0,30,98H46A12,12,0,0,0,58,86V82H70A28,28,0,0,0,98,54V50a4,4,0,0,0-4-4H78A28,28,0,0,0,50,74V86a4,4,0,0,1-4,4H30a4,4,0,0,1-4-4V78H38a4,4,0,0,0,4-4V53.43A16,16,0,0,0,54,38V34a4,4,0,0,0-8,0v4a8,8,0,0,1-16,0V34a4,4,0,0,0-8,0v4A16,16,0,0,0,34,53.43V70H26a4,4,0,0,0-1.19.24,40.83,40.83,0,0,0-8.09-14.48,28,28,0,0,1-4.06-5.85A27.78,27.78,0,0,1,10,38a28,28,0,0,1,55.65-4.47A29.21,29.21,0,0,1,66,38a4,4,0,0,0,8,0,37.54,37.54,0,0,0-.44-5.67A36,36,0,0,0,2,38,35.58,35.58,0,0,0,5.43,53.33,35.14,35.14,0,0,0,10.64,61ZM78,54H90A20,20,0,0,1,70,74H58A20,20,0,0,1,78,54Z" />
            </svg>
            <a>Enerji Tüketimi</a>
          </div>
        </div>
      ),
      value: "enerji Tüketimi",
      desc: (
        <div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Enerji tüketimini buradan takip edebilirsiniz.
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button>Enerji tüketimi</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
          <Link
            to={`/adddevices`}
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
          >
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-600 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Cihaz ekle
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              ></svg>
            </button>
          </Link>

          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        {/* <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">*/}
        <div className="grid grid-cols-2 gap-4">
          {/* Kart 1 */}
          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-4 opacity-95">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hareket Sensörü
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
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Hareket belirlenmedi.
              </p>
            </div>
          </div>

          {/* Kart 2 */}
          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-4 opacity-95">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sıcaklık
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
              <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                Güncel sıcaklık:
              </p>
            </div>
          </div>

          {/* Kart 3 */}

          <div className="max-w-lg bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 opacity-95">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Işıklar
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

              <div className="flex justify-between mt-4"></div>

              <Tabs value="html">
                <TabsBody>
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
                <TabsHeader>
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
            </div>
          </div>

          {/* Kart 4 */}
          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6  opacity-95">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Perde
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
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Perde sistemini buradan kontrol edebilirsiniz.
              </p>

              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleToggle("perde")}
              >
                {isOpen.perde ? "Perdeyi kapat" : "Perdeyi aç"}
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                ></svg>

                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                ></svg>
              </button>
            </div>
          </div>

          {/* Kart 5 */}
          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6  opacity-95">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Havalandırma
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
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Havalandırma sistemini buradan kontrol edebilirsiniz.
              </p>

              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleToggle("havalandirma")}
              >
                {isOpen.havalandirma
                  ? "Havalandırmayı kapat"
                  : "Havalandırmayı aç"}
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                ></svg>

                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                ></svg>
              </button>
            </div>
          </div>

          {/* Kart 6 */}

          <div className="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6  opacity-95">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <div className="flex justify-between items-center">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nemlendirme
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
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nemlendirme sistemini buradan kontrol edebilirsiniz.
              </p>

              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-400 rounded-2xl hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleToggle("nemlendirici")}
              >
                {isOpen.nemlendirici
                  ? "Nemlendiriciyi kapat"
                  : "Nemlendiriciyi aç"}
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                ></svg>

                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                ></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KontrolPaneli;
