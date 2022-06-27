import { Accessibility, Price } from "@core/lib/mapBorderApiResponse";

interface UserData {
  id: string;
  name: string;
  accessibility: Accessibility;
  price: Price;
}

const mockDB: UserData[] = [
  {
    id: "1",
    name: "John",
    accessibility: "medium",
    price: "high",
  },
];

const getUserPreferences = (id?: string): UserData | undefined => {
  if (!id) {
    return mockDB[mockDB.length - 1];
  }

  return mockDB.find((user) => user.id === id);
};

const addUser = (user: UserData): void => {
  mockDB.push(user);
};

export { getUserPreferences, addUser };
