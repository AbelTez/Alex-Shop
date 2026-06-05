import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalButton({ amount, onSuccess, onError }) {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        PayPal is not configured. Set VITE_PAYPAL_CLIENT_ID in your frontend
        environment and restart the dev server.
      </div>
    );
  }

  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": clientId }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                { amount: { value: Number(amount).toFixed(2) } },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess);
          }}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
}
