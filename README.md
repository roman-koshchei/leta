<p align='center'>
  <img width='100' src='./docs/img/icon.png' />
  <h1 align='center'>LETA</h1>
  <p align='center'>
    Create custom keyboard layout and analyze their performance. 
  </p>
</p>

<p align='center'>
  <a href="https://www.producthunt.com/posts/leta?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-leta" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=363667&theme=neutral" alt="LETA - You&#0032;can&#0032;type&#0032;faster&#0032;with&#0032;alternative&#0032;keyboard&#0032;layouts | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</p>

## About

You will be able to:

- Create own keyboard layout with analysis
- Download layout files for any OS

Anylisis are made with [Genkey API](https://github.com/roman-koshchei/genkey-api)

## Future of project ends with version 1

Developing this app is no longer in my plans. So I decided to finish it in a good state.
I removed authentication and Supabase fully. Now you have 2 features to use:

- layout creation
- analyzing layout

Genkey API was moved to Render, because Railway doesn't provide good free tier.
Maybe there will be small changes in the future, just to clean up it more.

<br/>

## Tech Stack

Frontend:

- [Next.js](https://nextjs.org/learn/basics/create-nextjs-app/setup)
- [Typescript](https://nextjs.org/learn/excel/typescript/create-tsconfig)
- [Tailwind](https://tailwindcss.com/docs/installation/framework-guides)
- [Valtio](https://valtio.pmnd.rs/) for state managment

Backend:

- [Genkey api](https://github.com/roman-koshchei/genkey-api)
