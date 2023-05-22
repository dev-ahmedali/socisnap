import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Socisnap-logo"
          src="/images/logo.png"
          width="48"
          height="48"
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 font-bold text-center text-3xl tracking-tighter text-gray-900">Sign in to your Account</h2>
      </div>
      {/* Auth form */}
      <AuthForm/>
    </div>
  );
}
