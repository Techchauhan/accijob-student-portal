import Image from "next/image";
import TableComponent from "../components/Table";

export default function Home() {
  return (
    <div className="pl-4 pr-4 bg-white">
      {/* Image Container */}
      <div className="flex justify-center items-center mb-4">
        <Image src='/logo.png' height={100} width={100} alt="accio-job"/>
      </div>
      
      {/* Developer Info Container */}
      <div className="flex flex-col justify-center items-center mb-2">
        <h1 className="text-gray-500 text-xl">Developed By AccioJob Student</h1>
        <p className="text-black text-lg">Rishab Chauhan</p>
      </div>
      
      {/* Table Component */}
      <TableComponent />
    </div>
  );
}
