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
import menu from "./menu.png"
import Pricing from "./grain_bag.png";
import transparencyIcon from "./transparency2.png";
import fairtradeIcon from "./fairtrade.png";
import userFriendlyIcon from "./userfriends.png";
import foodTraceabilityIcon from "./food_traceability.png";
import herobg from "./herosection.jpeg"
import grainbg from "./grainimage.png"
import grain from "./grain.png"
import nuts from "./nuts.png"
import coffee from "./coffee.png"
import carbon from"./Carbonfootprint.png"
import oil from "./oils.png"
import rice from "./rice.png"
import corn from "./corn.png"
import barkle from "./barkley.png"
import almond from "./almond.png"
import walnut from "./wallnut.png"
import pista from "./pista.png"
import hazenut from  "./hazelnut.png"
import pinenut from "./pinenut.png"
import cashew from "./cashew.png"
import refined from "./refined.png"
import upload_area from "./upload_Area.png"

const featureIcons = {
  transparency: transparencyIcon, 
  fairtrade: fairtradeIcon ,
  userFriendly: userFriendlyIcon,
  foodTraceability: foodTraceabilityIcon,
};

export const assets ={
  menu,

    logo,
    googlePlay,
    appStore,
    Solution,
    SolutionMov,
    Agrologo,
    Services,
    Pricing

,
grainbg
,
upload_area
    
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


export const Market_Prodects = [
{
  name:"Grains",
  image :grain,
 },
 {name:"Nuts",
  image :nuts

},
{
  name:"Coffee",
  image :coffee
},
{
      name:"Carbon Credits",
  image :carbon

}, 
{

      name:"Olive oil and other oil",
  image :oil
}
]

export const market_products_subproduct =[
{
  name:'Grains' ,
  image :[
{
  image :rice,
  name :"rice"
}, {
  image :barkle,
  name :"Barkley"
}, {
  image :grain,
  name :"grain"
},{
  image:corn,
  name :"corn"
}
  ]

},
{
  name :"Nuts",
  image :[
  
    {
      image :pinenut,
      name :"pinut"
    },{
      image:hazenut,
      name :"hazlenut"
    },{
      image :cashew,
      name :"cashew"
    }, {
      image :almond,
      name :"almond"
    }, {
      image :pista,
      name :"pista"
    },{
      image :walnut,
      name :"walnut"
    }

  
    
    
  ]
},{
  name :"Coffee",
  image :[
{
  image :coffee,
  name :"coffe"
}
  ]
},
{
  name:"Olive oil and other oil",
  image :[
  
    {
      image :oil,
      name :"Regular Oil"
    }, {
      image :refined,
      name :"Refined Oil"
    }
  ]
}
,{
  name :"Carbon Credits"
  , image :[
 ]
}


]