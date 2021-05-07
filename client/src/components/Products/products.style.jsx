import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
const Container = styled.div`
  //background-color: green;
  width: 250px;
  height: 400px;
  //padding: 5px;
  margin: 10px;
  padding: 5px;
  // box-shadow: 2px 2px #999999;
  //  border: 2px solid #e6e6e6;
`;
const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  align-items: center;
`;
const ProductName = styled.p`
  font-weight: 700;
  height: 50px;
  color: #262626;
  //  text-align: center;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;
const ProductPriceDetails = styled.div`
  padding: 5px;
`;
const ProductRating = styled.div``;

const ActualPrice = styled.p`
  font-size: 12px;
  padding-bottom: 3px;
`;
const BoughtPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
const Savings = styled.p`
  font-size: 12px;
`;

const SelectContainer = styled.div``;
export {
  Container,
  BoughtPrice,
  Savings,
  ProductImage,
  ProductName,
  ProductPriceDetails,
  ProductRating,
  ActualPrice,
  SelectContainer,
};

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '2px',
    maxWidth: '95%',
    padding: '10px',
  },
  btncontainer: {
    justifyContent: 'flex-end',
    display: 'flex',
    margin: '15px',
  },
  addBtn: {
    backgroundColor: '#DAF1ED',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '10px',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: '#48c1a8',
    },
  },
  delete: {
    cursor: 'pointer',
    marginLeft: '20px',

    '&:hover': {
      color: 'red',
    },
  },
}));
