import dynamic from "next/dynamic";
export const haederData = [
    {
        id: 1,
        title: "home",
        link: '/'
    },
    {
        id: 2,
        title: "service",
        link: '/service'
    },
    {
        id: 3,
        title: "projects",
        link: '/projects'
    },
    {
        id: 4,
        title: "blog",
        link: '/blog'
    },
    {
        id: 5,
        title: "about us",
        link: 'about'
    },
    {
        id: 6,
        title: "contact",
        link: '/contact'
    },
]

import { SlSocialInstagram } from "react-icons/sl";
// const { SlSocialInstagram } = dynamic(() => import("react-icons/sl"));
import { TiSocialFacebook } from "react-icons/ti";
// const { TiSocialFacebook } = dynamic(() => import("react-icons/ti"));
import { FaXTwitter } from "react-icons/fa6";
// const { FaXTwitter } = dynamic(() => import("react-icons/fa6"));
import { LiaPinterestP } from "react-icons/lia";
// const { LiaPinterestP } = dynamic(() => import("react-icons/lia"));
import { RiLinkedinFill } from "react-icons/ri";
// const { RiLinkedinFill } = dynamic(() => import("react-icons/ri"));

export const social = [
    { id: 1, label: 'instagram' , link: 'https://www.instagram.com/harakat_ae/', icon: <SlSocialInstagram style={{display: 'inline-flex'}}/>},
    { id: 2, label: 'facebook' , link: 'https://www.facebook.com/harakat.ae', icon: <TiSocialFacebook style={{display: 'inline-flex'}}/>},
    { id: 3, label: 'pinterest' , link: 'https://www.pinterest.com/harakatae/', icon: <LiaPinterestP style={{display: 'inline-flex'}}/>},
    { id: 4, label: 'linkedin' , link: 'https://www.linkedin.com/company/harakat-ae/', icon: <RiLinkedinFill style={{display: 'inline-flex'}}/>},
    { id: 5, label: 'x' , link: 'https://twitter.com/Harakat_ae', icon: <FaXTwitter style={{display: 'inline-flex'}}/>},
]

import { FaRegLightbulb } from "react-icons/fa";
// const { FaRegLightbulb } = dynamic(() => import("react-icons/fa"));
import { SiMaterialdesignicons } from "react-icons/si";
// const { SiMaterialdesignicons } = dynamic(() => import("react-icons/si"));
import { PiBracketsCurlyThin } from "react-icons/pi";
// const { PiBracketsCurlyThin } = dynamic(() => import("react-icons/pi"));
import { GrPieChart } from "react-icons/gr";
// const { GrPieChart } = dynamic(() => import("react-icons/gr"));
import { TbSeo } from "react-icons/tb";
// const { TbSeo } = dynamic(() => import("react-icons/tb"));
import { BiSolidSpreadsheet } from "react-icons/bi";
// const { BiSolidSpreadsheet } = dynamic(() => import("react-icons/bi"));
import { HiOutlinePhotograph } from "react-icons/hi";
// const { HiOutlinePhotograph } = dynamic(() => import("react-icons/hi"));
import { MdOutlineDeveloperMode } from "react-icons/md";
// const { MdOutlineDeveloperMode } = dynamic(() => import("react-icons/md"));
import { FaChartBar } from "react-icons/fa";
// const { FaChartBar } = dynamic(() => import("react-icons/fa"));
// import AlphWhite from "../svg/AlphWhite";
// import HarakaWhite from "../svg/HarakaWhite";
// import ShadaWhite from "../svg/ShadaWhite";
// import AeenWhite from "../svg/AeenWhite";
// import MeemWhite from "../svg/MeemWhite";
// import RaaWhite from "../svg/RaaWhite";
// import SahaeWhite from "../svg/SahaeWhite";
// import TwoDotWhite from "../svg/TwoDotWhite";
// import TanwenWhite from "../svg/TanwenWhite";
// import ShapWhite from "../svg/ShapWhite";
// import HmzahWhite from "../svg/HmzahWhite";
// import SbahWhite from "../svg/SbahWhite";
// import HhaaWhite from "../svg/HhaaWhite";
// import HaahWhite from "../svg/HaahWhite";
// import AeenWhite from "../svg/AeenWhite"
const AeenWhite = dynamic(() => import("../svg/AeenWhite"));
// import AlphWhite from "../svg/AlphWhite"
const AlphWhite = dynamic(() => import("../svg/AlphWhite"));
// import HaahWhite from "../svg/HaahWhite"
const HaahWhite = dynamic(() => import("../svg/HaahWhite"));
// import HarakaWhite from "../svg/HarakaWhite"
const HarakaWhite = dynamic(() => import("../svg/HarakaWhite"));
// import HhaaWhite from "../svg/HhaaWhite"
const HhaaWhite = dynamic(() => import("../svg/HhaaWhite"));
// import HmzahWhite from "../svg/HmzahWhite"
const HmzahWhite = dynamic(() => import("../svg/HmzahWhite"));
// import MeemWhite from "../svg/MeemWhite"
const MeemWhite = dynamic(() => import("../svg/MeemWhite"));
// import RaaWhite from "../svg/RaaWhite"
const RaaWhite = dynamic(() => import("../svg/RaaWhite"));
// import SahaeWhite from "../svg/SahaeWhite"
const SahaeWhite = dynamic(() => import("../svg/SahaeWhite"));
// import SbahWhite from "../svg/SbahWhite"
const SbahWhite = dynamic(() => import("../svg/SbahWhite"));
// import SenWhite from "../svg/SenWhite"
const SenWhite = dynamic(() => import("../svg/SenWhite"));
// import ShadaWhite from "../svg/ShadaWhite"
const ShadaWhite = dynamic(() => import("../svg/ShadaWhite"));
// import ShapWhite from "../svg/ShapWhite"
const ShapWhite = dynamic(() => import("../svg/ShapWhite"));
// import TanwenWhite from "../svg/TanwenWhite"
const TanwenWhite = dynamic(() => import("../svg/TanwenWhite"));
// import TwoDotWhite from "../svg/TwoDotWhite"
const TwoDotWhite = dynamic(() => import("../svg/TwoDotWhite"));


