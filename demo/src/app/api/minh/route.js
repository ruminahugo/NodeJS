// app/api/customer/route.js
export async function GET() {
  const customerData = {
    customerId: "12345",
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true,
    membership: {
      level: "Gold",
      startDate: "2022-01-15",
      benefits: [
        "Free shipping",
        "Priority support",
        "Discounts on products"
      ]
    },
    orders: [
      {
        orderId: "A1001",
        orderDate: "2023-10-01",
        totalAmount: 250.75,
        status: "Shipped",
        items: [
          {
            productId: "P001",
            productName: "Wireless Headphones",
            quantity: 1,
            price: 150.50
          },
          {
            productId: "P002",
            productName: "Phone Case",
            quantity: 2,
            price: 25.12
          }
        ]
      },
      {
        orderId: "A1002",
        orderDate: "2023-11-05",
        totalAmount: 99.99,
        status: "Pending",
        items: [
          {
            productId: "P003",
            productName: "Smart Watch",
            quantity: 1,
            price: 99.99
          }
        ]
      }
    ],
    preferences: {
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      paymentMethods: [
        {
          type: "Credit Card",
          cardNumber: "**** **** **** 1234",
          expiryDate: "12/25"
        },
        {
          type: "PayPal",
          email: "paypal_account@example.com"
        }
      ]
    }
  };

  return new Response(JSON.stringify(customerData), { status: 200 });
}
