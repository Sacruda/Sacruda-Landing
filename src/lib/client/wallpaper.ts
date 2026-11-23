import { Img01, Img24, Img33, Img34, Img35, Img37, Img41 } from './images';

export const WALLPAPERS = [Img01, Img24, Img33, Img34, Img35, Img37, Img41];

export function RandomWallpaper() {
	return WALLPAPERS[Math.floor(Math.random() * WALLPAPERS.length)];
}
