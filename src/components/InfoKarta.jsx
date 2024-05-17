import React from 'react';
import Tilt from "react-parallax-tilt";
import People from "../assets/karta.png";

const InfoKarta = () => {
    return (
        <div>
            <section className="dark:text-gray-100">
                <div className="container max-w-xl p-6 py-11 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                                Leaflet
                            </h3>
                            <p className="mt-3 text-lg dark:text-gray-400">
                                Использование библиотеки Leaflet
                            </p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                                            Интерактивные карты
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">
                                            Мы используем технологию Leaflet для создания интерактивных карт,
                                            которые позволяют пользователям легко отслеживать местоположение GPS-трекеров в реальном времени.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                                            Гибкость и масштабируемость
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">
                                            Благодаря Leaflet, наши карты могут обрабатывать большие объемы данных и
                                            оставаться быстрыми и отзывчивыми, что обеспечивает отличное пользовательское
                                            взаимодействие независимо от количества отслеживаемых объектов.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                                            Поддержка различных форматов данных
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">
                                            Leaflet поддерживает различные форматы данных, такие как GeoJSON, что
                                            позволяет нам легко интегрировать данные о местоположении из различных источников.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 image-container">
                            <Tilt>
                                <a href="/leaflet-home">
                                    <img
                                        src={People}
                                        alt="Leaflet Map"
                                        className="mx-auto rounded-lg"
                                    />
                                    <div className="overlay">ПЕРЕЙТИ</div>
                                </a>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoKarta;
