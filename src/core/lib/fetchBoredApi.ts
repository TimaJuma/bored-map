import axios from "axios";
import logger from "@core/utils/logger";
import { getUserPreferences } from "@core/database";
import { Accessibility, Price } from "./mapBorderApiResponse";

export interface BoredResponse {
  actvity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

const url = "http://www.boredapi.com/api/activity/";

const getBoredApiURL = (price: string, accessibility: string): string => {
  return `http://www.boredapi.com/api/activity?price=${price}&accessibility=${accessibility}`;
};

const randomFloatFromInterval = (min: number, max: number): string => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

const mapPrice = (price: Price): string => {
  if (price === "free") {
    return "0";
  }

  if (price === "low") {
    return randomFloatFromInterval(0, 0.5);
  }

  if (price === "high") {
    return randomFloatFromInterval(0.5, 1);
  }
};

const mapAccessibility = (accessibility: Accessibility): string => {
  if (accessibility === "low") {
    return randomFloatFromInterval(0, 0.25);
  }
  if (accessibility === "medium") {
    return randomFloatFromInterval(0.25, 0.75);
  }
  if (accessibility === "high") {
    return randomFloatFromInterval(0.75, 1);
  }
};

const getBoredApiResponse = async (): Promise<BoredResponse> => {
  const { accessibility, price } = getUserPreferences();
  const mappedPrice = mapPrice(price);
  const mappedAccessibility = mapAccessibility(accessibility);

  const url = getBoredApiURL(mappedPrice, mappedAccessibility);
  console.log({ url, mapAccessibility, mapPrice });

  try {
    const response = await axios.get<BoredResponse>(url);

    return response.data;
  } catch (error) {
    logger.error(`Error fetching bored api:`, error);
    throw error;
  }
};

export { getBoredApiResponse };
