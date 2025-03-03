import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/api/auth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/login">로그인</Link>
      <Button onClick={signOut}>로그아웃</Button>
    </div>
  );
};

export default Header;
