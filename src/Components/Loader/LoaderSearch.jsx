import React from "react";
import image from '../../assets/logo.png';

export default function LoaderSearch() {
    return (
        <div>
        

            <div className="flex flex-col justify-center items-center h-[90vh]">
                <p className="flex text-4xl font-bold items-center gap-2 text-gray-400">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>


                    <img
                        src={image}
                        alt="loading"
                        className="w-20 h-20"
                        style={{ animation: "spin 0.6s linear infinite" }}
                    />

                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </p>
            </div>


            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
