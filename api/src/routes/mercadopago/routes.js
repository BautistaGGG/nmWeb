import { Router } from "express";

const router = Router();

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-4716582872683236-022912-eb1cac33323130107840ce8ed2e1ff39-211867823",
});

router.get("/", async (req, res) => {
  try {
    res.status(200).send("Servidor funcionando");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/mercadopago_payment", async (req, res) => {
  const title = req.body.title;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  console.log(price);
  try {
    const body = {
      items: [
        {
          title: title,
          quantity: quantity,
          unit_price: price,
          // Moneda en la que se cobra
          currency_id: "ARS",
        },
      ],

      back_urls: {
        success: "https://www.southpost.com.ar/",
        failure: "https://www.southpost.com.ar/Nosotros",
        pending: "https://www.southpost.com.ar/Q&A",
      },

      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
