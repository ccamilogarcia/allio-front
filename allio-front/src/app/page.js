import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import home from "@/components/home/home";

export default function Home() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-1">C1</div>
          <div className="col"><Navbar /></div>
        </div>
      </div>
      
    </div>
  );
}
