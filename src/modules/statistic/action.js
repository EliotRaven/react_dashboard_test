import { statisticActionTypes } from './types';

const index = () => ({
  type: statisticActionTypes.GET_STATISTIC_REQUEST,
  loading: true,
  error: {},
});

export const statisticAction = {
  index,
};
