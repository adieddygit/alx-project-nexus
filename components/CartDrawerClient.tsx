"use client";

import dynamic from "next/dynamic";

const CartDrawerClient = dynamic(() => import("./CartDrawer"), {
  ssr: false,
});

export default CartDrawerClient;
