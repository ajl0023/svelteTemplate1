var cloudinary = require("cloudinary");
const arr = [];

cloudinary.config({
  cloud_name: "dt4xntymn",
  secure: true,
  api_key: "879229719542176", // add your api_key
  api_secret: "6KNCQb_nzfWSp_1jzcrVHNNpMHM", // add your api_secret
});
cloudinary.v2.search
  .expression(
    "folder:rendersHighRes/*" // add your folder
  )
  .sort_by("public_id", "asc")
  .max_results(50)
  .execute()
  .then((result) => {
    result.resources.forEach((item) => {
      arr.push(item.url);
    });
    console.log(arr)
    
  });
