const detailsDSL = {
  pages: [
    {
      name: "ProductListPage",
      path: "/products",
      layout: {
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
                  className: "bg-blue-600 text-white",
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
        footer: {
          component: "Footer",
          properties: {
            title: "Edit Product",
            phoneNumber: "099999999",
            address: "Some address",
          },
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
                    { field: "name", header: "Product Name" },
                    { field: "price", header: "Price", format: "currency" },
                    { field: "category.name", header: "Category" },
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
      params: { id: "required" },
      layout: {
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
                  className: "bg-blue-600 text-white",
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
        footer: {
          component: "Footer",
          properties: {
            title: "Edit Product",
            phoneNumber: "099999999",
            address: "Some address",
          },
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
                action: { actionType: "navigateTo", path: "/products" },
              },
              onError: {
                action: {
                  actionType: "error",
                  errorList: [{ errorCode: 404, errorMessage: "Product not found." }],
                },
              },
            },
          },
          content: [
            {
              component: "input",
              name: "name",
              label: "Product Name",
              labelType: "placeHolder",
              type: "text",
              className: "border rounded p-2",
              validate: [{ required: true, maxLength: 10, minLength: 4 }],
            },
            {
              component: "input",
              name: "price",
              label: "Price",
              labelType: "placeHolder",
              type: "number",
              className: "border rounded p-2",
              validate: [{ required: true, max: 10, min: 1 }],
            },
            {
              component: "input",
              name: "categoryId",
              label: "Category",
              type: "select",
              labelType: "placeHolder",
              dataSource: "api.categories.getAll",
              valueField: "id",
              titleField: "name",
              defualtValue: "id",
              className: "border rounded p-2",
              validate: [{ required: true }],
            },
          ],
        },
      ],
    },
    {
      name: "DashboardPage",
      path: "/dashboard",
      layout: {
        header: {
          component: "Header",
          properties: { title: "Dashboard" },
        },
      },
      content: [
        {
          component: "Grid",
          properties: {
            columns: 3,
            gap: "1rem",
            items: [
              {
                component: "Card",
                properties: {
                  title: "Total Products",
                  icon: "box",
                  className: "p-4 bg-white shadow rounded",
                  dataSource: "api.dashboard.getTotalProducts",
                  valueField: "total",
                },
              },
              {
                component: "Card",
                properties: {
                  title: "Orders",
                  icon: "shopping-cart",
                  className: "p-4 bg-white shadow rounded",
                  dataSource: "api.dashboard.getOrderCount",
                  valueField: "count",
                },
              },
              {
                component: "Card",
                properties: {
                  title: "Users",
                  icon: "users",
                  className: "p-4 bg-white shadow rounded",
                  dataSource: "api.dashboard.getUserCount",
                  valueField: "totalUsers",
                },
              },
            ],
          },
        },
      ],
    },
    {
      name: "LoginPage",
      path: "/login",
      content: [
        {
          component: "Form",
          properties: {
            onSubmit: {
              action: "callApi",
              endpoint: "api.auth.login",
              onSuccess: {
                action: { actionType: "navigateTo", path: "/dashboard" },
              },
            },
          },
          content: [
            {
              component: "input",
              name: "username",
              label: "Username",
              type: "text",
              className: "w-full border rounded p-2",
              validate: [{ required: true }],
            },
            {
              component: "input",
              name: "password",
              label: "Password",
              type: "password",
              className: "w-full border rounded p-2",
              validate: [{ required: true }],
            },
            {
              component: "Button",
              properties: {
                label: "Login",
                variant: "primary",
                className: "bg-blue-600 text-white py-2 px-4 rounded",
              },
            },
          ],
        },
      ],
    },
  ],
};
