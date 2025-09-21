import {v2 as cloudnary} from "cloudinary"
const connectcloudnary = ()=>{
    cloudnary.config({
        cloud_name: "dcavwldby",
        api_key: "114882897675839",
        api_secret: "tkLVH2zcdwaFsMxXR8NsTirnxos"
    })
    console.log("cloudnary connected successfully");
    
}

export default connectcloudnary;
