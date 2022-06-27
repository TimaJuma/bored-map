import { getBoredApiResponse } from "@core/lib/fetchBoredApi";
import { mapBoredApiResponse } from "@core/lib/mapBorderApiResponse";
import { Request, Response } from "express";
import httpStatus from "http-status";

const activityController = async (req: Request, res: Response) => {
  const activity = await getBoredApiResponse();

  const response = mapBoredApiResponse(activity);

  res.status(httpStatus.OK).json(response);
  try {
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      error,
      errorMessage: "Error fetching bored api",
    });
  }
};

export default activityController;
