"use server";

import { ContactLeadInput, ActionResponse } from "@/types/contact";

export async function sendContactLead(
  formData: ContactLeadInput
): Promise<ActionResponse> {
  try {
    if (!formData.name || !formData.email || !formData.phone) {
      return {
        success: false,
        message: "Please fill in all required fields (Name, Email, Phone).",
      };
    }

    console.log("Captured lead:", formData);

    return {
      success: true,
      message: "Lead submitted successfully! Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("Failed to send contact lead:", error);
    return {
      success: false,
      message: "Failed to submit inquiry. Please connect via WhatsApp directly.",
    };
  }
}
