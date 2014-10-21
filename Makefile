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

cordova:
	grunt compile
	rm -R /Users/apple/ios/app_vinify/www/index.html
	rm -R /Users/apple/ios/app_vinify/www/assets
	cp -r /Users/apple/development/app/client/bin/assets /Users/apple/ios/app_vinify/www/assets
	cp /Users/apple/development/app/client/bin/index.html /Users/apple/ios/app_vinify/www/index.html