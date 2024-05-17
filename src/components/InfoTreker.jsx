import React from "react";
import GPSImage from "../assets/treker-1.png"; // замените на актуальное изображение для вашего проекта
import Tilt from "react-parallax-tilt";
import '../index.css';

const Info = () => {
  return (
      <div>
        <section className="dark:text-gray-100">
          <div className="container max-w-xl p-6 py-11 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div style={{marginBottom: '-100px', paddingTop: '50px'}}>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
                TK-915
              </h2>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 bg-gradient-to-r from-purple-500 via-purple-600 dark:text-gray-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bell"
                        >
                          <path d="M18 8a6 6 0 0 0-12 0v4a6 6 0 0 1-1.75 4.25L3 18h18l-1.25-1.75A6 6 0 0 1 18 12V8z" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Уведомления
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Получайте уведомления в реальном времени о перемещениях вашего трекера TK-915. Будьте в курсе каждого изменения и возможных отклонений от заданного маршрута.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 bg-gradient-to-r from-purple-500 via-purple-600 dark:text-gray-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-map-pin"
                        >
                          <path d="M21 10c0 4.418-7 12-7 12s-7-7.582-7-12a7 7 0 1 1 14 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Геолокация
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Трекер TK-915 обеспечивает точное определение местоположения в реальном времени, позволяя вам следить за перемещениями вашего объекта с высокой точностью.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 bg-gradient-to-r from-purple-500 via-purple-600 dark:text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shield"
                        >
                          <path d="M12 2l8 4v6c0 5-3.6 9.9-8 12-4.4-2.1-8-7-8-12V6z" />
                          <path d="M12 2v20" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Безопасность
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Трекер TK-915 обеспечивает высокую безопасность благодаря интеграции с различными системами оповещения и защиты, что делает его идеальным для защиты ценных объектов.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <Tilt>
                  <img
                      src={GPSImage}
                      alt="GPS Tracking"
                      className="mx-auto rounded-lg"
                  />
                </Tilt>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Info;
