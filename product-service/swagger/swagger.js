// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "products service",
    "version": "1"
  },
  "paths": {
    "/products": {
      "get": {
        "summary": "getProductsList",
        "description": "",
        "operationId": "getProductsList.get./products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "List of products",
            "schema": {
              "$ref": "#/definitions/ProductsList"
            }
          }
        }
      }
    },
    "/products/{id}": {
      "get": {
        "summary": "getProductById",
        "description": "",
        "operationId": "getProductById.get./products/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Product",
            "schema": {
              "$ref": "#/definitions/Product"
            }
          },
          "404": {
            "description": "Not found",
            "schema": {
              "$ref": "#/definitions/string"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Product": {
      "properties": {
        "id": {
          "title": "Product.id",
          "type": "string"
        },
        "title": {
          "title": "Product.title",
          "type": "string"
        },
        "description": {
          "title": "Product.description",
          "type": "string"
        },
        "price": {
          "title": "Product.price",
          "type": "number"
        }
      },
      "required": [
        "id",
        "title",
        "price"
      ],
      "additionalProperties": false,
      "title": "Product",
      "type": "object"
    },
    "Stock": {
      "properties": {
        "product_id": {
          "title": "Stock.product_id",
          "type": "string"
        },
        "count": {
          "title": "Stock.count",
          "type": "number"
        }
      },
      "required": [
        "product_id",
        "count"
      ],
      "additionalProperties": false,
      "title": "Stock",
      "type": "object"
    },
    "ProductsList": {
      "items": {
        "allOf": [
          {
            "$ref": "#/definitions/Product"
          },
          {
            "properties": {
              "count": {
                "title": "count",
                "type": "number"
              }
            },
            "additionalProperties": false,
            "type": "object"
          }
        ]
      },
      "title": "ProductsList",
      "type": "array"
    }
  },
  "securityDefinitions": {}
};