import React from "react";

const reviews = [
  {
    name: "Supun Wickrama",
    date: "2022-09-09",
    rating: 4,
    review: "Highly recommended. quality products and excellent customer service .. Good job brother ❤️",
  },
  {
    name: "Dinesh Gamage",
    date: "2023-02-19",
    rating: 4,
    review: "Highly recommended. quality products and excellent customer service❤️",
  },
  {
    name: "Lakshan De Silva",
    date: "2024-09-19",
    rating: 5,
    review: "Great deals",
  },
  {
    name: "Isuru Silva",
    date: "2024-09-19",
    rating: 5,
    review: "Great deals. quality products and excellent customer service. ",
  },
];

const ReviewCard = ({ name, date, rating, review }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 w-80 flex flex-col items-start">
    <div className="flex items-center space-x-2">
      <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-xl font-bold">{name[0]}</span>
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
    <div className="mt-3 flex items-center">
      {Array(rating)
        .fill(0)
        .map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      {Array(5 - rating)
        .fill(0)
        .map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">★</span>
        ))}
    </div>
    <p className="mt-3 text-gray-700">{review}</p>
  </div>
);

const Reviews = () => (
  <div className="bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">GOOD</h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-400 text-2xl">
          {[...Array(4)].map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="text-gray-300">★</span>
        </div>
        <p className="ml-2 text-sm text-gray-500">Based on 136 reviews</p>
      </div>
      <div className="flex space-x-4 overflow-auto">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </div>
  </div>
);

export default Reviews;
