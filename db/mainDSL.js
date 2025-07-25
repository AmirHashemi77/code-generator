const mainDSL = {
  apiVersion: "v1",
  kind: "FrontendApp",
  metadata: {
    name: "ProductManagementSystem",
    description: "dsfsdfsf",
  },
  spec: {
    theme: {
      primaryColor: "#0052CC",
      secondColor: "#c2b119ff",
      lang: "fa",
      darkMode: {
        primaryColor: "#0b2449ff",
        secondColor: "#4e4707ff",
      },
      font: "Inter",
    },
  },
  mainLayout: {
    component: "Layout",
    className: "flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-inter",
    children: [
      {
        component: "Header",
        className: "bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center",
        children: [
          {
            component: "Logo",
            width: "200px",
            height: "100px",
            className: "object-contain",
          },
          {
            component: "SearchBox",
            action: "openSearchHandler",
            servicesUrl: "search/searchQuery",
            className: "w-full max-w-md",
          },
          {
            component: "Profile",
            className: "text-sm",
          },
        ],
      },
      {
        component: "MainContentOutlet",
        className: "flex-1 p-4",
      },
      {
        component: "Footer",
        className: "bg-gray-100 dark:bg-gray-800 p-4 text-sm",
        children: [
          {
            component: "Text",
            value: "Edit Product",
            className: "font-semibold",
          },
          {
            component: "Text",
            value: "Phone: 099999999",
            className: "",
          },
          {
            component: "Text",
            value: "Address: dfdsfdsfdsfds",
            className: "",
          },
        ],
      },
    ],
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
    search: {
      searchQuery: {
        method: "GET",
        path: "/api/search",
      },
    },
  },
  navigation: [
    {
      name: "Product",
      path: "/products",
      icon: "box",
    },
    {
      name: "Login",
      path: "/login",
      icon: "box",
    },
    {
      name: "Categories",
      path: "/categories",
      icon: "tag",
    },
  ],
  pages: [
    {
      name: "ProductListPage",
      path: "/products",
      services: ["products.getAll"],
      layout: {
        component: "ProductList",
      },
    },
    {
      name: "LoginPage",
      path: "/login",
      services: [],
      layout: {
        component: "Login",
      },
    },
    {
      name: "DashboardPage",
      path: "/dashboard",
      services: ["products.getAll", "categories.getAll"],
      layout: {
        component: "Dashboard",
      },
    },
  ],
};
