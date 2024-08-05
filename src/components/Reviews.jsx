import { breakpoints } from "../constants"
import { TestimonalProfile1, TestimonalProfile2, TestimonalProfile3, TestimonalProfile4, TestimonalRating } from "../assets"

const Reviews = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-16 mt-20 lg:mt-32 px-6 sm:px-20"> 
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center gap-6 w-full max-w-7xl">
                <h2 className="font-bold text-center text-white h2">
                    Reviews From Our Clients
                </h2>
            </div>
            {/* SLIDES CONTAINER */}
            <div className="w-full max-w-7xl h-fit">
                <swiper-container style={{"--swiper-pagination-color": "#FFFFFF",  "--swiper-pagination-bullet-inactive-color":"#FFFFFF"}} breakpoints={JSON.stringify(breakpoints)} pagination="true">
                    {/* SLIDE 1 */}
                    <swiper-slide>
                        <div className="flex flex-col justify-center gap-5 bg-primary mb-14 px-5 py-8 sm:p-8 rounded-2xl w-full h-[515px] sm:h-[350px] lg:h-[380px] xl:h-[350px] hover:cursor-pointer">
                            <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                                <div className="flex sm:flex-row flex-col items-center gap-4">
                                    <img src={TestimonalProfile1} alt="testimonial image" className="w-16 h-16 object-contain"/>
                                    <div className="flex flex-col items-center sm:items-start">
                                        <h3 className="font-bold text-[20px] text-white"> Cindy Sloan </h3>
                                        <p className="text-light-gray"> Houston, Texas </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center w-[140px]">
                                    <img src={TestimonalRating} alt="testimonial image" className="object-contain"/>
                                </div>
                            </div>
                            <p className="text-center text-white sm:text-left leading-8">
                                I had the pleasure of working with this outstanding company 
                                and I am truly impressed with their services. From the initial 
                                consultation to the final launch of my website, their approach was both 
                                comprehensive and client-focused. I appreciate them for taking the 
                                time to understand my vision and plan to meet my goals.
                            </p>
                        </div>
                    </swiper-slide>

                    {/* SLIDE 2 */}
                    <swiper-slide>
                        <div className="flex flex-col justify-center gap-5 bg-primary mb-14 px-5 py-8 sm:p-8 rounded-2xl w-full h-[515px] sm:h-[350px] lg:h-[380px] xl:h-[350px] hover:cursor-pointer">
                            <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                                <div className="flex sm:flex-row flex-col items-center gap-4">
                                    <img src={TestimonalProfile2} alt="testimonial image" className="w-16 h-16 object-contain"/>
                                    <div className="flex flex-col items-center sm:items-start">
                                        <h3 className="font-bold text-[20px] text-white"> May Brooks </h3>
                                        <p className="text-light-gray"> Humble, Texas </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center w-[140px]">
                                    <img src={TestimonalRating} alt="testimonial image" className="object-contain"/>
                                </div>
                            </div>
                            <p className="text-center text-white sm:text-left leading-8">
                                This company delivers exceptional custom designed software that is truly
                                tailored to all meet your business needs. Their blend of technology, strategic planning, 
                                and client centered service makes them a standout choice for any web project. I 
                                recommend them to any company looking to automate their business.
                            </p>
                        </div>
                    </swiper-slide>

                    {/* SLIDE 3 */}
                    <swiper-slide>
                        <div className="flex flex-col justify-center gap-5 bg-primary mb-14 px-5 py-8 sm:p-8 rounded-2xl w-full h-[515px] sm:h-[350px] lg:h-[380px] xl:h-[350px] hover:cursor-pointer">
                            <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                                <div className="flex sm:flex-row flex-col items-center gap-4">
                                    <img src={TestimonalProfile3} alt="testimonial image" className="w-16 h-16 object-contain"/>
                                    <div className="flex flex-col items-center sm:items-start">
                                        <h3 className="font-bold text-[20px] text-white"> Jason Wind </h3>
                                        <p className="text-light-gray"> Katy, Texas </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center w-[140px]">
                                    <img src={TestimonalRating} alt="testimonial image" className="object-contain"/>
                                </div>
                            </div>
                            <p className="text-center text-white sm:text-left leading-8">
                                It is evident that their team is highly skilled. They tackled every challenge with 
                                expertise and their commitment to qualiy was aparent during the extensive testing
                                phase we had to go through. I felt reassured knowing that they were thoroughly going
                                over every detail before launch. Speaking of the launch it was flawless.
                            </p>
                        </div>
                    </swiper-slide>

                    {/* SLIDE 4 */}
                    <swiper-slide>
                        <div className="flex flex-col justify-center gap-5 bg-primary mb-14 px-5 py-8 sm:p-8 rounded-2xl w-full h-[515px] sm:h-[350px] lg:h-[380px] xl:h-[350px] hover:cursor-pointer">
                            <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                                <div className="flex sm:flex-row flex-col items-center gap-4">
                                    <img src={TestimonalProfile4} alt="testimonial image" className="w-16 h-16 object-contain"/>
                                    <div className="flex flex-col items-center sm:items-start">
                                        <h3 className="font-bold text-[20px] text-white"> Sarah Kin </h3>
                                        <p className="text-light-gray"> Houston, Texas </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center w-[140px]">
                                    <img src={TestimonalRating} alt="testimonial image" className="object-contain"/>
                                </div>
                            </div>
                            <p className="text-center text-white sm:text-left leading-8">
                                The design team impressed me with their ability to blend functionality with elegance. 
                                They create a mock up of a web application that not only looked fantastic but also made 
                                interacting with all of our services a breeze. I can really say that our user experience is 
                                top notch and have received several compliments.
                            </p>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>

        </section>
    )
}

export default Reviews