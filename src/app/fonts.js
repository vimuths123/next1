// import { Merriweather, Lexend, Merriweather_Sans, Poppins, Manrope, Varta, DM_Serif_Display, Jost, Roboto } from 'next/font/google';

// export const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin'] });
// export const lexend = Lexend({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
// export const merriweatherSans = Merriweather_Sans({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] });
// export const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
// export const manrope = Manrope({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });
// export const varta = Varta({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });
// export const dmSerifDisplay = DM_Serif_Display({ weight: ['400'], subsets: ['latin'] });
// export const jost = Jost({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
// export const roboto = Roboto({ weight: ['300', '400', '500', '700', '900'], subsets: ['latin'] });



import localFont from 'next/font/local';

export const merriweather = localFont({
  src: [
    {
      path: './fonts/merriweather/Merriweather-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/merriweather/Merriweather-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/merriweather/Merriweather-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/merriweather/Merriweather-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/merriweather/Merriweather-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/merriweather/Merriweather-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/merriweather/Merriweather-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/merriweather/Merriweather-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap', // Use "swap" to display fallback text until the font loads
});
