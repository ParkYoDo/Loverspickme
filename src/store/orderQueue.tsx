import { createSlice } from '@reduxjs/toolkit';
import { orderQueueState } from 'type/interface';

const initialState: orderQueueState = [];

const orderQueue = createSlice({
  name: 'orderQueue',
  initialState,
  reducers: {
    addOrderQueue(_, action) {
      return [action.payload];
    },
    addSelectOrderQueue(_, action) {
      return action.payload;
    },
    addOrderInfo(_, action) {
      return [action.payload];
    },
    cleanOrderQueue() {
      return [];
    },
  },
});

export default orderQueue;
export const { addOrderQueue, addSelectOrderQueue, addOrderInfo, cleanOrderQueue } = orderQueue.actions;
