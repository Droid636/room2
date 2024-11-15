
"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import "@/app/vendendor/home.css";
import image from "@/app/img/casa.jpg";
import Nav from "../nav";
import { FaEdit, FaPlus, FaSearch, FaTrashAlt } from 'react-icons/fa';

import Link from "next/link";

export default function Home() {
  const router = useRouter();

  // const handleSearch = () => {
  //   router.push('/page2'); 
  // };

  return (
    <div className="container">
        <Nav></Nav>
      <div className="card">
        <Image
          src={image} 
          alt="Card Image"
          className="card-img"
        />
        <div className="card-content">  
          <h3>Cuarto para dos personas</h3> 
          <p><strong>2500 MXN Mensual</strong></p>
          <p>Col. Cosapa</p>
          <div className="card-actions">
            <button className="action-button"><FaEdit /></button>
            <button className="action-button"><FaTrashAlt /></button>
          </div>
        </div>
        
      </div>
      <button className="action-button"><FaPlus/></button>
      <Link href={"/pages"} >
        <button className="action-button">
          <FaSearch/>
        </button>
      </Link>
    </div>
  );
}