export const serviceData = [
    {
        id : 1,
        nameSer : "brand identity",
        desc : "Create a unique brand identity that connects with your audience. Our complete branding solutions include logo design, brand strategy, and consistent visual elements.",
        igm: '/assets/Brand.png',
        icon: <FaRegLightbulb style={{fontSize: '2rem' , color: '#fff'}} />,
        color: 'three'
    },
    {
        id : 2,
        nameSer : "graphic design",
        desc : "Grab people's attention with eye-catching visuals. Our graphic design services turn your ideas into attractive images, logos, and branding materials.",
        igm: '/assets/GraphicDesign.jpg',
        icon: <SiMaterialdesignicons style={{fontSize: '2rem' , color: '#fff'}}/>,
        color: 'bg_secondary' 
    },
    {
        id : 3,
        nameSer : "web development",
        desc : "Build a fantastic online image with our skilled website design and development services. We design and create websites that are easy to use and look great, specifically customized for your brand.",
        igm: '/assets/development.jpg',
        icon: <PiBracketsCurlyThin style={{fontSize: '2rem' , color: '#fff'}} />,
        color: 'pramiry' 
    },
    {
        id : 4,
        nameSer : "social media management",
        desc : "Boost your online visibility with our social media management know-how. We craft compelling content, engage with your audience, and fine-tune your social media platforms for optimal results.",
        igm: '/assets/SocialMedia.jpg',
        icon: <GrPieChart style={{fontSize: '2rem' , color: '#fff'}} />,
        color: 'bg_secondary'
    },
    {
        id : 5,
        nameSer : "seo / sem",
        desc : "Increase your online visibility with our SEO/SEM services. We improve your website for search engines and implement effective search engine marketing strategies to attract traffic and improve rankings.",
        igm: '/assets/SEO.jpg',
        icon: <TbSeo style={{fontSize: '2rem' , color: '#fff'}}/>,
        color: 'pramiry'
    },
    {
        id : 6,
        nameSer : "ads management",
        desc : "Expand your audience with focused advertising campaigns. Our ad management services make sure your message reaches the right people through careful planning and execution.",
        igm: '/assets/ads.jpg',
        icon: <BiSolidSpreadsheet style={{fontSize: '2rem' , color: '#fff'}} />,
        color: 'three'
    },
    {
        id : 7,
        nameSer : "mobile app development",
        desc : "Stay on top in the digital era with our advanced mobile app solutions. We take your ideas from design to development, making sure users have a smooth experience.",
        igm: '/assets/Mobile.jpg',
        icon: <MdOutlineDeveloperMode style={{fontSize: '2rem' , color: '#fff'}} />,
        color: 'pramiry'
    },
    {
        id : 8,
        nameSer : "telesales team",
        desc : "Improve your sales with our telesales team. We reach out to potential clients, share your value, and boost conversions through effective communication.",
        igm: '/assets/telesalesteam.jpg',
        icon: <FaChartBar  style={{fontSize: '2rem' , color: '#fff'}}/>,
        color: 'three'
    },
    {
        id : 9,
        nameSer : "photography / videography",
        desc : "Share your story through visuals. Our experienced team captures moments and produces engaging videos that connect with your audience, enhancing your brand's story.",
        igm: '/assets/photography.jpg',
        icon: <HiOutlinePhotograph style={{fontSize: '2rem' , color: '#fff'}} />,
        color: 'bg_secondary'
    },

    
]

