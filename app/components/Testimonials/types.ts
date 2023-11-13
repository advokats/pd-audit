import { StaticImageData } from "next/image";

export interface TestimonialData {
  name: string;
  image: StaticImageData;
  description?: string;
}
