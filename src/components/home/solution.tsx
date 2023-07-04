import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { data } from './solution.data'





const HomeFeature: FC = () => {
  return (
    <Box id="solution" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/home-feature.jpg" width={650} height={678} quality={97} alt="Feature img" />


            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Nossa{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Solução <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>



            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                      <Typography sx={{ lineHeight: 1.4, color: 'text.secondary' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature