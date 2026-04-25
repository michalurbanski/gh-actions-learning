package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	log.Println("starting api...")
	http.HandleFunc("/greet", greet)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func greet(w http.ResponseWriter, r *http.Request) {
	message := "hello from my api"
	fmt.Fprint(w, message)

	log.Println(message)
}
