import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToServe } from "@/components/HowToServe";
import { Ingredients } from "@/components/Ingredients";
import { OrderProvider } from "@/components/order/OrderProvider";
import { OrderSection } from "@/components/order/OrderSection";
import { StickyBar } from "@/components/order/StickyBar";
import { QuickServe } from "@/components/QuickServe";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <OrderProvider>
      <Hero />
      <main>
        <QuickServe />
        <Story />
        <Ingredients />
        <HowToServe />
        <OrderSection />
      </main>
      <Footer />
      <StickyBar />
    </OrderProvider>
  );
}
