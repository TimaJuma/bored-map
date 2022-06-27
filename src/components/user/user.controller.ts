import { addUser } from "@core/database";
import { Request, Response } from "express";
import httpStatus from "http-status";

const createUser = (req: Request, res: Response) => {
  const { name, accessibility, price } = req.body;
  const id = Math.random().toString();
  const user = {
    id,
    name,
    accessibility: accessibility.toLowerCase(),
    price: price.toLowerCase(),
  };

  addUser(user);

  res.status(httpStatus.CREATED).send({ message: "Created" });
};

const readUser = (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({ message: "Read" });
};

export { createUser, readUser };
