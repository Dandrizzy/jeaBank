
import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonies from "./Testimonies";
const data = [
 { id: 1, img: 'https://source.unsplash.com/random/?face,woman,young', name: 'Judith Black', position: 'CEO of Food Bank', text: "Switching to online banking with Futon MFB has been a game-changer for my small business. With their intuitive online platform, I can easily manage payroll, track expenses, and monitor cash flow—all from the convenience of my laptop or smartphone." },
 { id: 2, img: 'https://source.unsplash.com/random//?face,man,young', name: 'Judith Red', position: 'Manager of Laundry Man', text: "As a busy professional with a hectic schedule, I rely on Futon MFB's online banking services to keep my finances organized and accessible on-the-go. Whether it's checking account balances, transferring funds between accounts, or paying bills, their user-friendly online bank makes it easy to manage my finances from anywhere." },
 { id: 3, img: 'https://source.unsplash.com/random/?face,girl,young', name: 'Red Black', position: 'Senior Manager of Free World', text: "As a tech-savvy millennial, I appreciate the convenience and flexibility of online banking with Futon MFB. Their sleek and modern online platform makes it a breeze to track spending, set up automatic savings transfers, and even create custom budgeting categories." },
 { id: 4, img: 'https://source.unsplash.com/random/?face,lady,young', name: 'Judith Black', position: 'CEO of Workcation', text: "Since retiring, I've been looking for ways to simplify my banking and minimize trips to the local branch. Futon MFB's online banking platform has been a lifesaver for me." },
 { id: 5, img: 'https://source.unsplash.com/random/?face,boy,young', name: 'Judith Black', position: 'CEO of Workcation', text: "As a college student juggling classes, work, and extracurricular activities, online banking with Futon MFB has been a game-changer for me. Their mobile app makes it easy to deposit checks, transfer funds, and track spending—all while I'm on campus or studying at home. " }
];
export function Slides() {
 return (
  <Carousel className=" w-3/4 mx-auto">
   <CarouselContent>
    {data.map((testimony) => (
     <CarouselItem key={testimony.id}>
      <div className="p-1">
       <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
         <Testimonies testimony={testimony} />
        </CardContent>
       </Card>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
  </Carousel>
 );
}
