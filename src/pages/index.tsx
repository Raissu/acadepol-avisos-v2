/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-title-in-document-head */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Head } from "next/document";

function Home() {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState("");
  const [text, setText] = useState("Carregando");
  const [duration, setDuration] = useState(4000);
  const router = useRouter();
  const logo = require("../assets/logo-acadepol-dourada.png");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Aguarde um momento");
      setDuration(3000);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Redirecionando para Cortex");
      setDuration(2000);
      setTimeout(() => {
        router.push("/cortex");
      }, 2000);
    }, 7000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-gradient-to-r text-white from-gray-600 via-black-500 to-slate-950 flex items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />

        <h1 className="text-4xl font-bold mb-2">
          {text}
          {dots}
        </h1>
      </div>
      <div className="text-center absolute bottom-10 w-full">
        <h1 className={`text-4xl font-bold ${loading ? "hidden" : ""}`}>
          Redirecionando para Cortex
        </h1>
      </div>
    </div>
  );
}

export default Home;
