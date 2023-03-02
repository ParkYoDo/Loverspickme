import styled from 'styled-components';

export const OrderListWrapper = styled.div`
  padding: 14px 18px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

export const OrderSuccessText = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

export const OrderDate = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const DeliveryInfoDiv = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`;

export const DeliveryInfo = styled.div<{ name?: string }>`
  font-size: 12px;
  color: #616060;
  font-weight: ${(props) => props.name && '600'};
`;

export const ConfirmBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid #b7b7b7;
  color: gray;
  border-radius: 12px;
  background-color: transparent;
  font-size: 12px;
  padding: 4px 16px;
  &:hover {
    color: #ff8be8;
    border: 1px solid #ff8be8;
  }
`;

export const OrderProductInfoDiv = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  border-bottom: 1px solid #d6d5d5;
`;

export const OrderProductInfoWrapper = styled.div`
  border: 1px solid #d6d5d5;
  margin-top: 12px;
  ${OrderProductInfoDiv}:last-child {
    border-bottom: none;
  }
`;

export const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

export const ProductInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
`;

export const ProductName = styled.div`
  font-size: 14px;
  color: #535252;
  cursor: pointer;
`;

export const ProductCount = styled.div`
  font-size: 12px;
  color: #a8a4a4;
  cursor: pointer;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;