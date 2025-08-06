import React from "react";
import { Box, Stack, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
  return (
    <TabPanel value="1">
      <Stack spacing={2}>
        {[1,2].map((ele, index) => (
          <Box key={index} className="order-main-box">
            <Box className="order-box-scroll">
              {[1, 2].map((_ele2, index2) => (
                <Box key={index2} className="orders-name-price">
                  <img src="/img/kebab.webp" className="order-dish-img" alt="Kebab" />
                  <p className="title-dish">Kebab</p>
                  <Box className="price-box">
                    <p>1</p>
                    <img src="/icons/close.svg" alt="Close" />
                    <p>p</p>
                    <img src="/icons/pause.svg" alt="Pause" />
                    <p style={{ marginLeft: "15px" }}>22</p>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className="total-price-box">
              <Box className="box-total">
                <p>Product price</p>
                <p>$44</p>
                <img src="/icons/plus.svg" alt="Plus" style={{ marginLeft: "20px" }} />
                <p>Delivery cost</p>
                <p>$2</p>
                <img src="/icons/pause.svg" alt="Pause" style={{ marginLeft: "20px" }} />
                <p>Total</p>
                <p>$46</p>
              </Box>

              {/* <p className="data-comp1">{moment().format("YY-MM-DD HH:mm")}</p> */}
              <Button variant="contained" className="cancel-button">
                Cancel
              </Button>
                            <Button variant="contained" className="pay-button">
                PAYMENT
              </Button>
            </Box>
          </Box>
        ))}

        {false && (
          <Box display="flex" flexDirection="row" justifyContent="center">
            <img
              src="/icons/noimage-list.svg"
              alt="No orders"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
