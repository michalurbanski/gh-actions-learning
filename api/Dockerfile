FROM golang:1.26.2-alpine3.23 as build
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o go-api main.go

FROM scratch
WORKDIR /app
COPY --from=build /app/go-api .
CMD ["./go-api"]
