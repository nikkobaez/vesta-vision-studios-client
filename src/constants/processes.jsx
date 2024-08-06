import { ResearchAndStrategyIcon, UIUXDesignIcon, DevelopmentIcon, TestAndValidateIcon, LaunchIcon, MeasureAndRefineIcon } from "../assets"

const processes = [
    {
        id: 1,
        icon: <ResearchAndStrategyIcon color="white" size={40}/>,
        title: "Research & Strategy",
        description: "Our first step is to understand your vision and goals and from there we create an actionable project plan and solutions roadmap.",
    },
    {
        id: 2,
        icon: <UIUXDesignIcon size={35} color="white"/>,
        title: "UI/UX Design",
        description: "Our UI/UX team works with you to design a website that is both beautiful AND functional creating a premium user experience.",
    },
    {
        id: 3,
        icon: <DevelopmentIcon size={35} color="white"/>,
        title: "Development",
        description: "Our US-based software developers start to develop the technology, platforms, and services that will make your website a success.",
    },
    {
        id: 4,
        icon: <TestAndValidateIcon size={40} color="white"/>,
        title: "Test & Validate",
        description: "Providing a secure digital experience is important which is why we perform extensive quality assurance testing prior to launch.",
    },
    {
        id: 5,
        icon: <LaunchIcon color="white" size={40}/>,
        title: "Launch",
        description: "Once your website is ready for launch, we will handle the deployment and be on standby to ensure everything runs smoothly.",
    },
    {
        id: 6,
        icon: <MeasureAndRefineIcon size={40} color="white"/>,
        title: "Measure & Refine",
        description: "Long term-success means that your website is meeting your business goals so we'll measure and optimize consistently.",
    },
]

export default processes