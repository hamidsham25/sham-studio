'use client';

const TestimonialStrip = () => {
  const testimonials = [
    "⭐ Perfekte Umsetzung unserer Vision - M. S., Sham Estate",
    "💡 Exzellente Beratung für meine Website - J. F.",
    "💯 Moderne Webdesign-Lösungen - H. D.",
    "⚡ Zielorientiert und effizient - M. E."
  ];

  return (
    <section className="bg-gradient-to-r from-muted/80 via-background to-muted/80 py-6 overflow-hidden border-y border-border/50">
      <div className="animate-scroll-loop-mobile md:animate-scroll-loop flex gap-16 text-base font-semibold text-muted-foreground whitespace-nowrap">
        {testimonials.map((testimonial, index) => (
          <span key={index} className="font-semibold">
            {testimonial}
          </span>
        ))}
        {/* Duplizieren für nahtlosen Loop */}
        {testimonials.map((testimonial, index) => (
          <span key={`duplicate-${index}`} className="font-semibold">
            {testimonial}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialStrip;
