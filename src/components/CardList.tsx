import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "Python Basics",
    badge: "Coding",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    count: 4500,
  },
  {
    id: 2,
    title: "AI Innovations 2025",
    badge: "AI",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    count: 3200,
  },
  {
    id: 3,
    title: "Web Development Tips",
    badge: "Tech",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    count: 2800,
  },
  {
    id: 4,
    title: "JavaScript Deep Dive",
    badge: "Coding",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    count: 3900,
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    badge: "AI",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    count: 3400,
  },
];

const latestTransaction = [
  {
    id: 1,
    title: "Digital Photography Guide",
    badge: "Photography",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    count: 2100,
  },
  {
    id: 2,
    title: "Healthy Cooking Recipes",
    badge: "Food",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    count: 1800,
  },
  {
    id: 3,
    title: "Fitness Workouts 2025",
    badge: "Health",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    count: 2500,
  },
  {
    id: 4,
    title: "Travel Destinations Asia",
    badge: "Travel",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    count: 2300,
  },
  {
    id: 5,
    title: "Gardening Tips for Beginners",
    badge: "Nature",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
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
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-0 flex-1">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}k</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
