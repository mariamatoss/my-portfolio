import { styled, Grid, Typography } from "@mui/material"
import avata from "../../../../assets/images/avata.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';





import { Button, Container } from "react-bootstrap";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "70%",
        borderRadius: "50%"

    }))

    return (
<>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Grid position="relative">
                            <StyledImg src={avata} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h1" textAlign="center" pb={2}>Maria Matos</Typography>
                            <Typography color="primary" variant="h2" textAlign="center" ></Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
            </Container>
        </StyledHero>
    </>
)
}

export default Hero