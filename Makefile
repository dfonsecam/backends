# // API Gateway
gateway=api-gateway-nginx-api-gateway-1

build:
	@echo "Building API Gateway"
	docker compose build
	@echo "Running API Gateway"
	docker compose up -d

rebuild:
	make stop
	make build

stop:
	@echo "Stopping API Gateway"
	docker compose down --rmi 'all'

