import React, { useEffect, useState } from "react";

const Stories = () => {
  const [stories, setStories] = useState([]); // State to store stories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:8000/api/story/stories", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Add token from localStorage
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch stories");
        }

        setStories(data.stories || []); // Save fetched stories
      } catch (err) {
        setError(err.message); // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading stories...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-[#0a1f44] to-black text-white">
      <div className="p-6 max-w-4xl w-full bg-[#1a1a2e] rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Stories</h2>

        {stories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {stories.map((story) => (
              <div
                key={story._id}
                className="p-4 bg-[#252a34] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-purple-500"
              >
                {story.type === "image" ? (
                  <img
                    src={story.content}
                    alt="Story"
                    className="rounded-lg w-full"
                  />
                ) : (
                  <video controls className="rounded-lg w-full">
                    <source src={story.content} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="mt-2 text-gray-400 text-sm">By: {story.user.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-lg">No stories available.</div>
        )}
      </div>
    </div>
  );
};

export default Stories;
