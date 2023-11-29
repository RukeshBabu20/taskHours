import mongoose, { Schema } from "mongoose";
import { employeeType } from "../types/employeeTypes";

const employeeSchema: Schema<employeeType> = new mongoose.Schema({
  employeeId: {
    type: Number,
  },
  weeks: {
    type: String,
  },
  week: [
    {
      date: {
        type: String,
      },
      tasks: {
        type: String,
      },
      hours: {
        type: Number,
      },
    },
  ],
  totalHours: {
    type: Number,
  },
});

const employeeModel = mongoose.model<employeeType>(
  "timesheets",
  employeeSchema
);
export default employeeModel;
