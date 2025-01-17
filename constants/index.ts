import facebook from "../public/assets/social/Facebook.png";
import github from "../public/assets/social/GitHub.png";
import instagram from "../public/assets/social/Instagram.png";
import linkedin from "../public/assets/social/LinkedIn.png";
import youtube from "../public/assets/social/YouTube.png";

// coffeeshop images
import coffee_signin_screen from "../public/assets/coffeeShop_images/signin_screen.png";
import coffee_signup_screen from "../public/assets/coffeeShop_images/signin_screen.png";
import coffee_home_screen from "../public/assets/coffeeShop_images/home_screen.png";
import coffee_order_screen from "../public/assets/coffeeShop_images/order_screen.png";
import coffee_delivery_screen from "../public/assets/coffeeShop_images/delivery_screen.png";
import coffee_profile_screen from "../public/assets/coffeeShop_images/profile_screen.png";
import coffee_details_screen from "../public/assets/coffeeShop_images/details_screen.png";

// hometrack images
import hometrack_signin_screen from "../public/assets/hometrack_images/signin_screen.png";
import hometrack_home_screen from "../public/assets/hometrack_images/home_screen.png";
import hometrack_profile_screen from "../public/assets/hometrack_images/profile_screen.png";
import hometrack_explore_screen from "../public/assets/hometrack_images/explore_screen.png";
import hometrack_favorite_screen from "../public/assets/hometrack_images/favorite_screen.png";
import hometrack_details_screen_1 from "../public/assets/hometrack_images/details_1_screen.png";
import hometrack_details_screen_2 from "../public/assets/hometrack_images/details_2_screen.png";

// Ryde images
import ryde_onboarding_screen_1 from "../public/assets/Ryde_images/onboarding_screen_1.png";
import ryde_onboarding_screen_2 from "../public/assets/Ryde_images/onboarding_screen_2.png";
import ryde_onboarding_screen_3 from "../public/assets/Ryde_images/onboarding_screen_3.png";
import ryde_signin_screen from "../public/assets/Ryde_images/signin_screen.png";
import ryde_signup_screen from "../public/assets/Ryde_images/signup_screen.png";
import ryde_home_screen from "../public/assets/Ryde_images/home_screen.png";
import ryde_select_destination_screen from "../public/assets/Ryde_images/select_destination.png";
import ryde_select_driver_screen from "../public/assets/Ryde_images/choose_driver_screen.png";
import ryde_book_ride_screen from "../public/assets/Ryde_images/book_ride_screen.png";
import ryde_payment_screen from "../public/assets/Ryde_images/payment_screen.png";

export const icons = {};

export const socialLinks = [
  {
    name: "github",
    icon: github,
    link: "https://github.com/Tony-kan",
  },
  {
    name: "LinkenIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/tony-kanyamuka-0007b2238/",
  },
  {
    name: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/",
  },

  {
    name: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/tony_kan___/",
  },

  {
    name: "Youtube",
    icon: youtube,
    link: "",
  },
];

export const images = {
  coffee_images: {
    coffee_signin_screen,
    coffee_signup_screen,
    coffee_home_screen,
    coffee_order_screen,
    coffee_delivery_screen,
    coffee_profile_screen,
    coffee_details_screen,
    list: [
      coffee_signin_screen,
      coffee_signup_screen,
      coffee_home_screen,
      coffee_order_screen,
      coffee_delivery_screen,
      coffee_profile_screen,
      coffee_details_screen,
    ],
  },
  home_track_image: {
    hometrack_signin_screen,
    hometrack_home_screen,
    hometrack_profile_screen,
    hometrack_explore_screen,
    hometrack_favorite_screen,
    hometrack_details_screen_1,
    hometrack_details_screen_2,
    list: [
      hometrack_signin_screen,
      hometrack_home_screen,
      hometrack_profile_screen,
      hometrack_explore_screen,
      hometrack_favorite_screen,
      hometrack_details_screen_1,
      hometrack_details_screen_2,
    ],
  },
  ryde_images: {
    ryde_onboarding_screen_1,
    ryde_onboarding_screen_2,
    ryde_onboarding_screen_3,
    ryde_signin_screen,
    ryde_signup_screen,
    ryde_home_screen,
    ryde_select_destination_screen,
    ryde_select_driver_screen,
    ryde_book_ride_screen,
    ryde_payment_screen,
    list: [
      ryde_onboarding_screen_1,
      ryde_onboarding_screen_2,
      ryde_onboarding_screen_3,
      ryde_signin_screen,
      ryde_signup_screen,
      ryde_home_screen,
      ryde_select_destination_screen,
      ryde_select_driver_screen,
      ryde_book_ride_screen,
      ryde_payment_screen,
    ],
  },
};

// export const coffeeShop_images = {
//   coffee_signin_screen,
//   coffee_signup_screen,
//   coffee_home_screen,
//   coffee_order_screen,
//   coffee_delivery_screen,
//   coffee_profile_screen,
//   coffee_details_screen,
//   list: [
//     coffee_signin_screen,
//     coffee_signup_screen,
//     coffee_home_screen,
//     coffee_order_screen,
//     coffee_delivery_screen,
//     coffee_profile_screen,
//     coffee_details_screen,
//   ],
// };

// export const hometrack_images = {
//   hometrack_signin_screen,
//   hometrack_home_screen,
//   hometrack_profile_screen,
//   hometrack_explore_screen,
//   hometrack_favorite_screen,
//   hometrack_details_screen_1,
//   hometrack_details_screen_2,
//   list: [
//     hometrack_signin_screen,
//     hometrack_home_screen,
//     hometrack_profile_screen,
//     hometrack_explore_screen,
//     hometrack_favorite_screen,
//     hometrack_details_screen_1,
//     hometrack_details_screen_2,
//   ],
// };

// export const ryde_images = {
//   ryde_onboarding_screen_1,
//   ryde_onboarding_screen_2,
//   ryde_onboarding_screen_3,
//   ryde_signin_screen,
//   ryde_signup_screen,
//   ryde_home_screen,
//   ryde_select_destination_screen,
//   ryde_select_driver_screen,
//   ryde_book_ride_screen,
//   ryde_payment_screen,
//   list: [
//     ryde_onboarding_screen_1,
//     ryde_onboarding_screen_2,
//     ryde_onboarding_screen_3,
//     ryde_signin_screen,
//     ryde_signup_screen,
//     ryde_home_screen,
//     ryde_select_destination_screen,
//     ryde_select_driver_screen,
//     ryde_book_ride_screen,
//     ryde_payment_screen,
//   ],
// };

export const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
