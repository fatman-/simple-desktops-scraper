## What...

Go visit [http://simpledesktops.com](http://simpledesktops.com)! They've - arguably - the best collection of minimal, beautiful, abstract art-esque wallpapers! I absolutely adore the official [Simple Desktops for Mac](http://simpledesktops.com/app/mac/) app; which cycles through a humongous collection of 1400+ such aforementioned wallpapers, at a set frequency.

When one of my friends was visibly quite bummed at the lack of something similar for Windows; we thought it best to scrape all the wallpapers and have the stock Windows wallpaper manager manage them.

Hence, this scraper.

## How to...

-   Please ensure that NodeJS is installed on your computer.

-   Clone this repository, and change directory to the `simple-desktops-scraper` folder.

```
git clone --depth 1 https://github.com/fatman-/simple-desktops-scraper
cd simple-desktops-scraper
```

-   Run the following commands to start downloading the wallpapers.

```
npm install
npm start
```

-   The wallpapers are downloaded (by default) to the folder `./data/simple_desktops`.

-   You can run `npm start` as many times as you wish (either in case of errors, or for downloads that stop midway). Wallpapers which have already been downloaded, won't be downloaded again.

-   You can also periodically run `npm run start:update` to check for new wallpaper updates (and download them).

## Please...

Be a good netizen, and do use the scraped data for absolutely-personal purposes only! [Use of these desktop wallpapers is for personal use only, and shouldn't be sold or reposted without the expressed written consent of the desktop creator.](http://simpledesktops.com/about/)

## Credit where credit's due...

Thanks to [Nikhil Astakala](https://github.com/nikhilism15) for getting visibly bummed out, every now and then.
