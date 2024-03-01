import { Router } from "express";

const router = Router();

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-4716582872683236-022912-eb1cac33323130107840ce8ed2e1ff39-211867823",
});


router.post("/mercadopago_payment", async (req, res) => {
  const title = req.body.title;
  const quantity = req.body.quantity;
  let price = Number(req.body.price);
  console.log(price)
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
        success: "http://localhost:5173/",
        failure: "http://localhost:5173/unasinlaiz",
        pending: "hhttp://localhost:5173/"
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
