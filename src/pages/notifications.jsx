import { useState, useEffect } from "react";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState({});

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
      <div className="flex justify-end mt-2">
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

      <div className="max-w-6xl bg-gray-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mt-6 opacity-95">
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
                Bildirimler
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
          <div className="mt-80"></div>
        </div>
        <div className="mt-60"></div>
      </div>
    </>
  );
};

export default Notifications;
