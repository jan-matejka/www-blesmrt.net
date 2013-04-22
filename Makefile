TOP:=$(dir $(lastword $(MAKEFILE_LIST)))

PYTHON?=python

build:
	mkdir build
	${PYTHON} main.py
	cp -r static build

clean:
	rm -rf ./build
