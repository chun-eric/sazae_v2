import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";



const reviews = [
  {
    name: "Calbee",
    username: "@calbee",
    body: "Working with them has been a crunchy and satisfying experience, every time.",
    img: "/clients/calbee.png", // Correct path
  },
  {
    name: "Career Meister",
    username: "@careermeister",
    body: "They masterfully guided us through our digital transformation.",
    img: "/clients/career_meister.png", // Correct path
  },
  {
    name: "Dow",
    username: "@dow",
    body: "Innovative solutions that consistently drive progress for our team.",
    img: "/clients/dow.png", // Correct path
  },
    {
    name: "IU",
    username: "@iu",
    body: "Innovative solutions that consistently drive progress for our team.",
    img: "/clients/iU_logo.png", // Correct path
  },
  {
    name: "Lenova",
    username: "@lenova",
    body: "Their expertise is as solid and reliable as their platforms.",
    img: "/clients/lenova.png", // Correct path
  },
  {
    name: "Macnica",
    username: "@macnica",
    body: "A true partner in navigating the complex tech landscape.",
    img: "/clients/macnica.png", // Correct path
  },
  {
    name: "Mimaki",
    username: "@mimaki",
    body: "The precision and quality of their work is simply unmatched.",
    img: "/clients/mimaki.png", // Correct path
  },
  // You can add more clients here
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[250px] w-[350px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
    
        <img className="absolute inset-0 h-full w-full object-cover " width="100%" height="100%" alt="" src={img} />
       
        {/* <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div> */}
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-30">
      <h1 className="pb-12 text-4xl font-bold">Our Clients & Partners</h1>
      <Marquee pauseOnHover className="[--duration:45s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
