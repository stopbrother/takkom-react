import { signInWithGoogle } from "@/api/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-[24px] mb-[100px]">
      <Button onClick={signInWithGoogle}>구글 로그인</Button>
    </div>
  );
};

export default Login;
