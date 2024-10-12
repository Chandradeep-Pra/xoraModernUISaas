import { testimonials } from "../constants";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  const halfLen = Math.floor(testimonials.length / 2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex ">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300 ">
          <p className="caption mb-5 max-md:mb-2.5">Wall of love</p>
          <h3 className="h3 max-md:h5 text-p4">Words of our fans</h3>
        </div>
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLen).map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                item={testimonial}
                containerClassname={"last:after:hidden last:after:max-md:block"}
              />
            ))}
          </div>
          <div className="flex-50">
            {testimonials.slice(halfLen).map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                item={testimonial}
                containerClassname="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 max-md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
