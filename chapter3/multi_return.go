package main

import (
	"errors"
	"fmt"
)

func div(a int, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("Division by zero")
	} else {
		return a / b, nil
	}
}

func main() {

	a, error := div(10, 0)
	if error != nil {
		fmt.Println("Error ", error)
	} else {
		fmt.Println("Result ", a)
	}
}
