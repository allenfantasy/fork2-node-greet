compile:
	coffee --compile --output lib src
test: compile
	./node_modules/mocha/bin/mocha
package: test
	npm pack

.PHONY: compile test package
