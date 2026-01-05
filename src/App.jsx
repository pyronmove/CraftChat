import dataImage from "./data"
import { listTools, listProyek } from "./data"

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={dataImage.iconLogoColor} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <p>
              Selamat datang di website{" "}
              <span className="font-bold text-orange-500">Craft</span>
              <span className="font-bold text-blue-600">Chat</span>
            </p>

          </div>
          <h1 className="mb-6 text-5xl/tight font-bold">
            Welcome to{" "}
            <span className="text-orange-500">Craft</span>
            <span className="text-blue-600">Chat</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.</p>
          <div className="flex items-center sm:ap-4 gap-2">
            <a href="#" className="bg-orange-600 p-4 rounded-2xl hover:bg-orange-500">Chat Admin <i class="ri-whatsapp-line" ></i>
            </a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyeck <i className="ri-arrow-down-line"></i></a>
          </div>
        </div>
        <div className="
  w-full
  max-w-md
  sm:max-w-lg
  md:max-w-xl
  lg:max-w-2xl
  xl:max-w-3xl
  mx-auto
  mt-10
  md:mt-0
  md:ml-auto
  md:translate-x-4   /* geser dikit */
  lg:translate-x-6   /* desktop besar sedikit aja */
  animate__animated
  animate__fadeInUp
  animate__delay-2s
"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YYOKkc6kFHg"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="500">
          <img src={dataImage.iconLogoWhite} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">Hi, perkenalkan saya Diky Prayoga, seorang Full Stack Web Developer dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.</p>
          <div className="flex items-center justify-between">
            <img src={dataImage.iconLogoWhite} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="500">Tools yang di pakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="700">Berikut ini tools yang saya pakai untuk pembuatan Artificial Intelejent saya dan pembuatan Website</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-b-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="500" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="500">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="700">Berikut ini beberapa proyek saya</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="
    p-4 bg-zinc-800 rounded-md
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:scale-[1]
    hover:shadow-xl hover:shadow-black/30
  " data-aos="fade-up" data-aos-duration={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-orange-500 p-3 rounded-lg block border-zinc-600 hover:bg-orange-400">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}
    </>
  )
}

export default App
