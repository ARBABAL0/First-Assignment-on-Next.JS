import Link from "next/link"

export default function Home() {
  return (
    <div>
    <h1>Lets Learn How To link Diffrent To Page </h1>
    <link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/"}> Home </link>
    <link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}> About Us </link>
    <link className="mr-5 hover:text-orange-900" href={"http://localhost:3000/contactus"}> Contact Us </link>
    <link className="mr-5 hover:text-red-900" href={"http://localhost:3000/privacypolicy"}> Privacy Policy </link>
    </div>

  )
}







