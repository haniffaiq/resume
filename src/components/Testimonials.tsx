import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Social proof
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-4">What People Say</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              className="group flex h-full flex-col p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Quote size={24} aria-hidden="true" />
              </div>
              <p className="flex-1 text-base leading-relaxed text-foreground">
                {testimonial.quote}
              </p>
              <div className="mt-5">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-surface-medium">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
