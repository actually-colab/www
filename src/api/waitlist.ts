import axios from "axios";
import { WaitlistEmailStorage } from "../utils/storage";
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

    const success = res.status === 200;

    if (success) {
      WaitlistEmailStorage.add(requestPayload.email.toLowerCase());
    }

    return success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
