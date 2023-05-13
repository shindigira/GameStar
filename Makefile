# define standard colors
ifneq ($(TERM),)
	BLACK        := $(shell tput -Txterm setaf 0)
	RED          := $(shell tput -Txterm setaf 1)
	GREEN        := $(shell tput -Txterm setaf 2)
	YELLOW       := $(shell tput -Txterm setaf 3)
	LIGHTPURPLE  := $(shell tput -Txterm setaf 4)
	PURPLE       := $(shell tput -Txterm setaf 5)
	BLUE         := $(shell tput -Txterm setaf 6)
	WHITE        := $(shell tput -Txterm setaf 7)
	BOLD         := $(shell tput bold)
	RESET := $(shell tput -Txterm sgr0)
else
	BLACK        := ""
	RED          := ""
	GREEN        := ""
	YELLOW       := ""
	LIGHTPURPLE  := ""
	PURPLE       := ""
	BLUE         := ""
	WHITE        := ""
	BOLD         := ""
	RESET        := ""
endif

start:
	make environment-variables-instructions
	pnpm install
	pnpm dev
.PHONY: start

environment-variables-instructions:
	@printf "\n\n\nMake sure your environment variables are set:\n"
	@printf "Create a ${BLUE}.env${RESET} file:\n"
	@printf "=======================================================================\n"
	@printf "${GREEN}VITE_RAWG_API_KEY=""${RESET}\n"
	@printf "${GREEN}VITE_RAWG_BASE_URL="https://api.rawg.io/api"${RESET} \n"
	@printf "${BLUE}VITE_OPENAPI_URL="https://api.openai.com/v1/chat/completions"${RESET}\n"
	@printf "${BLUE}VITE_OPENAI_API_KEY=""${RESET} \n"
.PHONY: environment-variables-instructions

colors: ## show all the colors
	@echo "${BLACK}BLACK${RESET}"
	@echo "${RED}RED${RESET}"
	@echo "${GREEN}GREEN${RESET}"
	@echo "${YELLOW}YELLOW${RESET}"
	@echo "${LIGHTPURPLE}LIGHTPURPLE${RESET}"
	@echo "${PURPLE}PURPLE${RESET}"
	@echo "${BLUE}BLUE${RESET}"
	@echo "${WHITE}WHITE${RESET}"
.PHONY: colors