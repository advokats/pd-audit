import ROUTES from "@/app/constants/routes";
import Facebook from "@/public/assets/svg/_shared/facebook.svg";
import Instagram from "@/public/assets/svg/_shared/instagram.svg";
import LinkedIn from "@/public/assets/svg/_shared/linkedin.svg";
import Telegram from "@/public/assets/svg/_shared/telegram.svg";

const socialMediaLinks = [
  {
    icon: <Telegram width={24} height={24} />,
    url: ROUTES.TELEGRAM,
  },
  {
    icon: <Instagram width={24} height={24} />,
    url: ROUTES.INSTAGRAM,
  },
  {
    icon: <Facebook width={24} height={24} />,
    url: ROUTES.FACEBOOK,
  },
  {
    icon: <LinkedIn width={24} height={24} />,
    url: ROUTES.LINKEDIN,
  },
];
export default socialMediaLinks;
