export const db = {
  apiVersion: "v1",
  kind: "FrontendApp",
  metadata: {
    name: "ProductManagementSystem",
  },
  spec: {
    theme: {
      primaryColor: "#0052CC",
      font: "Inter",
    },
    apiBindings: {
      products: {
        getAll: {
          method: "GET",
          path: "/api/products",
        },
        getById: {
          method: "GET",
          path: "/api/products/:id",
        },
        create: {
          method: "POST",
          path: "/api/products",
        },
        update: {
          method: "PUT",
          path: "/api/products/:id",
        },
        delete: {
          method: "DELETE",
          path: "/api/products/:id",
        },
      },
      categories: {
        getAll: {
          method: "GET",
          path: "/api/categories",
        },
      },
    },
    navigation: [
      {
        title: "Products",
        path: "/products",
        icon: "box",
      },
      {
        title: "Categories",
        path: "/categories",
        icon: "tag",
      },
    ],
    pages: [
      {
        name: "ProductListPage",
        path: "/products",
        header: {
          component: "Header",
          properties: {
            title: "Product Management",
            actions: [
              {
                component: "Button",
                properties: {
                  label: "Add New Product",
                  variant: "primary",
                  icon: "plus",
                },
                events: {
                  onClick: {
                    action: "navigateTo",
                    path: "/products/new",
                  },
                },
              },
            ],
          },
        },
        content: [
          {
            component: "Grid",
            properties: {
              columns: 1,
              gap: "1rem",
              items: [
                {
                  component: "DataTable",
                  properties: {
                    dataSource: "api.products.getAll",
                    columns: [
                      {
                        field: "name",
                        header: "Product Name",
                      },
                      {
                        field: "price",
                        header: "Price",
                        format: "currency",
                      },
                      {
                        field: "category.name",
                        header: "Category",
                      },
                    ],
                    rowActions: [
                      {
                        icon: "edit",
                        action: "navigateTo",
                        path: "/products/edit/:id",
                      },
                      {
                        icon: "trash",
                        action: "callApi",
                        endpoint: "api.products.delete",
                        confirm: "Are you sure you want to delete this product?",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      {
        name: "ProductEditPage",
        path: "/products/edit/:id",
        header: {
          component: "Header",
          properties: {
            title: "Edit Product",
          },
        },
        content: [
          {
            component: "Form",
            properties: {
              dataSource: "api.products.getById",
              onSubmit: {
                action: "callApi",
                endpoint: "api.products.update",
                onSuccess: {
                  action: "navigateTo",
                  path: "/products",
                },
              },
              fields: [
                {
                  name: "name",
                  label: "Product Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "price",
                  label: "Price",
                  type: "number",
                  required: true,
                },
                {
                  name: "categoryId",
                  label: "Category",
                  type: "select",
                  dataSource: "api.categories.getAll",
                  valueField: "id",
                  labelField: "name",
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