export const clientDatALineOne = [
    {
        id: 1,
        url: "/assets/client/1.png"
    },
    {
        id: 2,
        url: "/assets/client/2.png"
    },
    {
        id: 3,
        url: "/assets/client/3.png"
    },
    {
        id: 4,
        url: "/assets/client/4.png"
    },
    {
        id: 5,
        url: "/assets/client/5.png"
    },
    {
        id: 6,
        url: "/assets/client/6.png"
    },
    {
        id: 7,
        url: "/assets/client/7.png"
    },
    {
        id: 8,
        url: "/assets/client/8.png"
    },
    {
        id: 9,
        url: "/assets/client/9.png"
    },
    {
        id: 10,
        url: "/assets/client/10.png"
    },
    {
        id: 11,
        url: "/assets/client/11.png"
    },
    {
        id: 12,
        url: "/assets/client/12.png"
    },
    {
        id: 13,
        url: "/assets/client/13.png"
    },
    {
        id: 14,
        url: "/assets/client/14.png"
    },
    {
        id: 15,
        url: "/assets/client/15.png"
    },
    {
        id: 16,
        url: "/assets/client/16.png"
    },
]

export const clientDatALineTwo = [
    {
        id: 17,
        url: "/assets/client/17.png"
    },
    {
        id: 18,
        url: "/assets/client/18.png"
    },
    {
        id: 19,
        url: "/assets/client/19.png"
    },
    {
        id: 20,
        url: "/assets/client/20.png"
    },
    {
        id: 21,
        url: "/assets/client/21.png"
    },
    {
        id: 22,
        url: "/assets/client/22.png"
    },
    {
        id: 23,
        url: "/assets/client/23.png"
    },
    {
        id: 24,
        url: "/assets/client/24.png"
    },
    {
        id: 25,
        url: "/assets/client/25.png"
    },
    {
        id: 26,
        url: "/assets/client/26.png"
    },
    {
        id: 27,
        url: "/assets/client/27.png"
    },
    {
        id: 28,
        url: "/assets/client/28.png"
    },
]

export const clientDatALineThree = [
    {
        id: 29,
        url: "/assets/client/29.png"
    },
    {
        id: 30,
        url: "/assets/client/30.png"
    },
    {
        id: 31,
        url: "/assets/client/31.png"
    },
    {
        id: 32,
        url: "/assets/client/32.png"
    },
    {
        id: 33,
        url: "/assets/client/33.png"
    },
    {
        id: 34,
        url: "/assets/client/34.png"
    },
    {
        id: 35,
        url: "/assets/client/35.png"
    },
    {
        id: 36,
        url: "/assets/client/36.png"
    },
    {
        id: 37,
        url: "/assets/client/37.png"
    },
    {
        id: 38,
        url: "/assets/client/38.png"
    },
    {
        id: 39,
        url: "/assets/client/39.png"
    },
    {
        id: 40,
        url: "/assets/client/40.png"
    },
]

