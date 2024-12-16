import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import {Josefin_Sans} from "next/font/google";

//METADATA
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis"
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dense forests.",
  keywords:
    "Dolomites trekking, guided mountain tours, hiking Italian Dolomites, adventure travel, Dolomites hiking for beginners, mountain treks, outdoor adventure Italy",
  openGraph: {
    title:
      "The Wild Oasis | Luxurious Cabin Hotel in the Italian Dolomites",
    description:
      "Experience the Italian Dolomites like never before. Our luxurious cabin hotel is surrounded by breathtaking mountains and dense forests. Perfect for nature enthusiasts and adventure seekers.",
    url: "https://example.com",
    siteName: "The Wild Oasis",
    images: [
      {
        url: "https://example.com/images/dolomites-cabin.jpg",
        width: 1200,
        height: 630,
        alt: "Luxurious cabin hotel in the Italian Dolomites"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Wild Oasis | Luxurious Cabin Hotel in the Italian Dolomites",
    description:
      "Stay in a luxurious cabin surrounded by the beautiful Dolomites. Discover adventure, tranquility, and unforgettable views at The Wild Oasis.",
    images: [
      "https://example.com/images/dolomites-cabin.jpg"
    ]
  },
  alternates: {
    canonical: "https://example.com",
    languages: {
      "en-US": "https://example.com/en",
      "it-IT": "https://example.com/it"
    }
  },
  robots: {
    index: true,
    follow: true
  }
};

//FONT
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

//styles
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 antialiased flex flex-col text-primary-100 min-h-screen ${josefin.className} relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
