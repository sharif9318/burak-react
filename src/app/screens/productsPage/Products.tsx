import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchBox from "../../components/headers/Searchbox";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className={"top-text"}>Burak Restaurant</Box>
            <Box className={"search-box"}>
              <SearchBox />
            </Box>
          </Stack>
          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  className={"category-btn"}
                >
                  Dish
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"category-btn"}
                >
                  Dessert
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"category-btn"}
                >
                  Drink
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"category-btn"}
                >
                  Salad
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"category-btn"}
                >
                  Other
                </Button>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>Normal size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{ color: 20 > 0 ? "gray" : "white" }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available</Box>
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Stack className={"brands-logo-area"}>
              <Box className={"brands-title"}>Our Family Brands</Box>
              <Stack className={"brands-pics"}>
                <Box
                  component={"img"}
                  src={"/img/gurme.webp"}
                  sx={{ width: "238px", height: "329px" }}
                  borderRadius={"16px"}
                  boxShadow={
                    "0 4px 4px 0 rgba(161, 161, 161, 0.25) inset, 0 4px 4px 0 rgba(108, 108, 108, 0.25) inset, 0 4px 16px 0 rgba(173, 170, 170, 0.04) inset"
                  }
                ></Box>
                <Box
                  component={"img"}
                  src={"/img/doner.webp"}
                  sx={{ width: "238px", height: "329px" }}
                  borderRadius={"16px"}
                  boxShadow={
                    "0 4px 4px 0 rgba(161, 161, 161, 0.25) inset, 0 4px 4px 0 rgba(108, 108, 108, 0.25) inset, 0 4px 16px 0 rgba(173, 170, 170, 0.04) inset"
                  }
                ></Box>
                <Box
                  component={"img"}
                  src={"/img/gurme.webp"}
                  sx={{ width: "238px", height: "329px" }}
                  borderRadius={"16px"}
                  boxShadow={
                    "0 4px 4px 0 rgba(161, 161, 161, 0.25) inset, 0 4px 4px 0 rgba(108, 108, 108, 0.25) inset, 0 4px 16px 0 rgba(173, 170, 170, 0.04) inset"
                  }
                ></Box>
                <Box
                  component={"img"}
                  src={"/img/doner.webp"}
                  sx={{ width: "238px", height: "329px" }}
                  borderRadius={"16px"}
                  boxShadow={
                    "0 4px 4px 0 rgba(161, 161, 161, 0.25) inset, 0 4px 4px 0 rgba(108, 108, 108, 0.25) inset, 0 4px 16px 0 rgba(173, 170, 170, 0.04) inset"
                  }
                ></Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.912075099102!2d126.97231721530988!3d37.55472207979832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca26787e6b111%3A0x1f030fba7646902f!2sSeoul%20Station!5e0!3m2!1sen!2skr!4v1690030852917!5m2!1sen!2skr"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
