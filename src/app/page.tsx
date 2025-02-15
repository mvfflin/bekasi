/* eslint-disable @next/next/no-img-element */
"use client";

import Fullpage from "@fullpage/react-fullpage";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div>
            <Fullpage
                controlArrows={false}
                // controlArrowsHTML={[
                //     '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-left">',
                //     '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-right">',
                // ]}
                css3={false}
                // scrollHorizontally={true}
                credits={{
                    enabled: false,
                    label: "",
                }}
                navigation={true}
                navigationTooltips={[
                    "Judul",
                    "Sejarah",
                    "Kearifan Lokal",
                    "Tempat Wisata",
                ]}
                render={({ fullpageApi }) => {
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
                                            <div className="w-auto mt-5 text-center">
                                                <div
                                                    onClick={() =>
                                                        fullpageApi.moveSlideRight()
                                                    }
                                                    className="button-outline justify-center mx-auto w-auto font-poppins cursor-pointer"
                                                >
                                                    Gimana sih asal-usulnya?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-orange-100 hidden md:flex">
                                            <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://komunica.id/wp-content/uploads/2024/08/Bekasi.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide bg-zinc-800 px-5">
                                    <h1 className="md:text-3xl text-xl text-white font-poppins leading-relaxed text-center">
                                        Kota Bekasi adalah salah satu kota di
                                        Provinsi Jawa Barat, Indonesia. Kota ini
                                        berbatasan langsung dengan DKI Jakarta
                                        dari arah barat. Pada pertengahan tahun
                                        2024, jumlah penduduk Kota Bekasi
                                        berjumlah 2.526.133 jiwa. Meskipun
                                        berstatus kota penyangga, kota ini
                                        merupakan kota terbesar di Provinsi Jawa
                                        Barat menurut jumlah penduduk.
                                    </h1>
                                    <div className="text-center mx-auto my-5">
                                        <button
                                            className="button-dark mt-5 mx-auto justify-center text-center"
                                            onClick={() =>
                                                fullpageApi.moveSlideRight()
                                            }
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-oldbekasi p-20 px-5">
                                    <h1 className="md:text-3xl text-xl text-white font-poppins leading-relaxed text-center">
                                        Sejarah Tahun 1949 Sampai Terbentuknya
                                        Kota Bekasi, setelah tahun 1949 ditandai
                                        aksi unjuk rasa sekitar 40.000 rakyat
                                        Bekasi pada tanggal 17 Februari 1950 di
                                        alun-alun Bekasi. Hadir pada acara
                                        tersebut Bapak Mu{"'"}min sebagai
                                        Resuden Militer Daerah V. Inti dari
                                        unjuk rasa tersebut adalah penyapaian
                                        pernyataan sikap sebagai berikut. Rakyat
                                        Bekasi mengajukan usul kepada pemeritah
                                        pusat agar Kabupaten Jatinegara diubah
                                        menjadi Kabupaten Bekasi. Rakyat Bekasi
                                        tetap berdiri di belakang pemerintah
                                        Negara Kesatuan Republik Indonesia.
                                    </h1>
                                    <div className="text-center mx-auto my-5">
                                        <button
                                            className="button-dark mt-5"
                                            onClick={() => {
                                                fullpageApi.moveTo(2, 0);
                                            }}
                                        >
                                            Kembali
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="section bg-orange-50">
                                <div className="slide bg-orange-50 text-zinc-950 px-5 py-10">
                                    <h1 className="text-center text-5xl text-zinc-950 font-helvetica font-bold">
                                        Kearifan Lokal di Bekasi
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Ini nih kearifan lokal yang ada di
                                        bekasi! yuk coba tekan!
                                    </h2>
                                    <div className="w-full justify-center md:space-x-5 mt-5 space-y-5 md:space-y-0 inline-flex flex-wrap align-middle items-center pb-12">
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 1)
                                            }
                                            className="bg-orange-100 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://nnc-media.netralnews.com/IMG-Netral-News-User-31-CG3UI2J9OS.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 2)
                                            }
                                            className="bg-orange-100 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://indonesiakaya.com/wp-content/uploads/2020/10/tanjidor_ie_1200.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 3)
                                            }
                                            className="bg-orange-100 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://detakmedia.com/wp-content/uploads/2022/06/IMG-20220613-WA0047.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 4)
                                            }
                                            className="bg-orange-100 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://asset.kompas.com/crops/lXA0fCmYgMEvNErQ0W5eMPV84-k=/0x0:1000x667/750x500/data/photo/2020/06/16/5ee87e1a53b0a.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 5)
                                            }
                                            className="bg-orange-100 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://dinaskebudayaan.jakarta.go.id/content/uploads/OPK/Seni_Budaya/Pernikahan_Betawi.jpg?1697435452460"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide bg-orange-50 text-white px-10 bg-sc3-sd1">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Budaya Betawi dan Sunda
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Bekasi merupakan pertemuan dua
                                        kebudayaan besar, Betawi dan Sunda.
                                        Tradisi-tradisi Betawi seperti lenong,
                                        gambang kromong, dan palang pintu banyak
                                        ditemui di wilayah ini. Sementara itu,
                                        pengaruh budaya Sunda terlihat dalam
                                        seni pencak silat dan penggunaan bahasa
                                        Sunda di kalangan masyarakat Bekasi.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 2)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-orange-50 text-zinc-950 px-10 bg-sc3-sd2">
                                    <h1 className="text-center text-5xl text-zinc-950 font-helvetica font-bold">
                                        Kesenian Tradisional
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Tanjidor: Musik tradisional Betawi yang
                                        sering dimainkan dalam berbagai acara,
                                        seperti pernikahan dan perayaan adat.
                                        <br />
                                        Topeng Betawi: Seni tari dan teater
                                        tradisional yang menggabungkan unsur
                                        humor dan cerita rakyat, sering
                                        dipentaskan pada acara-acara adat atau
                                        perayaan.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 3)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-orange-50 text-white px-10 bg-sc3-sd3">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Tradisi Gotong Royong
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Semangat kebersamaan dalam membangun
                                        lingkungan sering terlihat di masyarakat
                                        Bekasi. Gotong royong masih menjadi
                                        nilai penting dalam kehidupan
                                        sehari-hari, terutama dalam membangun
                                        fasilitas umum seperti jalan dan tempat
                                        ibadah.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 4)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-orange-50 text-black px-10 bg-sc3-sd4">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Kuliner Khas
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Sayur Gabus Pucung: Hidangan khas Bekasi
                                        yang terbuat dari ikan gabus dengan kuah
                                        hitam dari buah pucung (keluak).
                                        <br /> Bandeng Rorod: Ikan bandeng yang
                                        diolah dengan cara disteam atau
                                        digoreng, menjadi salah satu makanan
                                        favorit masyarakat Bekasi.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 5)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-orange-50 text-white px-10 bg-sc3-sd5">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Upacara Adat
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Ngarak Pengantin Betawi: Tradisi
                                        pernikahan dengan iringan musik tanjidor
                                        dan palang pintu yang masih dilestarikan
                                        di beberapa wilayah Bekasi.
                                        <br />
                                        Seren Taun: Upacara adat khas Sunda yang
                                        dilaksanakan untuk merayakan panen padi,
                                        sering dilakukan di daerah yang masih
                                        kental dengan budaya Sunda.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(3, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="section bg-zinc-800">
                                <div className="slide bg-zinc-800 text-white px-5 py-10">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Tempat Wisata di Bekasi
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Meskipun Kota Bekasi sering kali
                                        dikaitkan dengan area perkotaan yang
                                        padat, ada banyak tempat rekreasi yang
                                        menarik dan bervariasi untuk dikunjungi,
                                        yuk kita lihat!
                                    </h2>
                                    <div className="w-full justify-center md:space-x-5 mt-5 space-y-5 md:space-y-0 inline-flex flex-wrap align-middle items-center pb-12">
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 1)
                                            }
                                            className="bg-zinc-900 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://www.blibli.com/friends-backend/wp-content/uploads/2023/10/B1000230-1-Taman-Kota-Bekasi-1024x538.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 2)
                                            }
                                            className="bg-zinc-900 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://static.republika.co.id/uploads/images/inpicture_slide/landmark-taman-hutan-kota-patriot-bina-bangsa-kota_211216164234-228.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 3)
                                            }
                                            className="bg-zinc-900 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001156495968/Venetian-Water-Carnaval-Tickets-38771325-4565-402a-9912-130aeb46f2de.jpeg?tr=q-60,c-at_max,w-1280,h-720&_src=imagekit"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 4)
                                            }
                                            className="bg-zinc-900 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://cydem.co.id/uploads/images/2023/09/image_750x_64f727f5c1edd.jpg"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 5)
                                            }
                                            className="bg-zinc-900 w-72 h-72 aspect-square cursor-pointer p-5 hover:scale-105 transition-all"
                                        >
                                            <img
                                                className="h-full object-cover"
                                                src="https://img-z.okeinfo.net/library/images/2018/10/31/vt2ntd8gv07feuucertg_13994.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide bg-zinc-200 text-black px-10 bg-sc4-sd1">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Taman Kota Bekasi
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Taman ini adalah area hijau di tengah
                                        kota, tempat warga bisa bersantai,
                                        berolahraga, atau berjalan-jalan
                                        menikmati alam. Sangat cocok untuk
                                        aktivitas keluarga atau komunitas. Cocok
                                        untuk healing dan menenangkan diri
                                        dikelilingi oleh pohon pohon hijau
                                        disekitar kita
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 2)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-zinc-200 text-white px-10 bg-sc4-sd2">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Hutan Kota Bina Bangsa
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Taman dengan pepohonan rindang ini
                                        menawarkan suasana sejuk dan asri di
                                        tengah Kota Bekasi. Cocok untuk jogging,
                                        bersepeda, atau sekadar menikmati udara
                                        segar.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 3)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-zinc-300 text-black px-10 bg-sc4-sd3">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Venetian Water Carnaval
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Ini adalah taman air tematik yang cocok
                                        untuk keluarga, dengan berbagai wahana
                                        air menarik dan suasana yang dirancang
                                        menyerupai kota Venesia, Italia.
                                        Disinilah tempat bermain yang seru dan
                                        asik untuk dimainkan bersama dengan
                                        teman kita
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 4)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-zinc-300 text-white px-10 bg-sc4-sd4">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Saung Ranggon
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Saung Ranggon merupakan rumah
                                        tradisional Betawi yang dibangun pada
                                        abad ke-16. Tempat ini menawarkan wisata
                                        sejarah dan budaya, menggambarkan
                                        kehidupan masyarakat Betawi di masa
                                        lalu. Biasanya dipergunakan sebagai
                                        tempat menyepi bagi orang yang datang
                                        (tamu) untuk minta berkah atau karomah.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 5)
                                            }
                                            className="button-dark"
                                        >
                                            Selanjutnya
                                        </button>
                                    </div>
                                </div>
                                <div className="slide bg-zinc-300 text-black px-10 bg-sc4-sd5">
                                    <h1 className="text-center text-5xl font-helvetica font-bold">
                                        Situ Rawa Gede
                                    </h1>
                                    <h2 className="text-center font-medium text-2xl mt-5">
                                        Situ Rawa Gede adalah danau alami yang
                                        terletak di Kecamatan Rawalumbu, Kota
                                        Bekasi. Danau ini dikenal sebagai tempat
                                        rekreasi yang tenang, cocok untuk
                                        bersantai dan menikmati suasana alam.
                                        Selain menjadi destinasi untuk
                                        memancing, Situ Rawa Gede juga berfungsi
                                        sebagai kawasan resapan air yang penting
                                        bagi lingkungan sekitarnya. Meskipun
                                        terletak di tengah perkotaan, danau ini
                                        menawarkan pemandangan yang asri,
                                        menjadikannya tempat favorit bagi warga
                                        lokal yang ingin melepas penat.
                                    </h2>
                                    <div className="text-center my-5 space-x-5">
                                        <button
                                            onClick={() =>
                                                fullpageApi.moveTo(4, 0)
                                            }
                                            className="button-dark"
                                        >
                                            Kembali
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Fullpage.Wrapper>
                    );
                }}
            />
            <Link
                href={"https://github.com/mvfflin/bekasi"}
                target="_blank"
                className="cursor-pointer fixed bottom-0 right-0 m-5 px-3 py-2 bg-blue-900 text-white z-50"
            >
                <h1 className="font-poppins">
                    Created by Sigma 5 - SMAN 5 Kota Bekasi &copy; 2024
                </h1>
            </Link>
        </div>
    );
}
