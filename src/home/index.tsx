import { Box, Link, styled, Typography } from '@mui/material'
import { CommonContainer } from '../components/Styled'
import Button from '../components/Button/Button'
import Logo from '../assets/svg/logo.svg'
import bg1 from '../assets/svg/bg1.svg'

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `url(${bg1.src}) no-repeat`,
  backgroundPosition: 'right',
  backgroundSize: 'auto 100%',
  [theme.breakpoints.down('md')]: {
    background: 'none',
  },
}))

export default function Index() {
  return (
    <Wrapper>
      <CommonContainer>
        <Link
          underline="none"
          href="#/"
          sx={{
            position: 'absolute',
            top: 40,
          }}
        >
          <img alt="" src={Logo.src} />
        </Link>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: '100vh',
            paddingLeft: '5%',
            maxWidth: { md: '60%' },
            padding: { md: '40px 0' },
          }}
        >
          <Box>
            <Typography variant="h2" fontSize={{ md: 64, xs: 32 }}>
              Standard IO connecting every chain and beyond
            </Typography>
            <Typography mt={'16px'} variant="body1" fontSize={{ md: 24, xs: 16 }} maxWidth={540}>
              Multichain Event Protocol (MEP) is an interoperability communication protocol
            </Typography>
            <Box mt="35px" display={'grid'} gap="15px" gridTemplateColumns="repeat(auto-fill, 200px)">
              <Button>Request Demo</Button>
              <Button>Learn More</Button>
              <Button>Contact Us</Button>
            </Box>
          </Box>
        </Box>
      </CommonContainer>
    </Wrapper>
  )
}
