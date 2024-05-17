import React from "react";
import { FaLock, FaBitcoin, FaHeadset } from "react-icons/fa";
import {SlBriefcase, SlBulb, SlCursor} from "react-icons/sl";

const Features = () => {
  return (
      <div>
        <section className="m-4 md:m-8 dark:text-gray-300">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-bold text-white">Про нас</h2>
          </div>
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <SlBulb className="w-12 h-12 dark:text-violet-400" />
              <h3 className="my-3 text-3xl font-semibold text-white">Идея</h3>
              <div className="space-y-1 leading-tight">
                <p>Помощь в сельскохозяйствен и не только</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <SlCursor className="w-12 h-12 dark:text-violet-400" />
              <h3 className="my-3 text-3xl font-semibold text-white">
                Воплощение
              </h3>
              <div className="space-y-1 leading-tight">
                <p>Просмотр животных онлайн с карты</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <SlBriefcase className="w-12 h-12 dark:text-violet-400" />
              <h3 className="my-3 text-3xl font-semibold text-white">
                Работа
              </h3>
              <div className="space-y-1 leading-tight">
                <p>Удобный показ трейкеров через сайт</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Features;
