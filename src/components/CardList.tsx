import Image from "next/image";
import { Card } from "./ui/card";

const popularContent = [
  {
    id: 1,
    title: "Python Basics",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&s=tinysrgb",
    count: 4500,
  },
  {
    id: 2,
    title: "AI Innovations 2025",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&s=tinysrgb",
    count: 3200,
  },
  {
    id: 3,
    title: "Web Development Tips",
    badge: "Tech",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&s=tinysrgb",
    count: 2800,
  },
  {
    id: 4,
    title: "JavaScript Deep Dive",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/4171928/pexels-photo-4171928.jpeg?auto=compress&s=tinysrgb",
    count: 3900,
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&s=tinysrgb",
    count: 3400,
  },
];

const latestTransaction = [
  {
    id: 1,
    title: "Digital Photography Guide",
    badge: "Photography",
    image:
      "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&s=tinysrgb",
    count: 2100,
  },
  {
    id: 2,
    title: "Healthy Cooking Recipes",
    badge: "Food",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&s=tinysrgb",
    count: 1800,
  },
  {
    id: 3,
    title: "Fitness Workouts 2025",
    badge: "Health",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&s=tinysrgb",
    count: 2500,
  },
  {
    id: 4,
    title: "Travel Destinations Asia",
    badge: "Travel",
    image:
      "https://images.pexels.com/photos/1674240/pexels-photo-1674240.jpeg?auto=compress&s=tinysrgb",
    count: 2300,
  },
  {
    id: 5,
    title: "Gardening Tips for Beginners",
    badge: "Nature",
    image:
      "https://images.pexels.com/photos/259698/pexels-photo-259698.jpeg?auto=compress&s=tinysrgb",
    count: 1900,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list = title === "Popular Content" ? popularContent : latestTransaction;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id}>
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image src={item.image} alt={item.title} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
