all: installPackages startBackendAndFrontend

installPackages : 
	@echo "installing npm packages"
	cd backend && npm install
	cd frontend && npm install

startBackendAndFrontend:  
	@echo "starting backend server and frontend React app"
	cd backend && node index.js & cd frontend && npm start