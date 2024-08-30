import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <div>
      <div className="pt-10 sm:pt-24">
        <video src="/hero.mp4" autoPlay loop muted className="w-full h-auto">
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-[80px] rounded-lg border-2 border-solid border-gray-200 p-4">
        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129049845x104455195830874600%2Fbe28d803d9a96aa3f39ac979f9f7a3c0%25201.png?w=128&h=128&auto=compress&dpr=1&fit=max"
            alt="travel"
            width={128}
            height={128}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Travel Itinerary
          </h3>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129676236x902614560996062500%2Fc3f406dbad6bc39dc9f6a972791246b3%25201.png?w=128&h=143&auto=compress&dpr=1&fit=max"
            alt="custom"
            width={128}
            height={143}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Custom Merchandise
          </h3>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129685688x205809444570131070%2F2a357d982060aa48621b1408be897e98%25201.png?w=128&h=129&auto=compress&dpr=1&fit=max"
            alt="digital"
            width={128}
            height={129}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Digital Content
          </h3>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129740866x257181271145942000%2Ffdf29691d85e224cc6ddd59f8b6392fb%25201.png?w=128&h=97&auto=compress&dpr=1&fit=max"
            alt="fashion"
            width={128}
            height={97}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Fashion Brand
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Video;
