"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import { MAX_QTY, type Product } from "@/lib/config";
import { EMPTY_ORDER, type Quantities } from "@/lib/order";

type Action = { sku: Product["sku"]; step: 1 | -1 };

function reducer(state: Quantities, { sku, step }: Action): Quantities {
  return { ...state, [sku]: Math.max(0, Math.min(MAX_QTY, state[sku] + step)) };
}

const OrderContext = createContext<{ qty: Quantities; change: (a: Action) => void } | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [qty, change] = useReducer(reducer, EMPTY_ORDER);
  return <OrderContext.Provider value={{ qty, change }}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder deve ser usado dentro de <OrderProvider>");
  return ctx;
}
