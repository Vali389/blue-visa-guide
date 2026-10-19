// Web3Forms Integration Helper
export const WEB3FORMS_ACCESS_KEY = "2aa5624c-1e17-476d-a74e-80895702ee43";

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function submitToWeb3Forms(
  fields: Record<string, string | number | boolean | null | undefined>
): Promise<Web3FormsResponse> {
  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "VisaEnter Website Inquiry");

    Object.entries(fields).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        formData.append(key, String(val));
      }
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Web3Forms submission failed:", error);
    return {
      success: false,
      message: error?.message || "Failed to submit form. Please try again.",
    };
  }
}
