export interface ContactLeadInput {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
