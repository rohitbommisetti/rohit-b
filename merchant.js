import requests

url = "https://private-api.fast.co/fast/v1/create"

payload = {
  "type": "ENTITY_TYPE_UNSPECIFIED",
  "app_id": "string",
  "order": {
    "is_cart": True,
    "order": {
      "id": {
        "value": "string"
      },
      "external_id": "string",
      "user_id": "string",
      "order_type": "ORDER_TYPE_UNSPECIFIED",
      "currency_code": "string",
      "status": "ORDER_STATUS_UNSPECIFIED",
      "bill_to": {
        "id": {
          "value": "string"
        },
        "first_name": "string",
        "last_name": "string",
        "middle_name": "string",
        "company": "string",
        "email": "string",
        "phone": "string",
        "address_1": "string",
        "address_2": "string",
        "city_locality": "string",
        "state_province": "string",
        "state_province_code": "string",
        "country": "string",
        "country_code": "string",
        "postal_code": "string"
      },
      "lines": [
        {
          "id": {
            "value": "string"
          },
          "external_id": "string",
          "external_product_id": "string",
          "external_variant_id": "string",
          "external_options": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "customizations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "quantity": 0,
          "quantity_fulfilled": 0,
          "unit_price": "string",
          "discounted_unit_price": "string",
          "line_discount_amount": "string",
    //    "external_order_id": "string",
          "subtotal_amount": "string",
          "tax_amount": "string",
          "total_amount": "string",
          "discounts": [
            {
              "code": "string",
              "description": "string",
              "origin": "DISCOUNT_ORIGIN_UNSPECIFIED",
              "type": "DISCOUNT_TYPE_UNSPECIFIED",
              "applied": True,
              "total_amount": "string"
            }
          ],
          "name": "string",
          "description": "string",
          "image_url": "string",
          "fulfillment_mode": "ITEM_FULFILLMENT_MODEL_UNSPECIFIED"
        }
      ],
      "shipment_plans": [
        {
          "id": {
            "value": "string"
          },
          "external_id": "string",
          "ship_to": {
            "id": {
              "value": "string"
            },
            "first_name": "string",
            "last_name": "string",
            "middle_name": "string",
            "company": "string",
            "email": "string",
            "phone": "string",
            "address_1": "string",
            "address_2": "string",
            "city_locality": "string",
            "state_province": "string",
            "state_province_code": "string",
            "country": "string",
            "country_code": "string",
            "postal_code": "string"
          },
          "lines": [
            {
              "id": {},
              "quantity": 0
            }
          ],
          "selected_option": {
            "id": {
              "value": "string"
            },
            "external_id": "string",
            "name": "string",
            "shipment_type": "SHIPPING_OPTION_TYPE_UNSPECIFIED",
            "cost": "string",
            "tax": "string",
            "total": "string",
            "carrier": "string",
            "service_level": "string"
          },
          "available_options": [
            {
              "id": {},
              "external_id": "string",
              "name": "string",
              "shipment_type": "SHIPPING_OPTION_TYPE_UNSPECIFIED",
              "cost": "string",
              "tax": "string",
              "total": "string",
              "carrier": "string",
              "service_level": "string"
            }
          ],
          "shipments": [
            {
              "carrier": "string",
              "tracking_number": "string",
              "estimated_delivery_date": "string",
              "lines": [
                None
              ]
            }
          ]
        }
      ],
      "coupons": [
        {
          "code": "string",
          "description": "string",
          "origin": "DISCOUNT_ORIGIN_UNSPECIFIED",
          "type": "DISCOUNT_TYPE_UNSPECIFIED",
          "applied": True,
          "total_amount": "string"
        }
      ],
      "total_amount": "string",
      "sub_total": "string",
      "total_discounts": "string",
      "total_tax": "string",
      "total_shipping": "string",
      "refunds": [
        {
          "id": {
            "value": "string"
          },
          "external_id": "string",
          "reason": "string",
          "use_original_method": True,
          "lines": [
            {
              "id": {},
              "quantity": 0
            }
          ],
          "refund_date": "string",
          "amount": "string",
          "tax": "string",
          "shipping": "string"
        }
      ],
      "custom_values": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "user_note": "string",
      "store_note": "string",
      "fast_note": "string"
    }
  },
  "request_id": {
    "value": "string"
  }
}

headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)

data = response.json()
print(data)
Response samples
200default
Content type
application/json

Copy
Expand allCollapse all
{
"type": "ENTITY_TYPE_UNSPECIFIED",
"order": {
"order": {}
},
"request_id": {
"value": "string"
}
}
