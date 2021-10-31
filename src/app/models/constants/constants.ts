export const MENTOR_MATCH_API: string = "https://mentors-match.herokuapp.com/api";
// mentee endpoints
export const MENTEE_ENDPOINT: string = MENTOR_MATCH_API.concat("/mentee");
export const MENTEE_ENDPOINT_ADD: string = MENTEE_ENDPOINT.concat("/add");
export const MENTEE_ENDPOINT_ALL: string = MENTEE_ENDPOINT.concat("/all");

// mentor endpoints
export const MENTOR_ENDPOINT: string = MENTOR_MATCH_API.concat("/mentor");
export const MENTOR_ENDPOINT_ADD: string = MENTOR_ENDPOINT.concat("/add");
export const MENTOR_ENDPOINT_ALL: string = MENTOR_ENDPOINT.concat("/all");

// match endpoints
export const MATCH_ENDPOINT: string = MENTOR_MATCH_API.concat("/match");
export const MATCH_ALL_MENTEES_BY_MENTOR_ENDPOINT: string = MATCH_ENDPOINT.concat()

export const CMR_CODE: string = "+237";
export const WA_PREFIX: string = "https://wa.me/";

export function getMatchAllMenteesByMentorEndpointGen(mentorId: number) {
  return MATCH_ENDPOINT.concat(mentorId.toString()).concat("mentees")

}


