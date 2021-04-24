import axios from "axios";
import { BASE_URI } from "./base";

/**
 * Add the given user's info to the waitlist
 */
export const addToWaitlist = async (requestPayload: {
  email: string;
  job: string;
  reason: string;
}): Promise<boolean> => {
  try {
    const res = await axios.post(`${BASE_URI}/waitlist`, requestPayload);

    return res.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};
