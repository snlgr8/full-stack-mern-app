import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const Container = styled.div`
  width: 250px;
  height: 350px;
  padding: 5px;
  margin: 10px;
  padding: 5px;
  box-shadow: 2px 2px #04b49c;
  border: 2px solid #04b49c;
  background-color: #daf1ed;
`;
const CategoryIcon = styled.img`
  width: 200px;
  align-items: center;
  height: 200px;
`;
const CategoryName = styled.p`
  font-weight: 700;
  color: #262626;
  text-align: center;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;
const ProductCount = styled.div`
  display: flex;
  margin: 3px;
`;
const CategoryType = styled.div`
  // padding: 5px;
  padding-left: 5px;
  display: inline-block;
`;
const CategoryTags = styled.p`
  // display: inline-block;
  margin-top: 12px;
  width: 80%;
  font-size: 13px;
`;
const CategoryTypeContainer = styled.div`
  display: flex;
  margin: 3px;
`;
const DeleteCategoryContainer = styled.div`
  display: flex;
`;

const DeleteIconContainer = styled(DeleteIcon)`
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
  &:hover {
    color: red;
  }
`;
export {
  DeleteCategoryContainer,
  DeleteIconContainer,
  Container,
  CategoryName,
  CategoryIcon,
  CategoryTags,
  CategoryType,
  ProductCount,
  CategoryTypeContainer,
};
