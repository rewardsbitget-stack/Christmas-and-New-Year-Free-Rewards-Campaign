import emailjs from "@emailjs/nodejs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullname, email, phone, country } = req.body;

  try {
    await emailjs.send(
      "service_zkkzfht", // your SERVICE ID
      "template_srb63mf", // your TEMPLATE ID
      {
        fullname,
        email,
        phone,
        country,
      },
      {
        publicKey: "VMTJdNDyn5LVZux67",
        privateKey: "He_Em83hf7sCWo2yrEgjB",
      }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EmailJS error:", error);
    res.status(500).json({ success: false, error });
  }
}