export const projectsData = [
    {
        id: 1,
        logo: 'Down Town',
        img: '/assets/projects/burger.png',
        video: '/assets/projects/Down-Town-Burger.mp4',
        nameAygnce: 'Down Town',
        nameLogo: 'Fast food',
        icon: <AlphWhite fill={'#ce372e'} size={78} />,
        icon2: <TwoDotWhite fill={'#ce372e'} size={78} />,
        icon3: <TanwenWhite fill={'#ce372e'} size={78} />,
        icon4: <ShapWhite fill={'#ce372e'} size={78} />,
        color: '#ce372e'
    },
    {
        id: 2,
        logo: 'first trend',
        img: '/assets/projects/first-trend.png',
        video: '/assets/projects/First-trind.mp4',
        nameAygnce: 'first trend',
        nameLogo: 'architects',
        icon: <HarakaWhite fill={'#243b53'} size={78}/>,
        icon2: <SahaeWhite fill={'#243b53'} size={78} />,
        icon3: <TanwenWhite fill={'#243b53'} size={78} />,
        icon4: <ShapWhite fill={'#243b53'} size={78} />,
        color: '#243b53'
    },
    {
        id: 3,
        logo: 'Dent Cool',
        img: '/assets/projects/project-3.png',
        video: '/assets/projects/Dent-cool.mp4',
        nameAygnce: 'Dent Cool',
        nameLogo: 'Clinic',
        icon: <ShadaWhite fill={'#07bcef'} size={78}/>,
        icon2: <HmzahWhite fill={'#07bcef'} size={78} />,
        icon3: <TanwenWhite fill={'#07bcef'} size={78} />,
        icon4: <ShapWhite fill={'#07bcef'} size={78} />,
        color: '#07bcef'
    },
    {
        id: 4,
        logo: 'project-1',
        img: '/assets/projects/project-1.png',
        video: '/assets/projects/Micro-green.mp4',
        nameAygnce: 'We care',
        nameLogo: 'Medical Group',
        icon: <AeenWhite fill={'#6ebf58'} size={78} />,
        icon2: <SbahWhite fill={'#6ebf58'} size={78} />,
        icon3: <TanwenWhite fill={'#6ebf58'} size={78} />,
        icon4: <ShapWhite fill={'#6ebf58'} size={78} />,
        color: '#6ebf58'
    },
    {
        id: 5,
        logo: 'project-2',
        img: '/assets/projects/project-2.png',
        video: '/assets/projects/We-care.mp4',
        nameAygnce: 'We care',
        nameLogo: 'Medical Group',
        icon: <MeemWhite fill={'#ce372e'} size={78}/>,
        icon2: <HhaaWhite fill={'#ce372e'} size={78} />,
        icon3: <TanwenWhite fill={'#ce372e'} size={78} />,
        icon4: <ShapWhite fill={'#ce372e'} size={78} />,
        color: '#ce372e'
    },
    {
        id: 6,
        logo: 'florentino',
        img: '/assets/projects/florentino.png',
        video: '/assets/projects/florentino-coffee.mp4',
        nameAygnce: 'florentino',
        nameLogo: 'coffee',
        icon: <RaaWhite  fill={'#9c3847'} size={78}/>,
        icon2: <HaahWhite fill={'#9c3847'} size={78} />,
        icon3: <TanwenWhite fill={'#9c3847'} size={78} />,
        icon4: <ShapWhite fill={'#9c3847'} size={78} />,
        color: '#9c3847'
    },
]

