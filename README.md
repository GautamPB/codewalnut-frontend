# Front-End Technical Test [Mid-Level]

This is GautamPB's submission for CodeWalnut's frontend assignment.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/GautamPB/codewalnut-frontend.git
```

### 2. Install Dependencies

Once you have `pnpm` installed, run:

```bash
pnpm install
```

### 3. Running the App

To start the development server, run:

```bash
pnpm dev
```

This will launch the app in development mode at [http://localhost:3000](http://localhost:3000).

## Solution

This application was built using ReactJS, NextJS, TailwindCSS and the PokeAPI. All working components are present within the 'src' folder and static components are present within the 'public/images' folder

### Key features

-   Fetching all Pokemon data using PokeAPI
-   Pagination for the home page
-   Sort by options using Pokemon name and base experience
-   Mobile and desktop responsive design
-   Client side routing for singular pokemon
-   Clear loading indicator while fetching data

### Challenges

-   Pagination: logic and state management had to be done carefully to maintain code radability, and optimisation
