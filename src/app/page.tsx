"use client";

import Image from "next/image";
import Fullpage from "@fullpage/react-fullpage";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Fullpage
                controlArrows={true}
                // controlArrowsHTML={[
                //     '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-left">',
                //     '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-right">',
                // ]}
                css3={false}
                // scrollHorizontally={true}
                credits={{
                    enabled: false,
                    label: "",
                    position: "right",
                }}
                navigation={false}
                // sectionsColor={["white"]}
                navigationTooltips={["Judul", "Sejarah"]}
                render={({ state, fullpageApi }) => {
                    return (
                        <Fullpage.Wrapper>
                            <div className="section background-1 font-helvetica">
                                <div className="mx-auto w-full py-5 text-center bg-zinc-700 bg-opacity-90">
                                    <h1 className="text-2xl mb-5 text-zinc-300">
                                        Lebih jauh mengenal tentang
                                    </h1>
                                    <h1 className="text-8xl text-white font-bold leading-none tracking-tight">
                                        <Typewriter
                                            onInit={(tw) => {
                                                tw.typeString(
                                                    "Kota Bekasi"
                                                ).start();
                                            }}
                                        />
                                    </h1>
                                    <button
                                        className="button-outline text-xl mt-5 font-poppins"
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        Yuk cari tahu!
                                    </button>
                                </div>
                            </div>
                            <div className="section">
                                <div className="slide">
                                    <div className="grid grid-2 grid-flow-col w-full h-screen">
                                        <div className="bg-zinc-900 h-full w-full justify-center p-5 pr-14 md:pr-5 content-center">
                                            <h1 className="text-7xl text-white font-helvetica font-bold text-center">
                                                Sejarah Kota Bekasi
                                            </h1>
                                            <h1 className="text-4xl text-white mt-3 font-helvetica font-medium text-center">
                                                Scroll ke kanan!
                                            </h1>
                                        </div>
                                        <div className="bg-orange-100 hidden md:flex">
                                            <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide bg-oldbekasi p-20">
                                    <div className="h-full w-full justify-center p-5 pr-14 md:pr-5 content-center">
                                        <h1 className="text-3xl text-white font-poppins leading-relaxed text-center">
                                            Sejarah Tahun 1949 Sampai
                                            Terbentuknya Kota Bekasi Sejarah
                                            setelah tahun 1949 ditandai aksi
                                            unjuk rasa sekitar 40.000 rakyat
                                            Bekasi pada tanggal 17 Februari 1950
                                            di alun-alun Bekasi. Hadir pada
                                            acara terseut Bapak Mu’min sebagai
                                            Resuden Militer Daerah V. Inti dari
                                            unjuk rasa tersebut adalah
                                            penyapaian pernyataan sikap sebagai
                                            berikut. Rakyat Bekasi mengajukan
                                            usul kepada pemeritah pusat agar
                                            Kabupaten Jatinegara diubah menjadi
                                            Kabupaten Bekasi. Rakyat Bekasi
                                            tetap berdiri di belakang pemerintah
                                            Negara Kesatuan Republik Indonesia.
                                            Dan berdasarkan Undang-undang No 14
                                            tahun 1950 terbentuklah Kabupaten
                                            Bekasi, dengan wilayah terdiri dari
                                            empat kewedanan, 13 kecamatan,
                                            (termasuk Kecamatan Cibarusah) dan
                                            95 desa. Angka-angka itu sevara
                                            simbolis diungkapkan dalam lambang
                                            Kabupaten Bekasi dengan motto
                                            “Swantara Wibawa Mukti”,
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </Fullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}
