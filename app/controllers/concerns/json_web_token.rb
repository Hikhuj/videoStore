# frozen_string_literal: true

# JWT Concern
# Module created to be mixed in, capable of call with other stuff

require "jwt"

module JsonWebToken
	extend ActiveSupport::Concern
	# generate secret key to be used lated on both, encode and decode
	SECRET_KEY = Rails.application.secret_key_base

	def jwt_encode(payload, exp = 7.days.from_now)
		payload[:exp] = exp.to_i
		JWT.encode(payload, SECRET_KEY)
	end

	def jwt_decode(token)
		decoded = JWT.decode(token, SECRET_KEY)[0]
		HashWithIndifferentAccess.new decoded
	end
end