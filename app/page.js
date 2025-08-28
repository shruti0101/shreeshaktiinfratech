import Bestseller from "@/components/landingpage/Bestseller";
import AccordionHero from "@/components/landingpage/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/landingpage/About";
import Cta from "@/components/landingpage/Cta";
import Whychoose from "@/components/landingpage/Whychoose";
import Process from "@/components/landingpage/Process";
import Barbending from "@/components/landingpage/Barbending";

import Faq from "@/components/landingpage/Faq";
import Cta2 from "@/components/landingpage/Cta2";
import Testimonials from "@/components/landingpage/Testimonials";


import Stickybutton from "@/components/landingpage/Stickybutton";
import Productcategory from "@/components/landingpage/Productcategory";
import Check from "@/components/landingpage/Check";
export default function Home() {
  return (
    <>
      <AccordionHero></AccordionHero>
      <Stickybutton></Stickybutton>
    
      <About></About>
      <Bestseller></Bestseller>
 
   
      <Cta></Cta>
      <Whychoose></Whychoose>
      <Productcategory></Productcategory>
      <Process></Process>
           <Check></Check>
      <Barbending></Barbending>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Cta2></Cta2>
    
    </>
  );
}
