import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="min-h-screen">
        <nav className="p-2 bg-rose-300 text-white fixed w-full shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/shark.png" alt="Logo" className="h-10 rounded-full" />
              <span className="text-xl font-bold">My Portofolio</span>
            </div>
            <ul className="hidden md:flex space-x-10">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-rose-500 font-semibold cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("aboutMe")}
                  className="hover:text-rose-500 font-semibold cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-rose-500 font-semibold cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center px-10 md:px-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/rabbit.jpg')" }}
        >
          <div className="text-center bg-rose-300/50 p-6 rounded-lg">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
              Hello, I'm Alyaa Chalta Theopania
            </h1>
            <p className="text-2xl font-semibold text-white mt-4">
              Welcome to My Portofolio!
            </p>
            <button
              onClick={() => scrollToSection("aboutMe")}
              className="mt-6 px-6 py-2 bg-blue-400/45 text-white font-semibold rounded-full hover:bg-rose-500 cursor-pointer transition-all"
            >
              About Me
            </button>
          </div>
        </section>

        <div className="h-1 bg-rose-300 w-full"></div>
        <section
          id="aboutMe"
          className="h-screen flex flex-col md:flex-row items-start justify-start bg-cover bg-center p-20 space-x-4"
          style={{ backgroundImage: "url('/rabbit.jpg')" }}
        >
          <div className="flex justify-center items-center min-h-screen"></div>
          <div className="bg-rose-300/75 p-6 rounded-lg text-white w-full md:w-2/4 mt-12">
            <h1 className="text-3xl font-bold mb-4">Biodata</h1>
            <div className="text-left text-lg">
              <p><strong>Nama:</strong> Alyaa Chalta Theopania</p>
              <p><strong>Tempat & Tanggal Lahir:</strong> Pekanbaru, 28 Mei 2006</p>
              <p><strong>Alamat:</strong> Jl. Suka Karya, Perum. Karya Pesona Mandiri, Blok S.XX</p>
              <p><strong>Riwayat Pendidikan:</strong></p>
              <ul className="list-disc pl-5">
                <li>SD An-Namiroh Pekanbaru</li>
                <li>SMP An-Namiroh Pekanbaru</li>
                <li>MAN 1 Pekanbaru</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-4">
            <div className="bg-rose-300/75 p-6 rounded-lg text-white mt-12">
              <h1 className="text-3xl font-bold mb-4">Penghargaan</h1>
              <ul className="list-disc pl-5 text-lg">
                <li>Juara 3 Dancer Competition Inez Cosmetic 2016</li>
                <li>Juara 2 Lomba Pentas Kreasi Seni PT Alfa Scorpii 2016</li>
                <li>Juara 2 Traditional Dancer Competition YEC 2016</li>
                <li>Juara 1 Parade Tari Kreasi Melayu Bujang dara 2017</li>
                <li>Juara 3 Lomba Tari Rentak Bulian Kusuma Friendship Days 2018</li>
              </ul>
            </div>
            <div className="bg-rose-300/75 p-6 rounded-lg text-white">
              <h1 className="text-3xl font-bold mb-4">Hobi</h1>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-400/45 text-white font-semibold rounded-full hover:bg-rose-600 transition-all cursor-pointer" onClick={() => scrollToSection("membaca")}>Membaca</button>
                <button className="px-4 py-2 bg-blue-400/45 text-white font-semibold rounded-full hover:bg-rose-600 transition-all cursor-pointer" onClick={() => scrollToSection("nontonAnime")}>Menonton Anime</button>
                <button className="px-4 py-2 bg-blue-400/45 text-white font-semibold rounded-full hover:bg-rose-600 transition-all cursor-pointer" onClick={() => scrollToSection("game")}>Ngegame</button>
              </div>
            </div>
          </div>
        </section>

        <div className="h-1 bg-rose-300 w-full"></div>
<section
  id="membaca"
  className="h-screen flex flex-col md:flex-row items-start justify-start bg-cover bg-center p-20"
  style={{ backgroundImage: "url('/rabbit.jpg')" }}>
  <div className="flex flex-col gap-4 bg-rose-300/75 p-10 rounded-lg text-white w-1/2">
  <h1 className="text-3xl font-bold mb-4 text-center">Komik</h1>
  <div className="grid grid-cols-3 gap-4 mt-4 justify-items-center">
    {[
      { img: "wb.jpg" },
      { img: "htf.jpg" },
      { img: "likedaughter.jpg" },
      { img: "sisters.jpg" },
      { img: "te.jpg" },
      { img: "ceed.jpg" },
    ].map((komik, index) => (
      <img
        key={index}
        className="w-28 h-40 object-cover transform transition hover:scale-105 brightness-110 cursor-pointer"
        src={komik.img}
      />
    ))}
  </div>
