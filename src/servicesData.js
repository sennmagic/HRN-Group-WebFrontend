import {
  Globe2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  Car,
  Plane,
  Utensils,
  Heart,
  Wheat,
  Factory,
  Fish,
  Wrench,
} from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Student Visa for Japan",
    desc: "We provide complete support for obtaining a Student Visa for Japan, which allows international students to pursue higher education and vocational training in Japan.",
    icon: GraduationCap,
    details: {
      overview:
        "We provide complete support for obtaining a Student Visa for Japan, which allows international students to pursue higher education and vocational training in Japan.",
      eligibility: [
        "Enrollment in a Japanese Educational Institution",
        "Sufficient Financial Resources",
        "Health and Character Requirements",
        "Proof of Academic Ability",
      ],

      eligibleSectors: [
        {
          name: "Nursing Care Giver",
          image: "/about-hrn.jpg",
        },
        {
          name: "Food service industry",
          image: "/about-hrn.jpg",
        },
        {
          name: "Agriculture",
          image: "/about-hrn.jpg",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Technical Intern Training Program (TITP)",
    desc: "We provide complete preparation for the TITP, a Japanese government-approved program designed to help foreign workers gain practical skills in various industries in Japan.",
    icon: BookOpen,
    details: {
      overview:
        "We provide complete preparation for the TITP, a Japanese government-approved program designed to help foreign workers gain practical skills in various industries in Japan.",

      eligibleSectors: [
        {
          name: "Construction",
          japanese: "建設",
          icon: Wrench,
          description:
            "Work in building and site-related tasks such as basic construction support, material handling, cleaning, and safety-based operations under Japanese work standards.",
        },
        {
          name: "Manufacturing",
          japanese: "製造業",
          icon: Factory,
          description:
            "Work in factories and production lines. Duties include assembling, machine support, packaging, quality checking, and following strict workplace discipline.",
        },
        {
          name: "Agriculture",
          japanese: "農業",
          icon: Wheat,
          description:
            "Farm-based work like planting, harvesting, sorting, packing vegetables/fruits, greenhouse support, and maintaining farm tools and areas.",
        },
        {
          name: "Food Processing",
          japanese: "食品加工",
          icon: Utensils,
          description:
            "Work in food production and processing units. Tasks include preparing ingredients, packing, labeling, hygiene control, and operating basic machines.",
        },
        {
          name: "Textiles",
          japanese: "繊維",
          icon: Briefcase,
          description:
            "Work in garment/textile factories such as stitching support, fabric cutting, ironing, packaging, inspection, and maintaining production workflow.",
        },
        {
          name: "Automobile",
          japanese: "自動車",
          icon: Car,
          description:
            "Work in automobile-related manufacturing and maintenance support like parts assembly, inspection, cleaning, and assisting with workshop operations.",
        },
        {
          name: "Fishing",
          japanese: "漁業",
          icon: Fish,
          description:
            "Work related to fishery and seafood handling such as sorting, packing, cleaning, basic processing, and support tasks in fishing facilities.",
        },
        {
          name: "Caregiving",
          japanese: "介護",
          icon: Heart,
          description:
            "Support care facilities by assisting elderly people with daily routines, mobility help, meal support, hygiene tasks, and emotional care.",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Specified Skilled Worker Visa (SSW)",
    desc: "We provide complete preparation for the SSW visa, a Japanese government-approved program that allows skilled Nepali youth to work in 6 vital sectors within Japan.",
    icon: Globe2,
    details: {
      overview:
        "We provide complete preparation for the SSW visa, a Japanese government-approved program that allows skilled Nepali youth to work in 6 vital sectors within Japan.",

      eligibleSectors: [
        {
          name: "Food Service",
          japanese: "外食業",
          icon: Utensils,
          description:
            "This sector includes work in restaurants, hotels, and food outlets. Duties involve food preparation, kitchen assistance, serving customers, maintaining cleanliness, and following Japanese food hygiene standards.",
        },
        {
          name: "Nursing Care Giver",
          japanese: "介護",
          icon: Heart,
          description:
            "Caregivers support elderly or disabled individuals in nursing homes and care facilities. Tasks include assisting with daily activities, mobility support, meal assistance, hygiene care, and emotional support.",
        },
        {
          name: "Crop Farming",
          japanese: "耕種農業",
          icon: Wheat,
          description:
            "This sector focuses on crop cultivation activities such as planting, harvesting, sorting, packaging, and basic farm maintenance using modern agricultural techniques in Japan.",
        },
        {
          name: "Livestock Farming",
          japanese: "畜産農業",
          icon: Users,
          description:
            "Livestock farming involves caring for animals such as cattle, pigs, and poultry. Work includes feeding animals, cleaning shelters, health monitoring, and assisting with farm operations.",
        },
        {
          name: "Airports Ground Handling",
          japanese: "空港グラウンドハンドリング",
          icon: Plane,
          description:
            "Ground handling staff assist airport operations including baggage handling, aircraft loading and unloading, cargo support, and ensuring smooth airport ground services.",
        },
        {
          name: "Driving",
          japanese: "自動車運送業",
          icon: Car,
          description:
            "This sector includes professional driving jobs such as delivery services, logistics transportation, and passenger support, depending on licensing and Japanese transport regulations.",
        },
      ],
    },
  },
];
