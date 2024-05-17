import React from "react";
import Tilt from "react-parallax-tilt";
import crypto from "../assets/Crypto.png"; // замените на актуальное изображение для вашего проекта
import '../index.css';

const Info = () => {
  return (
      <div>
        <section className="dark:text-gray-100">
          <div className="container max-w-xl p-6 py-11 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div style={{marginBottom: '-100px', paddingTop: '50px'}}>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
                Как это работает
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
                            className="lucide lucide-user"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Уведомления
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Получайте уведомления в реальном времени о важных событиях и изменениях в статусе вашего GPS трекера. Будьте в курсе каждого перемещения и возможных отклонений от маршрута.
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
                            className="lucide lucide-pickaxe"
                        >
                          <path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
                          <path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" />
                          <path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
                          <path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Мониторинг
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Система отслеживания позволяет наблюдать за движением вашего GPS трекера в реальном времени. Наши технологии обеспечивают точность и надежность данных.
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
                            className="lucide lucide-coins"
                        >
                          <circle cx="8" cy="8" r="6" />
                          <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                          <path d="M7 6h1v4" />
                          <path d="m16.71 13.88.7.71-2.82 2.82" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Аналитика
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        С помощью аналитических данных вы можете оптимизировать свои маршруты и улучшить эффективность работы. Мы предоставляем подробные отчеты и полезные рекомендации.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <Tilt>
                  <img
                      src={crypto}
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
