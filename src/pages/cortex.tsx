/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-document-import-in-page */
import Link from "next/link";
import Image from "next/image";
import logoAcadepol from "../assets/logo-acadepol-dourada.png";
import Head from "next/head";

function Cortex() {
  return (
    <div>
      <Head>
        <title>Emissão de Avisos</title>
      </Head>

      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Image src={logoAcadepol} alt="Logo" width={150} height={70} />
          </div>
          <div>
            <div className="font-bold">Emissão de Avisos</div>
            <div>Academia de Polícia do Destiny</div>
          </div>
        </div>
      </header>

      <form id="formAviso" className="max-w-md mx-auto my-8">
        <label className="block">
          Assinatura:
          <input
            type="text"
            id="assinaturaAviso"
            placeholder="Insira sua assinatura:"
            minLength={3}
            maxLength={25}
            required
            className="block w-full border border-gray-400 p-2 rounded-md my-2"
          />
        </label>
        <label className="block">
          Cargo:
          <input
            type="text"
            id="cargoAviso"
            placeholder="Insira seu cargo:"
            minLength={3}
            maxLength={35}
            required
            className="block w-full border border-gray-400 p-2 rounded-md my-2"
          />
        </label>
        <label className="block">
          Logo:
          <select
            id="logoAviso"
            required
            className="block w-full border border-gray-400 p-2 rounded-md my-2"
          >
            <option value="">Escolha a logo:</option>
            <option value="headerAviso-ACADEPOL-DOURADA">
              ACADEPOL DOURADA
            </option>
          </select>
        </label>
        <label className="block">
          Titulo:
          <input
            type="text"
            id="tituloAviso"
            placeholder="Insira o titulo do aviso:"
            minLength={6}
            maxLength={55}
            required
            className="block w-full border border-gray-400 p-2 rounded-md my-2"
          />
        </label>
        <label className="block">
          <div className="mb-2">Aviso:</div>
          <textarea
            id="textoAviso"
            placeholder="AVISO:"
            className="block w-full border border-gray-400 p-2 rounded-md my-2"
          />
        </label>
        <input
          type="submit"
          id="gerarAviso"
          value="GERAR AVISO"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
        />
      </form>
    </div>
  );
}

export default Cortex;
