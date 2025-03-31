export default function About() {
    document.title = 'About Page';

    return (
        <section className="relative pt-16 bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                            <img alt="About" src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" className="w-full align-middle rounded-t-lg" />
                            <blockquote className="relative p-8 mb-4">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-black">
                                    To Travel is to Live.
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col mt-4">
                                    <div className="px-4 py-5 flex-auto">

                                        <h6 className="text-xl mb-1 font-semibold">Who are we</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            We are committed to promoting eco-friendly travel experiences that help preserve the natural beauty of the places we love.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex flex-col min-w-0">
                                    <div className="px-4 py-5 flex-auto">
                                        <h6 className="text-xl mb-1 font-semibold">
                                            Inspiring Destinations
                                        </h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Explore some of the world’s most incredible natural wonders, from hidden gems to famous landmarks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <h6 className="text-xl mb-1 font-semibold">Our Mission</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            To inspire people to explore, appreciate, and protect the beauty of nature. Through our curated guides, stories, and photography, we hope to ignite a sense of wonder and adventure in every traveler.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex flex-col min-w-0">
                                    <div className="px-4 py-5 flex-auto">
                                        <h6 className="text-xl mb-1 font-semibold">Join Us on a Journey into the Wild</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Are you ready to step outside and immerse yourself in the beauty of the natural world? Let us be your guide as you explore the earth’s most incredible landscapes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}