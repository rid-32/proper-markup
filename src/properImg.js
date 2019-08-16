import React from 'react'

import logoFull1xPng from 'assets/img/png/logo-full@1x.png'
import logoFull2xPng from 'assets/img/png/logo-full@2x.png'
import logoFull3xPng from 'assets/img/png/logo-full@3x.png'
import logoFull1xWebp from 'assets/img/webp/logo-full@1x.webp'
import logoFull2xWebp from 'assets/img/webp/logo-full@2x.webp'
import logoFull3xWebp from 'assets/img/webp/logo-full@3x.webp'
import logo1xPng from 'assets/img/png/logo@1x.png'
import logo2xPng from 'assets/img/png/logo@2x.png'
import logo3xPng from 'assets/img/png/logo@3x.png'
import logo1xWebp from 'assets/img/webp/logo@1x.webp'
import logo2xWebp from 'assets/img/webp/logo@2x.webp'
import logo3xWebp from 'assets/img/webp/logo@3x.webp'

const ProperImg = () => {
  return (
      <picture>
        <source
          srcSet={`${logo1xPng} 1x, ${logo2xPng} 2x, ${logo3xPng} 3x`}
          media="(max-width: 480px)"
        />
        <source
          type="image/webp"
          srcSet={`${logo1xWebp} 1x, ${logo2xWebp} 2x, ${logo3xWebp} 3x`}
          media="(max-width: 480px)"
        />
        <source
          type="image/webp"
          srcSet={`${logoFull1xWebp} 1x, ${logoFull2xWebp} 2x, ${logoFull3xWebp} 3x`}
        />
        <img
          src={logoFull1xPng}
          srcSet={`${logoFull2xPng} 2x, ${logoFull3xPng} 3x`}
          alt="logo"
          title="logo"
        />
      </picture>
  )
}
