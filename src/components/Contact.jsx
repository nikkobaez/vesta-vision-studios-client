import { useEffect } from "react";
import { useForm } from "react-hook-form"
import axios from "axios"

const Contact = () => {
    /* REACT HOOK FORM USE FORM VARIABLES */
    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful} } = useForm({
        shouldFocusError: false
    });

    /* REACT HOOK FORM ON SUBMIT FUNCTION */
    const onSubmit = async (data) => {
        axios.post("https://getform.io/f/amdpgypb", {
            fullName: data.fullName,
            businessName: data.businessName,
            emailAddress: data.emailAddress,
            phoneNumber: data.phoneNumber,
            projectDescription: data.projectDescription
        }, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                fullName: "", 
                businessName: "",
                emailAddress: "",
                phoneNumber: "",
                projectDescription: "",
            }, { keepIsSubmitSuccessful: true})
        }
    }), [reset, isSubmitSuccessful]

    return (
        <section id="contact" className="flex flex-col justify-center items-center gap-12 mt-20 lg:mt-32 px-6 sm:px-20 py-5 scroll-offset">
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center w-full max-w-7xl">
                <h2 className="font-bold text-center text-white h2">
                    Let's Talk About Your Vision
                </h2>
            </div>

            {/* CONTACT FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 bg-primary p-8 rounded-2xl w-full sm:w-[375px] md:w-[425px] lg:w-[800px] h-fit'>
                <div className='flex lg:flex-row flex-col gap-8 w-full'>
                    <div className="flex flex-col gap-1 w-full">
                        {/* NAME */}
                        <input 
                            {...register("fullName", {
                                required: "Full name is required"
                            })}
                            type="text"
                            placeholder="Full Name"
                            className='bg-secondary px-5 rounded-lg w-full h-[55px] text-white outline-none'
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm"> 
                                {errors.fullName.message} 
                            </p> 
                        )}
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        {/* BUSINESS */}
                        <input 
                            {...register("businessName", {
                                required: "Business name is required"
                            })}
                            type="text"
                            placeholder="Business Name"
                            className='bg-secondary px-5 rounded-lg w-full h-[55px] text-white outline-none'
                        />
                        {errors.businessName && (
                            <p className="text-red-500 text-sm"> 
                                {errors.businessName.message} 
                            </p> 
                        )}
                    </div>
                </div>
                
                <div className='flex lg:flex-row flex-col gap-8 w-full'>
                    <div className="flex flex-col gap-1 w-full">
                        {/* EMAIL ADDRESS */}
                        <input 
                            {...register("emailAddress", {
                                required: "Email address is required", 
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
                                    message: "Invalid email address"
                                },
                            })}
                            type="text"
                            placeholder="Email Address"
                            className='bg-secondary px-5 rounded-lg w-full h-[55px] text-white outline-none'
                        />
                        {errors.emailAddress && (
                            <p className="text-red-500 text-sm"> 
                                {errors.emailAddress.message} 
                            </p> 
                        )}
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        {/* PHONE */}
                        <input 
                            {...register("phoneNumber", {
                                required: "Phone number is required",
                            })}
                            type="text"
                            placeholder="Phone Number"
                            className='bg-secondary px-5 rounded-lg w-full h-[55px] text-white outline-none'
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm"> 
                                {errors.phoneNumber.message} 
                            </p> 
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-1 w-full h-fit">
                    <textarea 
                        {...register("projectDescription", {
                            required: "Project description is required"
                        })}
                        placeholder="Tell Us About Your Project"
                        className='bg-secondary p-5 rounded-2xl w-full h-[175px] text-white outline-none'>  
                    </textarea>
                    {errors.projectDescription && (
                        <p className="text-red-500 text-sm"> 
                            {errors.projectDescription.message} 
                        </p> 
                    )}
                </div>
                <div className='flex justify-center items-center w-full'>
                    <button disabled={isSubmitting} className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-3 rounded-lg w-[200px] font-medium text-white justify hover:scale-[1.05] transition-all duration-500">
                        Submit
                    </button>
                </div>
                <div className="flex justify-center items-center w-full">
                    {isSubmitSuccessful && <p className="text-center text-green-500 text-sm"> Form submitted successfully </p>}
                </div>
            </form>
        </section>
    )
}

export default Contact