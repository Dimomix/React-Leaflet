import React from 'react';
import Tilt from "react-parallax-tilt";
import People from "../assets/faq-2.png";

const InfoFAQ2 = () => {
    return (
        <div>
            <section className="dark:text-gray-100">
                <div className="container max-w-xl p-6 py-11 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                                Вопросы
                            </h3>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                                            Сколько времени работает батарея трекера TK-915?
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">
                                            Трекер TK-915 оснащен мощной батареей, обеспечивающей до 90 дней работы без подзарядки. Это делает его идеальным для долгосрочного мониторинга.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                                            Как настроить трекер TK-915?
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">
                                            Настройка трекера TK-915 проста и удобна. Вы можете использовать наше мобильное приложение или веб-интерфейс для настройки всех параметров трекера, включая уведомления и геозоны.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                                            Как связаться с технической поддержкой?
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">
                                            Вы можете связаться с нашей технической поддержкой через мобильное приложение, веб-интерфейс или по телефону. Наша команда всегда готова помочь вам с любыми вопросами и проблемами, связанными с использованием трекера TK-915.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Tilt>
                                    <img
                                        src={People}
                                        alt="Crypto-2"
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

export default InfoFAQ2;