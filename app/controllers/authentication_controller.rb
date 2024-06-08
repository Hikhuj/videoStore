# frozen_string_literal: true

class AuthenticationController < ApplicationController
	# Protects the route
	skip_before_action :authenticate_request

	# POST /auth/login
	def login
		binding.pry
		@user = User.find_by_email(params[:email])
		if @user&.authenticate(params[:password])
			token = jwt_encode(user_id: @user.id)
			render json: { token: token }, status: :ok
		else
			render json: { error: 'unauthorized' }, status: :unauthorized
		end
	end
end
