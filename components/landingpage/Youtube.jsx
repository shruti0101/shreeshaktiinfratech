"use client";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

export default function YoutubeSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // 👉 Just paste YouTube video links here
  const videos = [
    { id: "1", title: "Bar Bending Machine", link: "https://youtu.be/Oh8Y-LRhUr4?si=kHQ2RDRmzPkHwD52" },
    { id: "2", title: "Anti Smog Gun", link: "https://youtu.be/BV_WKSBmzVM?si=vMlzbkv3_IHGExUA" },
    { id: "3", title: "Mixer Lift & Bar Cutting Machine", link: "https://youtu.be/pPYL4xDxVR0?si=4SRwRZTJP6JNVE4L" },
    { id: "4", title: "Monkey Hoist Lift", link: "https://youtu.be/WutWHT9HkrI?si=6oErMZFJ6I8WpxRr" },
  ];

  // 🔑 Extract ID from normal or short YouTube link
  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1); // /VIDEO_ID
      }
      return u.searchParams.get("v"); // ?v=VIDEO_ID
    } catch (e) {
      return null;
    }
  };

  const openModal = (url) => {
    const id = getYoutubeId(url);
    if (id) {
      setActiveVideo(`https://www.youtube.com/embed/${id}?autoplay=1`);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setActiveVideo(null);
    setIsOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-5">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaYoutube className="text-red-600 text-4xl" /> Our YouTube Videos
      </h2>

      {/* Video Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {videos.map((video) => {
          const id = getYoutubeId(video.link);
          return (
            <div
              key={video.id}
              onClick={() => openModal(video.link)}
              className="cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:scale-105 transition relative"
            >
              {/* ✅ Thumbnail */}
              {id && (
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Overlay with YouTube icon */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center  transition">
                <FaYoutube className="text-white text-6xl drop-shadow-lg bg-red-500 rounded-3xl" />
              </div>

              <div className="p-4 bg-white ">
                <h3 className="text-lg  font-semibold line-clamp-2">{video.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal} // close on background click
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-3xl relative"
            onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
          >
            <div className="relative pb-[56.25%]">
              <iframe
                src={activeVideo}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full shadow hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
