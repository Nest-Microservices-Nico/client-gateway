import { IsEnum, IsOptional } from 'class-validator';
import { OrdersStatus, OrderStatusList } from '../enum/orders.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrdersStatus;
}
