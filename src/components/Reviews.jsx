import { Fragment } from "react"
import { TestimonalRating } from "../assets"
import { breakpoints, reviews } from "../constants"

const Reviews = () => {
    return (
        <section id="reviews" className="flex flex-col justify-center items-center gap-12 mt-20 lg:mt-32 px-6 sm:px-20 scroll-offset"> 
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center gap-6 w-full max-w-7xl">
                <h2 className="font-bold text-center text-white h2">
                    Reviews From Our Clients
                </h2>
            </div>
            {/* SLIDES CONTAINER */}
            <div className="w-full max-w-7xl h-fit">
                <swiper-container style={{"--swiper-pagination-color": "#FFFFFF",  "--swiper-pagination-bullet-inactive-color":"#FFFFFF"}} breakpoints={JSON.stringify(breakpoints)} pagination="true">
                    {reviews.map((review) => (
                        <Fragment key={review.id}>
                            <swiper-slide>
                                <div className="flex flex-col justify-center gap-5 bg-primary mb-14 px-5 py-8 sm:p-8 rounded-2xl w-full h-[515px] sm:h-[350px] lg:h-[380px] xl:h-[350px] hover:cursor-pointer">
                                    <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                                        <div className="flex sm:flex-row flex-col items-center gap-4">
                                            <img src={review.profile} alt="testimonial image" className="w-16 h-16 object-contain"/>
                                            <div className="flex flex-col items-center sm:items-start">
                                                <h3 className="font-bold text-[20px] text-white"> {review.name} </h3>
                                                <p className="text-light-gray"> {review.location} </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center w-[140px]">
                                            <img src={TestimonalRating} alt="testimonial image" className="object-contain"/>
                                        </div>
                                    </div>
                                    <p className="text-center text-white sm:text-left leading-8">
                                        {review.description}
                                    </p>
                                </div>
                            </swiper-slide>
                        </Fragment>
                    ))}
                </swiper-container>
            </div>

        </section>
    )
}

export default Reviews