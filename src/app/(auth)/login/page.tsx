import LoginForm from "@/components/ui/login/login-form";
import Logo from "@/components/ui/shared/logo";
import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  return (
    <main className="flex justify-center items-center h-screen relative">
      <Image
        src="/login-background.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="-z-10 absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80 -z-9"></div>
      <div className="max-w-lg flex flex-col items-center">
        <Logo className="mb-8" />
        <h1 className="text-white text-5xl leading-12 tracking-tight font-semibold text-center mb-6">
          Access the Cinematic Realm with Elegance
        </h1>
        <p className="text-[#878787] text-lg leading-6 tracking-tight mb-8 text-center">
          A Refined Entrance: Secure Your Journey into a World of Timeless Film
          Excellence
        </p>
        <LoginForm />
      </div>
    </main>
  );
};

export default page;
