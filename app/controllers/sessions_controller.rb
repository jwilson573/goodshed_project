class SessionsController < ApplicationController
  def index
  end

  def create
        @user = User.find_by! email: params[:email]
        puts "Inside the try method"
        puts @user
        if @user
            if @user.try(:authenticate, params[:password])
                session[:user_id] = @user.id 
                return redirect_to "/#{@user.id}/profile"

            end

            flash[:errors] = ["Password is invalid"]
            
        elsif !@user && !@user.try(:authenticate, params[:password])

            flash[:errors] = ["Email is invalid"] + ["Password is invalid"]

        else
            flash[:errors] = ["Email is invalid"]
        end

        return redirect_to "/login"
    end

  def destroy
    session.clear

    return redirect_to root_path
  end
end
