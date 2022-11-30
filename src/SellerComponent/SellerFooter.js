import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function SellerFooter(){
    return (
        <Box width='100%' sx={{ flexGrow: 1 }}
            bgcolor="#1976d2" color="white">
            <Container maxWidth='lgr'>
                <Grid container maxWidth='lgr'>
                    <Grid item xs={4} sm={2.2}>
                        <Box fontWeight='bolder' fontSize='large'>Sell with Store</Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">How much does it cost?</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Beginner's guide</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Intro to commerce</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Inventory management</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">How to sell books</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Sell online</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Our Devices</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={2.2}>
                        <Box fontWeight='bolder' fontSize='large'>Selling Programs</Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Fullfillment by Store</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Store Advertising</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Global selling</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Foundation</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Store Business</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">More Programs</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={2.2}>
                        <Box fontWeight='bolder' fontSize='large'>Store for Brands</Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Buld an online store</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Tips for brands on store</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Brands case studies</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Store brands registry</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Ecommerce storefronts</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={2.2}>
                        <Box fontWeight='bolder' fontSize='large'>Rescources</Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Selling Partner Blog</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Seller University</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Seller Central Help</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Seller events</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Black Business Accelerator</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">More ways to make money</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={2.2}>
                        <Box fontWeight='bolder' fontSize='large'>Tools</Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Log in to your seller account</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Store Seller App</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Seller central Partner Network</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Store fee calculator</Link>
                        </Box>
                        <Box spacing={3}>
                            <Link href="#" color="inherit">Automated Pricing</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}