import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense } from "react";
import { services } from "../Constants/constants";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "../Constants/constants";
import CustomMarquee from "./CustomMarquee";
import Loader from "./Loader";

const LazyService = React.lazy(() => import("./LazyService"));
const Service = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <Suspense fallback={<Loader />}>
          <LazyService />
        </Suspense>
      </div>

      <div className="flex w-full h-full flex-col gap-8 p-12">
        <div className="flex-auto text-center">
          <h2 className="text-6xl text-green-700 mb-5">We Serve</h2>
          <p className="px-10 md:px-24 text-lime-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            voluptate in id ipsam pariatur fugiat, quos aliquid, dolorum
            aspernatur eligendi minima perferendis, aperiam beatae autem alias
            ad sapiente doloremque laborum. Ratione sunt veniam saepe porro
            eligendi tempore debitis reprehenderit vero.
          </p>
        </div>
        <div className="flex-auto">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((e, index) => (
              <div key={index} className="p-10 bg-slate-100 rounded-md">
                <div className="flex mb-4 flex-col text-center">
                  <i className={e.icon}></i>
                  <h4 className="text-4xl text-green-700 font-bold">
                    {e.heading}
                  </h4>
                </div>
                <div className="text-justify md:text-left">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-10">
        <div className="flex justify-center align-middle">
          <h3 className="text-center text-4xl font-semibold mb-10 text-green-700 uppercase tracking-wider">
            Our Clients
          </h3>
        </div>
        <div className="px-4 md:px-10 flex">
          <Marquee>
            {marqueeImages.map((e, index) => (
              <CustomMarquee key={index} src={e} />
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