</div>

  <div className="w-1 bg-rose-500 h-124 mx-5"></div>
  <div className="flex flex-col gap-4 bg-rose-300/75 p-10 rounded-lg text-white w-1/2">
  <h1 className="text-3xl font-bold mb-4 text-center">Novel</h1>
  <div className="grid grid-cols-3 gap-4 mt-4 justify-items-center">
    {[
      { img: "tdr.jpg" },
      { img: "giselle.jpg" },
      { img: "rilpes.jpg" },
      { img: "confess.jpg" },
      { img: "gurls.jpg" },
      { img: "ssd.jpg" },
    ].map((komik, index) => (
      <img
        key={index}
        className="w-28 h-40 object-cover transform transition hover:scale-105 brightness-110 cursor-pointer"
        src={komik.img}
      />
    ))}
  </div>
</div>
</section>
<div className="h-1 bg-rose-300 w-full"></div>
<section
  id="nontonAnime"
  className="h-screen min-w-full flex flex-col md:flex-row items-center justify-center bg-cover bg-center p-20"
  style={{ backgroundImage: "url('/rabbit.jpg')" }}
>
  <div className="bg-rose-300/75 p-10 rounded-lg text-white w-1/2 flex flex-col items-center mt-14">
    <h1 className="text-3xl font-bold mb-6">Series - One Piece</h1>
    <img
      className="w-full h-80 object-cover rounded-lg transform transition duration-500 hover:scale-105 brightness-110 cursor-pointer"
      src="op.jpg"
    />
  </div>
  <div className="w-1 bg-rose-500 h-115 mx-5 mt-14"></div>
  <div className="flex flex-col gap-4 bg-rose-300/75 p-10 rounded-lg text-white w-1/2 mt-14 h-115">
  <h1 className="text-3xl font-bold text-center">Movie</h1>
  <div className="grid grid-cols-3 gap-4 mt-1 justify-items-center">
    {[
      { img: "awa.jpg" },
      { img: "sujume.jpg" },
      { img: "bubel.jpg" },
      { img: "wwy.jpg" },
      { img: "hellow.jpg" },
      { img: "urname.jpg" },
    ].map((komik, index) => (
      <img
        key={index}
        className="w-28 h-40 object-cover transform transition hover:scale-105 brightness-110 cursor-pointer"
        src={komik.img}
      />
    ))}
  </div>
</div>
</section>
<div className="h-1 bg-rose-300 w-full"></div>
<section
  id="game"
  className="h-screen min-w-full flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/rabbit.jpg')" }}
> 
<div className="w-80 flex justify-center"></div>
  <div className="grid grid-cols-4 gap-8 bg-rose-300/75 p-6 rounded-xl shadow-lg cursor-pointer">
    {[
      {
        img: "wuwwa.jpg",
        title: "Wuthering Waves",
      },
      {
        img: "robowk.jpg",
        title: "Roblox",
      },
      {
        img: "ep.jpg",
        title: "Eggy Party",
      },
      {
        img: "opbr.jpg",
        title: "One Piece Bounty Rush",
      },
    ].map((game, index) => (
      <div key={index} className="flex flex-col items-center bg-white/80 p-5 rounded-2xl shadow-md">
        <img
          className="w-40 h-40 object-cover rounded-lg transform transition duration-500 hover:scale-105"
          src={game.img}
          alt={game.title}
        />
        <p className="text-lg text-center font-semibold mt-4">{game.title}</p>
      </div>
    ))}
  </div>
  <div className=" flex justify-center mr-5"></div>
</section>

        <div className="h-1 bg-rose-300 w-full"></div>
        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/rabbit.jpg')" }}
        >
          <div className="bg-right bg-rose-300/50 bg-opacity-50 p-6 rounded-lg text-white text-center ml-50">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
         <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
         <img src="/shark.png" alt="Logo" className="h-10 rounded-full" />
         <h1 className="text-xl font-semibold">Email:</h1>
              <a
                href="mailto:alyaa@example.com"
                className="text-xl font-semibold text-indigo-500 hover:text-rose-600 transition-all"
                
              >
                alyaatheopania@gmail.com
              </a>
              <span className="text-white">|</span>
              <img src="/shark.png" alt="Logo" className="h-10 rounded-full" />
              <h1 className="text-xl font-semibold">WhatsApp:</h1>
              <a
                href="tel:+628123456789"
                className="text-xl font-semibold text-indigo-500 hover:text-rose-600 transition-all"
                
              >
                +62 822-8984-9393
              </a>
              </div>
            </div>
        </section>
      </div>
    </Router>
  );
}

export default App;