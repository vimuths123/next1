import { Merriweather, Lexend, Merriweather_Sans, Poppins, Manrope, Varta, DM_Serif_Display, Jost, Roboto } from 'next/font/google';

export const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin'] });
export const lexend = Lexend({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
export const merriweatherSans = Merriweather_Sans({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] });
export const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
export const manrope = Manrope({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });
export const varta = Varta({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });
export const dmSerifDisplay = DM_Serif_Display({ weight: ['400'], subsets: ['latin'] });
export const jost = Jost({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
export const roboto = Roboto({ weight: ['300', '400', '500', '700', '900'], subsets: ['latin'] });
