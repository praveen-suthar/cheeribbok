import Img_01 from "../assets/gallery/top/img_01.png";
import Img_02 from "../assets/gallery/top/img_02.png";
import Img_03 from "../assets/gallery/top/img_03.png";
import MidImg_01 from "../assets/gallery/mid/img_01.png";
import MidImg_02 from "../assets/gallery/mid/img_02.png";
import MidImg_03 from "../assets/gallery/mid/img_03.png";
import MidImg_04 from "../assets/gallery/mid/img_04.png";
import MidImg_05 from "../assets/gallery/mid/img_05.png";
import MidImg_06 from "../assets/gallery/mid/img_06.png";
import storyImg from "../assets/gallery/img/story.png";
import Yearbook from "../assets/gallery/img/yearbook.png";
import Newborn from "../assets/gallery/img/newborn.png";
import Furryfriends from "../assets/gallery/img/cat&dog.png";
import Family from "../assets/gallery/img/family.png";
import Texture from "../assets/gallery/img/texture.png";

const Home = () => {
  const stories = [
    {
      text: "I am so thrilled with the photobook I created with Cheeribook! It truly captures all the special moments from my life, and I know I will treasure it forever.",
      author: "Sarah",
    },
    {
      text: "I was hesitant to create a photobook, but Cheeribook made the process so easy and fun! The end result exceeded my expectations, and I can't wait to order more.",
      author: "John",
    },
    {
      text: "Cheeribook helped me preserve the memories from my wedding day in the most beautiful way. The quality of the book is exceptional, and I love how customizable it was.",
      author: "Matt",
    },
    {
      text: "I am thrilled to share my experience with XYZ Website, which has truly become an indispensable online resource for me. In this testimonial, I will highlight the exceptional features, usability, and reliability that make XYZ Website stand out from the crowd.",
      author: "Victoria",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mb-20">

      {/* first Header Section */}
      <section className="flex flex-col items-center text-center lg:text-left lg:flex-row mb-40">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-tight lg:leading-[74.59px] text-[#1C1717]">
            Your Premier
          </p>
          <p className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-tight lg:leading-[74.59px] text-[#1C1717]">
            Photobook
          </p>
          <p className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-tight lg:leading-[74.59px] text-[#1C1717]">
            Agency
          </p>

          <p className="mt-4 text-[#484848] text-sm sm:text-md lg:text-lg leading-[24px] lg:leading-[28px]">
            &quot;Sometimes, The Smallest Things Take Up The Most
          </p>
          <p className="text-[#484848] text-sm sm:text-md lg:text-lg leading-[24px] lg:leading-[28px]">
            Room In Your Heart&quot; – Pooh
          </p>

          <button className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600">
            Let&apos;s Begin
          </button>
        </div>

        <div className=" relative w-full lg:w-1/2">
          <div className="w-[250px] sm:w-[300px] md:w-[347px] h-[300px] sm:h-[350px] md:h-[422px] mx-auto lg:mx-0">
            <img
              src={Img_01}
              alt="Father and Daughter Reading"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-0 -left-5 sm:-left-10 lg:-left-20 transform translate-x-4 sm:translate-x-8 lg:-translate-x-12 translate-y-8 lg:translate-y-12 w-[150px] sm:w-[180px] md:w-[197px] h-[180px] sm:h-[220px] md:h-[237px]">
            <img
              src={Img_02}
              alt="Smiling Woman"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="absolute right-10 sm:right-20 md:right-32 lg:right-40 top-28 sm:top-32 lg:top-40 transform translate-x-8 lg:translate-x-12 translate-y-8 lg:translate-y-12 w-[180px] sm:w-[200px] md:w-[237px] h-[250px] sm:h-[300px] md:h-[335px]">
            <img
              src={Img_03}
              alt="Relaxing with Photobook"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* second gallery section  */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-gray-200 w-[532px] h-[404px] rounded-[10px] overflow-hidden">
            <img
              src={MidImg_01}
              alt="Image 1"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          <div className="flex">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-200 w-[254px] h-[178px] rounded-[10px] overflow-hidden">
                <img
                  src={MidImg_04}
                  alt="Image 4"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="bg-gray-200 w-[254px] h-[60px] rounded-[10px] overflow-hidden">
                <img
                  src={MidImg_05}
                  alt="Image 5"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
            </div>
            <div className="bg-gray-200 w-[242px] h-[262px] rounded-[10px] overflow-hidden ml-4">
              <img
                src={MidImg_03}
                alt="Image 3"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-gray-200 w-[532px] h-[60px] rounded-[10px] overflow-hidden">
            <img
              src={MidImg_06}
              alt="Image 6"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="bg-gray-200 w-[532px] h-[606px] rounded-[10px] overflow-hidden">
            <img
              src={MidImg_02}
              alt="Image 2"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </section>

      {/* Third gallery section  */}
      <section className="flex flex-col items-center from-white to-pink-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img
              src={storyImg}
              alt="Photobook with pictures"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 p-4 mb-56">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Cheeribook, where we specialize in capturing life&apos;s
              little moments and turning them into something truly special. Our
              goal is to create a personalized photo book that will make your
              heart sing and bring joy to whoever flips through its pages. We
              believe that it&apos;s the small things that matter most, which is why
              we take great care to include all of the special details that make
              your memories unique.
            </p>
            <button className="px-6 py-2 bg-[#FC8F82] text-white font-semibold rounded-lg shadow hover:bg-[#c5675c]">
              About Us
            </button>
          </div>
        </div>
        <div className="w-full bg-pink-200 mt-8 py-4 text-center">
          <p className="text-pink-700 font-semibold">
            ✨ Unveiling Treasured Memories: Your Photobook Journey, Crafted
            With Love. ✨
          </p>
        </div>
      </section>

      {/* Fourth gallery section  */}
      <section className="py-12 bg-white ">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl font-semibold text-[#1C1717] mb-8"
            style={{ fontFamily: "Wulkan Display", lineHeight: "55px" }}
          >
            Your Special Moments
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-64">
              <img
                src={Yearbook}
                alt="dd"
                className="w-[254px] h-[296px] object-cover rounded-lg shadow-md"
              />
              <p
                className="mt-4 text-lg font-normal text-[#484848]"
                style={{ fontFamily: "Newsreader" }}
              >
                Preschool yearbook
              </p>
            </div>
            <div className="w-64">
              <img
                src={Newborn}
                alt="dd"
                className="w-[254px] h-[296px] object-cover rounded-lg shadow-md"
              />
              <p
                className="mt-4 text-lg font-normal text-[#484848]"
                style={{ fontFamily: "Newsreader" }}
              >
                Newborn
              </p>
            </div>
            <div className="w-64">
              <img
                src={Furryfriends}
                alt="dd"
                className="w-[254px] h-[296px] object-cover rounded-lg shadow-md"
              />
              <p
                className="mt-4 text-lg font-normal text-[#484848]"
                style={{ fontFamily: "Newsreader" }}
              >
                Furry friends
              </p>
            </div>
            <div className="w-64">
              <img
                src={Family}
                alt="dd"
                className="w-[254px] h-[296px] object-cover rounded-lg shadow-md"
              />
              <p
                className="mt-4 text-lg font-normal text-[#484848]"
                style={{ fontFamily: "Newsreader" }}
              >
                Family
              </p>
            </div>
            <div className="w-20">
              <img
                src={Texture}
                alt="dd"
                className="w-[254px] h-[296px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* fifth section  */}
      <section className="py-12 bg-gray-50 flex flex-col md:flex-row">
        <div className="w-full md:w-[274px] md:ml-24 mb-8 md:mb-0">
          <h2
            className="text-4xl font-semibold mb-6 leading-tight tracking-wide text-center md:text-left"
            style={{ fontFamily: "Wulkan Display" }}
          >
            Our <br /> Client’s <br /> Stories
          </h2>
          <p
            className="text-base font-light mb-6 text-center md:text-left"
            style={{ fontFamily: "Newsreader" }}
          >
            Without A <span className="font-semibold">Doubt</span>, You&apos;ll Adore
            It.
          </p>
          <div className="text-center md:text-left">
            <button className="bg-black text-white px-7 py-2 rounded-lg font-medium">
              Read All Stories
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-24">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-6 w-full md:w-[350px] h-[240px] rounded-tl-lg shadow-sm"
            >
              <p className="text-sm font-light mb-4">{`"${story.text}"`}</p>
              <p className="text-right text-sm font-medium">- {story.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
