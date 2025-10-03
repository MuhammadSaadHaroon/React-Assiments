import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "../Products/Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 9000,
      image:
        "https://www.soundguys.com/wp-content/uploads/2023/09/Senn_ACCENTUM_Wireless_Set_CGI_Product_ISO-1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3000,
      image:
        "https://topsov.com/wp-content/uploads/2021/07/raznovidnosti-chasov.jpg",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1600,
      image:
        "https://wallpapers.com/images/hd/gaming-mice-1920-x-1080-wallpaper-qh6xvvdj97ewa9pv.jpg",
    },
    {
      id: 4,
      name: "Gaming Monitor",
      price: 5200,
      image:
        "https://www.pcworld.com/wp-content/uploads/2024/05/acer-ultrawide-gaming-monitor.jpg?quality=50&strip=all",
    },
    {
      id: 5,
      name: "Gaming Chair",
      price: 37000,
      image:
        "https://ixbt.online/gametech/sadm_images/1test/tt/02.jpg",
    },
    {
      id: 6,
      name: "Gaming Keyboard",
      price: 4000,
      image:
        "https://wallpapers.com/images/hd/gaming-keyboards-1920-x-1080-wallpaper-9ot0y2wqr4slrutn.jpg",
    },
  ];

  return (
    <div className="products-container">
      <Typography variant="h4" align="center" gutterBottom>
        Our Products
      </Typography>
      <br />
      <Grid container spacing={3} justifyContent="center">
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="product-card">
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
                className="product-image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="product-title"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product-price"
                >
                  Rs.{item.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="add-btn"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
