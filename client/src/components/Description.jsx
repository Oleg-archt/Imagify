import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducting the AI-Powered Text to Image Generate
          </h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to live with our free AI image generate.
            Whether you need stunning visuals or unique imagery, our tool
            transform your text into eye-catching imges with jus ta few clicks.
            Imagine It, describeit, and watch it come tot live insantly
          </p>
          <p className="text-gray-600 ">
            Simply type in text prompt, and our cutting-edge AI will generate
            high-quality images in second. From product visuals to character
            design and portraits, even concept that don't yet exist can be
            visualized efforlessly. Powerd by advanced AI technology, the
            creative possibilites are limitless
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
