import employeeModel from "../models/employeeModel";
import { employeeType } from "../types/employeeTypes";

export const createServices = async (inputData: employeeType) => {
  return await employeeModel.create(inputData);
};

export const showServices = async (
  employeeId: employeeType,
  weeks: employeeType
) => {
  return await employeeModel.find({ employeeId, weeks });
};

export const updateServices = async (
  employeeId: employeeType,
  weeks: employeeType,
  updateBody: employeeType
) => {
  return await employeeModel.findOneAndUpdate(
    { employeeId, weeks },
    updateBody
  );
};

export const deleteServices = async (
  employeeId: employeeType,
  weeks: employeeType
) => {
  return await employeeModel.deleteOne({ employeeId, weeks });
};
