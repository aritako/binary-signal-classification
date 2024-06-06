import Image from "next/image";
import Form from "./form";
import { kanit } from "./ui/fonts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className={`text-4xl font-semibold text-center ${kanit.className}`}>Binary Classification of Water-immersed and Oil-immersed Electrodes Across Neural Network Models</h1>
        <Form/>
      </div>
    </main>
  );
}
