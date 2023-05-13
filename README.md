# GameStar

## Criteria

- Target 4-8 hours of development time
- Choose one or two public API's
-

## Selected Options to Meet the Criteria

### API's

- [RAWG](https://rawgthedocs.orels.sh/)
- [OPENAI_CHATGPT](https://github.com/makeuseofcode/ChatGPT-API-Sample-Code/blob/main/Complete_Guide_to_the_ChatGPT_API.ipynb)

### API usage, Views and User Flow

- Game data comes from RAWG.

* Main Card(s) View - User can view multiple video game cards to obtain information on said cards.
* Selected Card View - User can select a video game card and get a CHATGPT description on said video game card.
* Loader View

### Other

- One test using `vitest`.

### Selected Tools

- Vite
- React
- TailwindCSS
- React-Query(TanQuery)
- React Hook Form
- ESLint
- Prettier
- Vitest

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

4.  To build a productino bundle -- into the `dist` directory, run the command:

    ```sh
    make build
    ```
