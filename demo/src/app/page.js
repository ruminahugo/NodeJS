// app/customer/page.js
//import React from "react";

// Fetch customer data from API
async function getCustomerData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`);
  if (!res.ok) {
    throw new Error("Failed to fetch customer data");
  }
  return res.json();
}

export default async function CustomerPage() {
  const customerData = await getCustomerData();

  return (
    <div>
      <h1>Customer Information</h1>
      <p><strong>Name:</strong> {customerData.name}</p>
      <p><strong>Email:</strong> {customerData.email}</p>

      <h2>Membership</h2>
      <p><strong>Level:</strong> {customerData.membership.level}</p>
      <p><strong>Start Date:</strong> {customerData.membership.startDate}</p>
      <ul>
        {customerData.membership.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <h2>Orders</h2>
      {customerData.orders.map((order) => (
        <div key={order.orderId}>
          <h3>Order ID: {order.orderId}</h3>
          <p><strong>Date:</strong> {order.orderDate}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
          <h4>Items</h4>
          <ul>
            {order.items.map((item) => (
              <li key={item.productId}>
                {item.productName} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Preferences</h2>
      <h4>Notifications</h4>
      <p><strong>Email:</strong> {customerData.preferences.notifications.email ? "Enabled" : "Disabled"}</p>
      <p><strong>SMS:</strong> {customerData.preferences.notifications.sms ? "Enabled" : "Disabled"}</p>
      <p><strong>Push:</strong> {customerData.preferences.notifications.push ? "Enabled" : "Disabled"}</p>

      <h4>Payment Methods</h4>
      <ul>
        {customerData.preferences.paymentMethods.map((method, index) => (
          <li key={index}>
            <p><strong>Type:</strong> {method.type}</p>
            {method.type === "Credit Card" ? (
              <p><strong>Card Number:</strong> {method.cardNumber}</p>
            ) : (
              <p><strong>Email:</strong> {method.email}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
