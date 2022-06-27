import { BoredResponse } from "./fetchBoredApi";

interface MapBorderObject
  extends Omit<BoredResponse, "accessibility" | "price"> {
  accessibility: string;
  price: string;
}

export type Accessibility = "low" | "medium" | "high";
export type Price = "free" | "low" | "high";

const getAcessibility = (accessibility: number): Accessibility => {
  if (accessibility <= 0.25) {
    return "low";
  }
  if (accessibility > 0.25 && accessibility <= 0.75) {
    return "medium";
  }
  if (accessibility > 0.75) {
    return "high";
  }
};

const getPrice = (price: number): Price => {
  if (price === 0) {
    return "free";
  }
  if (price > 0 && price <= 0.5) {
    return "low";
  }
  if (price > 0.5) {
    return "high";
  }
};

const mapBoredApiResponse = (response: BoredResponse): MapBorderObject => {
  const accessibilityMapped: MapBorderObject = {
    ...response,
    accessibility: getAcessibility(response.accessibility),
    price: getPrice(response.price),
  };

  return accessibilityMapped;
};

export { mapBoredApiResponse };
