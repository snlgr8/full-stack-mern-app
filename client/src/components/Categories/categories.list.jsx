import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../redux/category/category.actions";
import { Category } from "./category.component";
import useStyles from "./categories.styles";
import Add from "@material-ui/icons/Add";

export const CategoriesList = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <div className={classes.btncontainer}>
        <Link to="/addCategory">
          <Button
            startIcon={<Add />}
            variant="contained"
            className={classes.addBtn}
          >
            Add Category
          </Button>
        </Link>
      </div>
      <Grid container className={classes.root} spacing={2}>
        {categories.length > 0 &&
          categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
      </Grid>
    </>
  );
};
