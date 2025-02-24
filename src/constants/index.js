import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    dsa,
    ydb,
    gotosioc,
    doubtnut,
    fusion,
    sql,
    cpp,
    python,
    java,
    postman,
    trenders,
    price,
    safar,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [

    {
        title: "Leetcode",
        icon: web,
        source_code_link: "https://leetcode.com/u/yxsh14/",
    },
    {
        title: "GitHub",
        icon: mobile,
        source_code_link: "https://github.com/yxsh14",

    },
    {
        title: "LinkedIn",
        icon: backend,
        source_code_link: "https://www.linkedin.com/in/yash-sahu-611b7a234/",
    },
    {
        title: "Resume",
        icon: creator,
        source_code_link: "https://drive.google.com/file/d/1XAiESDMxIwUHD4DedwRGOOYapJS9DbVG/view?usp=sharing",
    },
];

const technologies = [
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "AWS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "C#",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "docker",
        icon: docker,
    },

];

const experiences = [
    {
        title: "Physics Expert",
        company_name: "Doubtnut",
        icon: doubtnut,
        iconBg: "#383E56",
        date: "April 2020 - Oct 2020",
        points: [
            "Produced 300+ physics educational videos, enhancing student understanding.",
            "Demonstrated strong communication and teaching abilities in physics content creation.",
            "Showcased strong subject matter expertise and effective communication skills in conveying complex concepts.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Your Digital Buddies",
        icon: ydb,
        iconBg: "#E6DEDD",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Developed user-friendly websites with HTML, CSS, JavaScript, ReactJS, and NextJS, resulting in a 4% conversion rate boost.",
            "Improved mobile responsiveness by 40% through collaboration with cross-functional teams, ensuring project success.",
            "Contributed to project success by effectively utilizing frontend technologies and collaborating seamlessly with teams.",
            "Participating in code reviews and providing constructive feedback to other developers."

        ],
    },
    {
        title: "Web Developer",
        company_name: "IIITDMJ Fusion",
        icon: fusion,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - April 2023",
        points: [
            "Resolved front-end bugs and added new functionalities to Fusion's RSPC Module, meeting project requirements.",
            "Improved site efficiency by restructuring functions, reducing paperwork by 30% for college staff.",
            "Proficiently integrated new features into the existing system using Flutter development skills.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "GoToSIOC",
        icon: gotosioc,
        iconBg: "#383E56",
        date: "Dec 2023 - Present",
        points: [
            "Led frontend and backend development at GoToSIOC, improving user experience and data optimization.",
            "Excelled in tackling intricate technical hurdles, showcasing adaptability and problem-solving acumen.",
            "Committed to ongoing learning and growth, enhancing technical skills and project success at GoToSIOC.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Development Engineer",
        company_name: "Tripta Innovations Private Limited",
        icon: gotosioc,
        iconBg: "#383E56",
        date: "Sept 2024 - Present",
        points: [
            "Built a custom blog platform in React with an admin panel for content management.",
            "Optimized SEO using structured data, meta tags, and keyword targeting for better search visibility.",
            "Developed and integrated new React components into an existing website with AWS and Nginx for reverse proxy.",
            "Ensured seamless front-end and back-end integration with a unified database for data consistency.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "PDPM Indian Institute of Information Technology Design & Manufacturing,Jabalpur",
        name: "B.Tech (CSE)",
        designation: "2020-2024",
    },
    {
        testimonial:
            "Excellent Carriar Convent Higher Secondary School Berasia, Bhopal",
        name: "M.P. Board",
        designation: "2018-2019",
    },
    {
        testimonial:
            "Angelic Higher Secondary School Berasia, Bhopal",
        name: "M.P. Board.",
        designation: "2016-2017",
    },
];

const projects = [
    {
        name: "Trenders",
        description:
            "Trenders is a fully functional E-commerce web application. It is a one stop shop to fulfill all your fashion and lifestyle needs. You can browse different categories and different sections to get desired product at best price.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Node",
                color: "pink-text-gradient",
            },
        ],
        image: trenders,
        source_code_link: "https://github.com/yxsh14/Trenders",
    },
    {
        name: "PriceTracker",
        description:
            "Track, compare, and save on products across multiple websites with ease. Get notified of price drops and uncover the best deals effortlessly. Your go-to tool for smarter online shopping.",
        tags: [
            {
                name: "Next",
                color: "blue-text-gradient",
            },
            {
                name: "Bright Data Scraping",
                color: "green-text-gradient",
            },
            {
                name: "Cronjob",
                color: "pink-text-gradient",
            },
        ],
        image: price,
        source_code_link: "https://github.com/yxsh14/PriceTracker",
    },
    {
        name: "Safar",
        description:
            "Safar guides you to uncover the finest hotels, restaurants, and nearby attractions. With its intuitive interface, Safar becomes your ultimate companion, ensuring seamless and unforgettable travel experiences.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Map",
                color: "green-text-gradient",
            },
            {
                name: "Filters",
                color: "pink-text-gradient",
            },
        ],
        image: safar,
        source_code_link: "https://github.com/yxsh14/Safar",
    },
];

export { services, technologies, experiences, testimonials, projects };
