import Header from "@/components/Header";
import ChildAdd from "@/pages/child/ChildAdd";
import ChildEdit from "@/pages/child/ChildEdit";
import ChildPage from "@/pages/child/ChildPage";
import FindHospital from "@/pages/FindHospital";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyPage from "@/pages/MyPage";
import VaccineCheckList from "@/pages/VaccineCheckList";
import VaccineInfo from "@/pages/VaccineInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="myPage" element={<MyPage />} />

          <Route path="vaccineInfo" element={<VaccineInfo />} />
          <Route path="findHospital" element={<FindHospital />} />

          <Route path="child" element={<ChildPage />} />
          <Route path="childAdd" element={<ChildAdd />} />
          <Route path="childEdit" element={<ChildEdit />} />

          <Route path="vaccineCheckList" element={<VaccineCheckList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
