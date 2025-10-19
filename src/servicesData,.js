
import { Globe2, BookOpen, GraduationCap, Briefcase, Users, Car, Plane, Utensils, Heart, Wheat, Factory, Fish, Wrench } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Student Visa for Japan",
    desc: "We provide complete support for obtaining a Student Visa for Japan, which allows international students to pursue higher education and vocational training in Japan.",
    icon: GraduationCap,
    details: {
      overview: "We provide complete support for obtaining a Student Visa for Japan, which allows international students to pursue higher education and vocational training in Japan.",
      eligibility: [
        "Enrollment in a Japanese Educational Institution",
        "Sufficient Financial Resources", 
        "Health and Character Requirements",
        "Proof of Academic Ability"
      ]
    }
  },
  {
    id: 2,
    title: "Technical Intern Training Program (TITP)",
    desc: "We provide complete preparation for the TITP, a Japanese government-approved program designed to help foreign workers gain practical skills in various industries in Japan.",
    icon: BookOpen,
    details: {
      overview: "We provide complete preparation for the TITP, a Japanese government-approved program designed to help foreign workers gain practical skills in various industries in Japan.",
      eligibleSectors: [
        { name: "Construction", japanese: "建設", icon: Wrench },
        { name: "Manufacturing", japanese: "製造業", icon: Factory },
        { name: "Agriculture", japanese: "農業", icon: Wheat },
        { name: "Food Processing", japanese: "食品加工", icon: Utensils },
        { name: "Textiles", japanese: "繊維", icon: Briefcase },
        { name: "Automobile", japanese: "自動車", icon: Car },
        { name: "Fishing", japanese: "漁業", icon: Fish },
        { name: "Caregiving", japanese: "介護", icon: Heart }
      ]
    }
  },
  {
    id: 3,
    title: "Specified Skilled Worker Visa (SSW)",
    desc: "We provide complete preparation for the SSW visa, a Japanese government-approved program that allows skilled Nepali youth to work in 6 vital sectors within Japan.",
    icon: Globe2,
    details: {
      overview: "We provide complete preparation for the SSW visa, a Japanese government-approved program that allows skilled Nepali youth to work in 6 vital sectors within Japan.",
      eligibleSectors: [
        { name: "Food Service", japanese: "外食業", icon: Utensils },
        { name: "Nursing Care Giver", japanese: "介護", icon: Heart },
        { name: "Crop Farming", japanese: "耕種農業", icon: Wheat },
        { name: "Livestock Farming", japanese: "畜産農業", icon: Users },
        { name: "Airports Ground Handling", japanese: "空港グラウンドハンドリング", icon: Plane },
        { name: "Driving", japanese: "自動車運送業", icon: Car }
      ]
    }
  }
];