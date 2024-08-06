import { TestimonalProfile1, TestimonalProfile2, TestimonalProfile3, TestimonalProfile4 } from "../assets"
import processes from "./processes"

const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 32,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 32,
    },
}

const pricing = [
    {
        id: 1,
        title: "Beginner",
        list: [
            "Landing Page", 
            "UI/UX Design",
            "SEO Optimization",
            "Device Responsive",
            "Hosting & Domain",
            "Unlimited Edits",
            "24/7 Support"
        ],
        price: "$50.00"
    },
    {
        id: 2,
        title: "Professional",
        list: [
            "Up To 10 Pages", 
            "UI/UX Design",
            "SEO Optimization",
            "Device Responsive",
            "Hosting & Domain",
            "Unlimited Edits",
            "24/7 Support"
        ],
        price: "$100.00"
    },
    {
        id: 3,
        title: "Enterprise",
        list: [
            "Unlimited Pages", 
            "UI/UX Design",
            "SEO Optimization",
            "Device Responsive",
            "Hosting & Domain",
            "Unlimited Edits",
            "24/7 Support"
        ],
        price: "$150.00"
    },
]

const reviews = [
    {
        id: 1,
        profile: TestimonalProfile1,
        name: "Cindy Sloan",
        location: "Houston, Texas",
        description: "I had the pleasure of working with this outstanding company and I am truly impressed with their services. From the initial consultation to the final launch of my website, their approach was both comprehensive and client-focused. I appreciate them for taking the time to understand my vision and plan to meet my goals."
    },
    {
        id: 2,
        profile: TestimonalProfile2,
        name: "May Brooks",
        location: "Humble, Texas",
        description: "This company delivers exceptional custom designed software that is truly tailored to all meet your business needs. Their blend of technology, strategic planning, and client centered service makes them a standout choice for any web project. I recommend them to any company looking to automate their business."
    },
    {
        id: 3,
        profile: TestimonalProfile3,
        name: "Jason Wind",
        location: "Katy, Texas",
        description: "It is evident that their team is highly skilled. They tackled every challenge with expertise and their commitment to qualiy was aparent during the extensive testing phase we had to go through. I felt reassured knowing that they were thoroughly going over every detail before launch. Speaking of the launch it was flawless."
    },
    {
        id: 4,
        profile: TestimonalProfile4,
        name: "Sarah Kin",
        location: "Houston, Texas",
        description: "The design team impressed me with their ability to blend functionality with elegance. They create a mock up of a web application that not only looked fantastic but also made interacting with all of our services a breeze. I can really say that our user experience is top notch and have received several compliments."
    },

]

export {
    breakpoints,
    pricing,
    processes,
    reviews,
}