export const CardTeamsOne = [
    {
        id: 1,
        name: 'ahmad',
        img: '/assets/teams/ahmad-masri.png',
        img2: '/assets/teams/ahmadMasri-2.png',
        position: 'founder & ceo',
        logo: 1
    },
    {
        id: 2,
        name: 'ahmad',
        img: '/assets/teams/ahmad-sharef.png',
        img2: '/assets/teams/sharff-2.png',
        position: 'marketing manager',
        logo: 2
    },
    {
        id: 3,
        name: 'obada',
        img: '/assets/teams/obada.png',
        img2: '/assets/teams/obada-2.png',
        position: 'hr & administrative manager',
        logo: 1,
    },
    {
        id: 4,
        name: 'kamal',
        img: '/assets/teams/kamal.png',
        img2: '/assets/teams/kamal-2.png',
        position: 'video editor & motion graphics',
        logo: 2
    },
    {
        id: 5,
        name: 'nawar',
        img: '/assets/teams/ms.png',
        img2: '/assets/teams/nawar-2.png',
        position: 'photographer',
        logo: 1,
    },
    {
        id: 6,
        name: 'ziena',
        img: '/assets/teams/zena.png',
        img2: '/assets/teams/ziena-2.png',
        position: 'bilingual copywriter',
        logo: 2
    },
    {
        id: 7,
        name: 'ahmad',
        img: '/assets/teams/ahmad-masri.png',
        img2: '/assets/teams/ahmadMasri-2.png',
        position: 'founder & ceo',
        logo: 1
    },
    {
        id: 8,
        name: 'ahmad',
        img: '/assets/teams/ahmad-sharef.png',
        img2: '/assets/teams/sharff-2.png',
        position: 'marketing manager',
        logo: 2
    },
    {
        id: 9,
        name: 'obada',
        img: '/assets/teams/obada.png',
        img2: '/assets/teams/obada-2.png',
        position: 'hr & administrative manager',
        logo: 1,
    },
    {
        id: 10,
        name: 'kamal',
        img: '/assets/teams/kamal.png',
        img2: '/assets/teams/kamal-2.png',
        position: 'video editor & motion graphics',
        logo: 2
    },
    {
        id: 11,
        name: 'nawar',
        img: '/assets/teams/ms.png',
        img2: '/assets/teams/nawar-2.png',
        position: 'photographer',
        logo: 1,
    },
    {
        id: 12,
        name: 'ziena',
        img: '/assets/teams/zena.png',
        img2: '/assets/teams/ziena-2.png',
        position: 'bilingual copywriter',
        logo: 2
    },
]

export const CardTeamsTwo = [
    {
        id: 1,
        name: 'batol',
        img: '/assets/teams/batoul.png',
        img2: '/assets/teams/batol-2.png',
        position: 'senior graphic designer',
        logo: 2,
    },
    {
        id: 2,
        name: 'Hammam',
        img: '/assets/teams/hmam.png',
        img2: '/assets/teams/hummam-2.png',
        position: 'content creator',
        logo: 1,
    },
    {
        id: 3,
        name: 'ahmad',
        img: '/assets/teams/trad.png',
        img2: '/assets/teams/trad-2.png',
        position: 'full stack',
        logo: 2
    },
    {
        id: 4,
        name: 'muhamad',
        img: '/assets/teams/muhamad.png',
        img2: '/assets/teams/muhamad-2.png',
        position: 'senior graphic designer',
        logo: 2
    },
    {
        id: 5,
        name: 'hasna',
        img: '/assets/teams/hasna.png',
        img2: '/assets/teams/hasna-2.png',
        position: 'account manager',
        logo: 2
    },
    {
        id: 6,
        name: 'batol',
        img: '/assets/teams/batoul.png',
        img2: '/assets/teams/batol-2.png',
        position: 'senior graphic designer',
        logo: 2,
    },
    {
        id: 7,
        name: 'Hammam',
        img: '/assets/teams/hmam.png',
        img2: '/assets/teams/hummam-2.png',
        position: 'content creator',
        logo: 1,
    },
    {
        id: 8,
        name: 'ahmad',
        img: '/assets/teams/trad.png',
        img2: '/assets/teams/trad-2.png',
        position: 'full stack',
        logo: 2
    },
    {
        id: 9,
        name: 'muhamad',
        img: '/assets/teams/muhamad.png',
        img2: '/assets/teams/muhamad-2.png',
        position: 'senior graphic designer',
        logo: 2
    },
    {
        id: 10,
        name: 'hasna',
        img: '/assets/teams/hasna.png',
        img2: '/assets/teams/hasna-2.png',
        position: 'account manager',
        logo: 2
    },
]

