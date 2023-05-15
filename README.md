# GameStar

A web app that aims to be *the* one-stop destination for gamers, providing them with a wealth of information on all the latest game releases.

![Home page](https://github.com/shindigira/GameStar/blob/main/public/GameStar-example.png?raw=true "GameStar")

### Click here for live demo   <a href="https://game-star-iifzfx36q-shindigira.vercel.app/">GameStar</a>

## Criteria

- Target 4-8 hours of development time
- Choose one or two public API's
- Focus on one or two features

## Selected Options to Meet the Criteria

### Selected API's

- [RAWG](https://rawgthedocs.orels.sh/)
- [OPENAI_CHATGPT](https://platform.openai.com/docs/api-reference/completions)

### API usage, Views and User Flow

- Game data comes from RAWG. A game's name from RAWG data is used to fetch CHATGPT information on said game.

* Selected Card View - User can select a video game card and get a CHATGPT description on said video game card.
* Main Card(s) View - User can view multiple video game cards to obtain information on said cards.
* Loader View
* Some level of responsiveness (Desktop, Mobile)

### Other

- One test using `vitest`.

### Selected Tools

- Vite
- React
- TailwindCSS
- React-Query(TanQuery)
- Axios
- ESLint
- Prettier
- Vitest
- Environmental Variables

## Usage

1.  Read the `ENV-GUIDE.md` to set your environment variables first.

2.  To both install and/or start, run the command:

    ```sh
    make start
    ```

3.  To run tests, run the command:

    ```sh
    make test
    ```

4.  To build a production bundle -- into the `dist` directory, run the command:

    ```sh
    make build
    ```
