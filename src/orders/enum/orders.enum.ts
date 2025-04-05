export enum OrdersStatus {
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export const OrderStatusList = [
  OrdersStatus.PENDING,
  OrdersStatus.DELIVERED,
  OrdersStatus.CANCELLED,
];