export const achievementsData = [
    {
        id : 1,
        achievementNum : '70,000',
        achievementNam : 'Leads'
    },
    {
        id : 2,
        achievementNum : '450,000',
        achievementNam : 'USD Ads'
    },
    {
        id : 3,
        achievementNum : '42,000,000',
        achievementNam : 'impression.'
    },
]

export const servicePageData = [
    {
        id : 1,
        name : "brand identity",
        desc : "Create a unique brand identity that connects with your audience. Our complete branding solutions include logo design, brand strategy, and consistent visual elements.",
        itemserv: "Old Brand evaluation Logo design Brand personality Brand book  Brand guidelines  Brand elements  Brand typography  Brand fonts Brand identity Brand tone Brand Stationery Brand monitoring",
        image: '/icon3d/Puzzle.png',
    },
    {
        id : 2,
        name : "graphic design",
        desc : "Grab people's attention with eye-catching visuals. Our graphic design services turn your ideas into attractive images, logos, and branding materials.",
        itemserv: "Monthly designing calendar Attractive marketing materials Custom social media graphics Multilingual graphic content Collaborative process with clients Out of the box designs",
        image: '/icon3d/Customer-Feedback.png', 
    },
    {
        id : 3,
        name : "web development",
        desc : "Build a fantastic online image with our skilled website design and development services. We design and create websites that are easy to use and look great, specifically customized for your brand.",
        itemserv: "Front-end using React JS & Next JS , Back-end Nust JS & Laravel. Building web Application using mern stack technology. Building website Wordpress & Webflow. Customized Web Design & Development. User-friendly Interface & Responsive Design. Content Integration & Management System. Ongoing Support &              Maintenance.",
        image: '/icon3d/Developing.png',
    },
    {
        id : 4,
        name : "social media management",
        desc : "Boost your online visibility with our social media management know-how. We craft compelling content, engage with your audience, and fine-tune your social media platforms for optimal results.",
        itemserv: "Analysis for current channels Strategic Content calendar  High engaging content creation and management Audience interactions and growth Monthly reports and monitoring Bilingual content writing (English & Arabic)",
        image: '/icon3d/Strategy.png',
        
    },
    {
        id : 5,
        name : "seo / sem",
        desc : "Increase your online visibility with our SEO/SEM services. We improve your website for search engines and implement effective search engine marketing strategies to attract traffic and improve rankings.",
        itemserv: "Develop a comprehensive SEO strategy Conduct thorough keyword research Implement strategic plans Execute PPC advertising campaigns Implement CRO techniques Measure SEO & SEM",
        image: '/icon3d/Data-Analitic.png',
    },
    {
        id : 6,
        name : "ads management",
        desc : "Expand your audience with focused advertising campaigns. Our ad management services make sure your message reaches the right people through careful planning and execution.",
        itemserv: "Effective Targeting to reach potential clients. In-depth analysis of the target audience. Advertising campaigns across multiple channels. Refining strategies based on real-time data and analytics. Efficiently manage advertising budgets to maximize ROI, Remarketing and retargeting campaigns. Monitor ad performance regularly. Develop advertising content in both English and Arabic.",
        image: '/icon3d/Maintenance.png',
    },
    // {
    //     id : 7,
    //     name : "mobile app development",
    //     desc : "Stay on top in the digital era with our advanced mobile app solutions. We take your ideas from design to development, making sure users have a smooth experience.",
    //     itemserv: "",
    //     image: '/icon3d/Ecomerse.png',
    // },
    {
        id : 7,
        name : "telesales team",
        desc : "Improve your sales with our telesales team. We reach out to potential clients, share your value, and boost conversions through effective communication.",
        itemserv: "Qualified trained team dedicated to your business Monitor the operation through the system Prospecting new hot deals Multilingual sales team: English, Arabic & French Automated weekly reports",
        image: '/icon3d/Finance.png',
    },
    {
        id : 8,
        name : "photography / videography",
        desc : "Share your story through visuals. Our experienced team captures moments and produces engaging videos that connect with your audience, enhancing your brand's story.",
        itemserv: "Provide professional photography sessions for the products Multiple options for each service/product  Produce short and engaging promotional videos Motion graphics, 3D motion Professional videos editing" ,
        image: '/icon3d/Digital-Marketing.png',
    },

]