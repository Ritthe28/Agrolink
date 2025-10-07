import logo from "./logo.png"
import googlePlay from "./googlePlay.svg"
import appStore from "./appStore.svg"
import Solution from "./subset_image.png"
import SolutionMov from "./solution.mov"
import Agrologo from "./agrolink.png"
import Services from "./servicesagro.png"
import sgsLogo from "./SGS.png";
import oreyLogo from "./orey_xorey.png";
import ccaLogo from "./CCA Law Firm_Logo.png";
import mongopay from "./mangopay.png";
import Pricing from "./grain_bag.png";
import transparencyIcon from "./transparency2.png";
import fairtradeIcon from "./fairtrade.png";
import userFriendlyIcon from "./userfriends.png";
import foodTraceabilityIcon from "./food_traceability.png";

const featureIcons = {
  transparency: transparencyIcon, 
  fairtrade: fairtradeIcon ,
  userFriendly: userFriendlyIcon,
  foodTraceability: foodTraceabilityIcon,
};

export const assets ={
    logo,
    googlePlay,
    appStore,
    Solution,
    SolutionMov,
    Agrologo,
    Services,
    Pricing


    
}

export const partnersData = [
  {
    logo: sgsLogo,
    name: 'SGS',
    category: 'QUALITY CERTIFICATION',
    type: 'Premium Partner',
  },
  {
    logo: oreyLogo,
    name: 'Orey Shipping',
    category: 'LOGISTICS & TRANSPORTATION',
    type: 'Premium Partner',
  },
  {
    logo: ccaLogo,
    name: 'CCA Law Firm',
    category: 'LEGAL SERVICES',
    type: 'Premium Partner',
  },
  {
    logo: mongopay,
    name: 'Mangopay',
    category: 'PAYMENTS',
    type: 'Premium Partner',
  },
];


export const featuresData = [
  {
    icon: featureIcons.transparency,
    title: 'TRANSPARENCY',
    description: 'Direct transactions between farmers and industry/retail',
  },
  {
    icon: featureIcons.fairtrade,
    title: 'FAIRTRADE',
    description: 'Redistribution of value in food supply chain',
  },
  {
    icon: featureIcons.userFriendly,
    title: 'USER FRIENDLY',
    description: 'Reduce costs to buyers without losing reliability',
  },
  {
    icon: featureIcons.foodTraceability,
    title: 'FOOD TRACEABILITY',
    description: 'Crop reliability through supply chain traceability (coming soon)',
  },
];
