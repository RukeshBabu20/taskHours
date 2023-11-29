import { NextFunction, Response, Request } from "express";
import { employeeType } from "../types/employeeTypes";
import * as employeeServices from "../services/employeeServices";
import { REPLCommand } from "repl";

export const createSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputData = req.body;
  try {
    const timeSheets = await employeeServices.createServices(inputData);
    res.status(200).json(timeSheets);
  } catch (error) {
    res.status(404).json({ message: "Failed to craete timesheet" });
  }
};

export const showSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { employeeId, weeks } = req.body;
  try {
    const timeSheets = await employeeServices.showServices(employeeId, weeks);
    if (timeSheets) {
      res.status(200).json(timeSheets);
    } else {
      res.status(400).json({ message: "No Data Found" });
    }
  } catch (error) {
    res.status(404).json({ message: "Failed to show data" });
  }
};

export const updateSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { employeeId, weeks } = req.body;
  const updateBody = req.body;
  try {
    const timeSheets = await employeeServices.updateServices(
      employeeId,
      weeks,
      updateBody
    );
    if (timeSheets) {
      res.status(200).json(timeSheets);
    } else {
      res.status(400).json({ message: "No Data Found" });
    }
  } catch (error) {
    res.status(404).json({ message: "Failed to update timesheet" });
  }
};

export const deleteSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { employeeId, weeks } = req.body;
  try {
    const timeSheets = await employeeServices.deleteServices(employeeId, weeks);
    if (timeSheets) {
      res.status(200).json(timeSheets);
    } else {
      res.status(400).json({ message: "No Data Found" });
    }
  } catch (error) {
    res.status(404).json({ message: "Failed to delete timesheet" });
  }
};
