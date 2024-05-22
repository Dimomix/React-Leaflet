import React from "react";

const HeroAbout = () => {
    return (
        <div className="hero flex items-center justify-center h-screen" style={{height: '300px'}}>
            <div className="container flex flex-col justify-center p-6 mx-auto text-center dark:text-white">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl mt-6 mb-8">
                    <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                        Dimomix
                    </span>{" "}
                    - The Technological Future
                </h1>
            </div>
        </div>
    );
};

export default HeroAbout;
