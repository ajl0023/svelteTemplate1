<script>
  import { galleryImg } from "../../stores";
  let index;
  const images = [
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880377/galleryHighRes/2021.05.29_roof_2_cm4ouk.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880380/galleryHighRes/Amit_and_Russel_asulsg.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880379/galleryHighRes/Bike_d1id7e.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880380/galleryHighRes/Framing_hqxw7y.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880377/galleryHighRes/Humming_Bird_vwjffp.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880377/galleryHighRes/circle_window_with_pendant_light_mbvjwj.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880378/galleryHighRes/dining_room_discussion_wxmdwj.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880379/galleryHighRes/electrical_2_xv2vdj.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880378/galleryHighRes/electrical_discussion_qpavea.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880379/galleryHighRes/framing_discussion_tmw90t.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880377/galleryHighRes/kitchen_discussion_2_mzb1yv.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880378/galleryHighRes/kitchen_discussion_3_jniqgh.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630880378/galleryHighRes/kitchen_discussion_ipeyz4.jpg",
  ];

  galleryImg.subscribe((val) => {
    index = val;
  });
</script>

<div class="page">
  <div class="image-container">
    <img src={images[index]} alt="" />
  </div>
</div>

<style lang="scss">
  img {
    object-fit: cover;
    width: 100%;
  }
</style>
