import { Metadata } from "next";
import { IoIosArrowRoundBack } from "react-icons/io";

import Link from "next/link";
import ResetPasswordForm from "@/components/(auth)/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/auth_page_bg.png')] bg-no-repeat bg-cover origin-center relative z-0 text-main-color ">
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
      <div className="flex justify-center items-center w-[441px]   mx-auto   md:px-12 px-11 py-10 rounded-[40px] bg-white z-20 ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            <div className="text-center space-y-4 mb-2">
              <div className="text-2xl  font-bold  text-center ">
                <h2 className="flex justify-center items-center">
                  <Link href={"/verify-email"}>
                    <IoIosArrowRoundBack size={40} />
                  </Link>
                  Reset Password
                </h2>
              </div>
              <p>Your password must be 8-10 character long.</p>
            </div>
          </div>
          <ResetPasswordForm></ResetPasswordForm>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
