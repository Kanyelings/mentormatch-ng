export interface MentorRequest {
  first_name: string;
  second_name: string;
  email: string;
  gender: string;
  phone_number: string;
  wa_number: string;
  department: string;
  level: string;
}

export interface MenteeRequest extends MentorRequest {
  previous_school: string;
}
