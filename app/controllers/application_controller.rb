# frozen_string_literal: true

class ApplicationController < ActionController::API
	include JsonWebToken
	## Debo revisar el SESSION en el backend no en el front-end
	before_action :authenticate_request

	private
	    def authenticate_request
			## Debe retornar un JSON de OK
			## Para comprender que la session es AUTH o NOT
	    	header = request.headers["Authorization"]
	    	header = header.split(" ").last if header
	    	decoded= jwt_decode(header)
	    	@current_user = User.find(decoded[:user_id])
	    end
end