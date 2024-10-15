/* eslint-disable @next/next/no-img-element */
"use client";

import Fullpage from "@fullpage/react-fullpage";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Fullpage
                credits={{
                    enabled: false,
                    label: "",
                    position: "right",
                }}
                navigation={true}
                navigationTooltips={["Judul", "Sejarah"]}
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
                                <div className="grid grid-2 grid-flow-col w-full h-screen">
                                    <div className="bg-zinc-900 h-full w-full justify-center p-5 pr-14 md:pr-5 content-center">
                                        <h1 className="text-5xl text-white font-helvetica font-bold">
                                            Sejarah Kota Bekasi
                                        </h1>
                                        <hr className="my-5 border-white border-2" />
                                        <h1 className="text-zinc-300 text-justify">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Mollitia, a amet labore repudiandae
                                            asperiores maiores vitae consequatur
                                            aspernatur temporibus dolore minus
                                            officia praesentium illo ad ipsa
                                            enim quasi at veritatis maxime
                                            necessitatibus obcaecati
                                            perspiciatis sunt. Fugit deserunt
                                            officia, laudantium fugiat tenetur
                                        </h1>
                                    </div>
                                    <div className="bg-orange-100 hidden md:flex">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 h-full">
                                            <div className="grid gap-4">
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid gap-4">
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid gap-4">
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid gap-4">
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
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
