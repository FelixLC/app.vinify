deploy:
	grunt bump
	grunt compile

grunt:
	grunt watch

grunt-dev:
	grunt --dev

git:
	git add -A
	git commit -m "$m"
	git push origin master