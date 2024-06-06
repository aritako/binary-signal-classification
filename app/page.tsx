import Image from "next/image";
import Form from "./form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold text-center">Binary Classification of Water-immersed and Oil-immersed Electrodes Across Neural Network Models</h1>
        <Form/>
      </div>
    </main>
  );
}
