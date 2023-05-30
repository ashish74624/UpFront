# News Website with Next.js

This is a simple news website built using Next.js, a React framework for server-side rendering and static site generation. The website fetches data from the [NewsAPI](https://newsapi.org/) to display articles from various sources.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install the dependencies: `npm install`
4. Obtain an API key from [NewsAPI](https://newsapi.org/) by creating an account and generating a key.
5. Create a `.env.local` file in the root directory and add the following line, replacing `YOUR_API_KEY` with your actual API key:
   ```
   NEXT_PUBLIC_NEWS_API_KEY=YOUR_API_KEY
   ```
6. Start the development server: `npm run dev`
7. Open your browser and visit `http://localhost:3000` to see the news website.

## Features

- **Dynamic Routes**: The website utilizes Next.js' dynamic routing feature to create pages for each individual article. The articles are fetched from the NewsAPI and displayed dynamically based on the route.
- **Server-side Rendering**: Next.js provides server-side rendering capabilities, allowing the website to render the initial content on the server and deliver a fully populated page to the client.
- **Static Site Generation**: Some pages are pre-generated as static HTML files during the build process. This enables fast loading times and reduces the dependency on server resources.
- **Responsive Design**: The website is designed to be responsive and adapt to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.

## Tech Stack

The project uses the following technologies:

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [NewsAPI](https://newsapi.org/) - External API for fetching news articles.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling the website.

## Contributing

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository: `git clone https://github.com/your-username/your-repo.git`
3. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
4. Make your modifications and commit your changes: `git commit -am 'Add some feature'`
5. Push the branch to your forked repository: `git push origin feature-name`
6. Create a new pull request on the original repository's GitHub page.

Please make sure to follow the existing code style and contribute in a respectful manner.


## Acknowledgments

- [NewsAPI](https://newsapi.org/) for providing the news data used in this project.
- [Next.js](https://nextjs.org/) for the excellent framework and documentation.

Thank you for visiting this repository and considering contributing to the project!