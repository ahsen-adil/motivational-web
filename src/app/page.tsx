import Hero from "./(pages)/hero/page";
import CelebrityQuotes from "./(pages)/celebrityQuotes/page";
import Books from "./(pages)/books/page";
import Tips from "./(pages)/tips/page";
import Contact from "./(pages)/contact/page";

export default function Home() {
  return (
    <>
     <Hero/>
     <CelebrityQuotes/>
     <Books/>
     <Tips/>
     <Contact/>
    </>
  );
}
