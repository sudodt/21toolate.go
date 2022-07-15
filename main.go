package main

import (
	"github.com/gin-gonic/gin"
	"realestase.go/controllers"
)

func main() {
	r := gin.Default()

	public := r.Group("/api")

	public.POST("/register", controllers.Register)

	r.Run(":8080")
}
