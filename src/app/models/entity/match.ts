import {Mentor} from "./mentor";
import {Mentee} from "./mentee";

export interface Match {
  mentor: Mentor;
  mentees: Mentee[];
}
